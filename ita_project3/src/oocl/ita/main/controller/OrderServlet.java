package oocl.ita.main.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import oocl.ita.main.model.ShoppingCart;
import oocl.ita.main.model.User;
import oocl.ita.main.service.CartService;
import oocl.ita.main.service.SearchService;
import oocl.ita.main.service.impl.CartServiceImpl;
import oocl.ita.main.service.impl.SearchServiceImpl;

/**
 * Servlet implementation class OrderServlet
 */
public class OrderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public OrderServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int count = Integer.parseInt(request.getParameter("count"));
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		if(user != null){
			SearchService searchService = new SearchServiceImpl();
			List<ShoppingCart> shoppingCart = searchService.searchCart(user.getUserId());
			request.setAttribute("cartCount", count);
			request.setAttribute("orderList", shoppingCart);
			
			request.getRequestDispatcher("view/orderPage.jsp").forward(request, response);
		}else{
			
		}
	}

}
