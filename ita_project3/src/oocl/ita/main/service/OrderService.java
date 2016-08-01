package oocl.ita.main.service;

import java.util.List;

import oocl.ita.main.model.Order;

public interface OrderService {
	
	int payOrder(int uId);
	
	List<Order> findOrder(int uId);

}
