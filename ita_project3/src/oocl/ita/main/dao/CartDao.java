package oocl.ita.main.dao;

public interface CartDao {
	
	int buyFood(int uId, int fId);
	
	int checkRecord(int uId, int fId);
	
	int insert2Cart(int uId, int fId);
	
	int updateCart(int uId, int fId);
	
	int addFood(int uId, int fId);
	
	int cutFood(int uId, int fId);
	


}
