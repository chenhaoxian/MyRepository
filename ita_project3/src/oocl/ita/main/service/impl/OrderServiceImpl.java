package oocl.ita.main.service.impl;

import java.util.List;

import oocl.ita.main.dao.OrderDao;
import oocl.ita.main.dao.impl.OrderDaoImpl;
import oocl.ita.main.model.Order;
import oocl.ita.main.model.ShoppingCart;
import oocl.ita.main.service.OrderService;

public class OrderServiceImpl implements OrderService {

	private OrderDao orderDao = new OrderDaoImpl();

	@Override
	public int payOrder(int uId) {
		List<ShoppingCart> cartList = orderDao.getCartList(uId);
		StringBuilder sb = new StringBuilder();
		int oPrice = 0;
		for (int i = 0; i < cartList.size(); i++) {
			sb.append(cartList.get(i).getfName()).append("_").append(cartList.get(i).getfNum()).append("_")
					.append(cartList.get(i).getfPrice()).append(",");
			oPrice += (cartList.get(i).getfNum()*cartList.get(i).getfPrice());
		}
		return orderDao.payOrder(uId,sb.toString(), oPrice);
	}

	@Override
	public List<Order> findOrder(int uId) {
		
		return orderDao.findOrder(uId);
	}

}
