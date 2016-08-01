package oocl.ita.main.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import oocl.ita.main.model.User;
import oocl.ita.main.service.OrderService;
import oocl.ita.main.service.impl.OrderServiceImpl;

/**
 * Servlet implementation class OrderBuyServlet
 */
public class OrderBuyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public OrderBuyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		OrderService orderService = new OrderServiceImpl();
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		if(user != null){
			int count = orderService.payOrder(user.getUserId());
			response.setContentType("text/xml;charset=utf-8");
			response.setHeader("Cache-Control", "no-cache");
			PrintWriter writer = response.getWriter();
			if(count > 0){
				writer.print("success");
			}
		}else{
			
		}
	}

}
