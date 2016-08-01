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
 * Servlet implementation class AddFoodServlet
 */
public class AddFoodServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddFoodServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int fId = Integer.parseInt(request.getParameter("fId"));
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		
		if(user != null){
			CartService cartService = new CartServiceImpl();
			int count = cartService.addFood(user.getUserId(), fId);
			response.setContentType("text/xml;charset=utf-8");
			response.setHeader("Cache-Control", "no-cache");
			PrintWriter writer = response.getWriter();
			if(count == 1){
				writer.print("success");
			}else{
				writer.print("fail");
			}
		}else{
			
		}
	}

}
