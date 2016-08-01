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

	@Override
	public int save2Cart(int uId, int fId) {
		if(cartDao.checkRecord(uId, fId) == 0){
			return cartDao.insert2Cart(uId, fId);
		}else{
			return cartDao.updateCart(uId, fId);
		}
		
	}

	@Override
	public int addFood(int uId, int fId) {
		
		return cartDao.updateCart(uId, fId);
	}

	@Override
	public int cutFood(int uId, int fId) {
		// TODO Auto-generated method stub
		return cartDao.cutFood(uId, fId);
	}

}
