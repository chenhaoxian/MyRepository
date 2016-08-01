package oocl.ita.main.dao;

import java.util.List;

import oocl.ita.main.model.Order;
import oocl.ita.main.model.ShoppingCart;

public interface OrderDao {

	int payOrder(int uId, String fMessage , int oPrice);
	
	List<ShoppingCart> getCartList(int uId );
	
	List<Order> findOrder(int uId);
}
