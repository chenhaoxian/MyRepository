package oocl.ita.main.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;

import oocl.ita.main.model.ShoppingCart;
import oocl.ita.main.model.User;
import oocl.ita.main.service.CartService;
import oocl.ita.main.service.SearchService;
import oocl.ita.main.service.impl.CartServiceImpl;
import oocl.ita.main.service.impl.SearchServiceImpl;

/**
 * Servlet implementation class BuyFoodServlet
 */
public class BuyFoodServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BuyFoodServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		SearchService searchService = new SearchServiceImpl();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		response.setContentType("text/xml;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter writer = response.getWriter();
		if(user != null){
			CartService cartService = new CartServiceImpl();
			int fId = Integer.parseInt(request.getParameter("fId"));
			int count = cartService.save2Cart(user.getUserId(), fId);
			List<ShoppingCart> shoppingCart = searchService.searchCart(user.getUserId(),fId);
			ObjectMapper mapper = new ObjectMapper();
			String cartJson = mapper.writeValueAsString(shoppingCart);
			writer.print(cartJson);
		}else{
			writer.print("fail");
		}
		

		
	}

}
