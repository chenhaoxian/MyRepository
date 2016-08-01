package oocl.ita.main.service;

public interface CartService {
	
	int buyFood(int uId,int fId);
	
	int recordBuy(int uId,int fId);
	
	int save2Cart(int uId, int fId);
	
	int addFood(int uId, int fId);
	
	int cutFood(int uId, int fId);

}
