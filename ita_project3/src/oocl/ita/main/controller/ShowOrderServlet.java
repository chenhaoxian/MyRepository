package oocl.ita.main.controller;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import oocl.ita.main.model.Order;
import oocl.ita.main.model.ShoppingCart;
import oocl.ita.main.model.User;
import oocl.ita.main.service.OrderService;
import oocl.ita.main.service.impl.OrderServiceImpl;

/**
 * Servlet implementation class ShowOrderServlet
 */
public class ShowOrderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowOrderServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("user");
		if(user != null){
			OrderService orderService = new OrderServiceImpl();
			List<Order> orderList = orderService.findOrder(user.getUserId());
			Map<Timestamp, List<ShoppingCart>> orderMap = new HashMap<Timestamp,List<ShoppingCart>>();
			Map<Timestamp, Integer> oPriceMap = new HashMap<Timestamp, Integer>();
			for(int i=0; i<orderList.size(); i++){
				String oMessage = orderList.get(i).getoMessage();
				List<ShoppingCart> cartList = new ArrayList<ShoppingCart>();
				for(int j=0 ; j<oMessage.split(",").length; j++){
					ShoppingCart cart = new ShoppingCart();
					String message = oMessage.split(",")[j];
					cart.setfName(message.split("_")[0]);
					cart.setfNum(Integer.parseInt(message.split("_")[1]));
					cart.setfPrice(Integer.parseInt(message.split("_")[2]));
					cartList.add(cart);
				}
				oPriceMap.put(orderList.get(i).getTime(), orderList.get(i).getoPrice());
				orderMap.put(orderList.get(i).getTime(), cartList);
			}

			request.setAttribute("orderMap", orderMap);
			request.setAttribute("oPriceMap", oPriceMap);
			
			request.getRequestDispatcher("view/showOrderPage.jsp").forward(request, response);
		}else{
			
		}
		
		
	}

}
