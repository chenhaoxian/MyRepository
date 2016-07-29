package oocl.ita.main.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import oocl.ita.main.model.User;
import oocl.ita.main.service.CartService;
import oocl.ita.main.service.impl.CartServiceImpl;

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
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		PrintWriter writer = response.getWriter();
		if(user == null){
			writer.print("fail");
		}else{
			CartService cartService = new CartServiceImpl();
			int fId = Integer.parseInt(request.getParameter("fId"));
			int count = cartService.buyFood(user.getuId(), fId);
			
		}
		
	}

}
