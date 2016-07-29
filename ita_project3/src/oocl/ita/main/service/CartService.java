package oocl.ita.main.service;

public interface CartService {
	
	int buyFood(int uId,int fId);
	
	int recordBuy(int uId,int fId);

}
