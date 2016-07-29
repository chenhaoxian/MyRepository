package oocl.ita.main.service.impl;

import oocl.ita.main.dao.CartDao;
import oocl.ita.main.dao.impl.CartDaoImpl;
import oocl.ita.main.service.CartService;

public class CartServiceImpl implements CartService {

	private CartDao cartDao = new CartDaoImpl();
	
	@Override
	public int buyFood(int uId, int fId) {
		
		return cartDao.buyFood(uId, fId);
	}

	@Override
	public int recordBuy(int uId, int fId) {
//		int count =
		return 0;
	}

}
