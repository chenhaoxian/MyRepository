package oocl.ita.main.dao;

import java.util.List;

import oocl.ita.main.model.Food;
import oocl.ita.main.model.ShoppingCart;

public interface SearchDao {

	List<String> getAreaList();
	
	List<String> getAreaListByKey(String key);
	
	List<Food> searchAllFood();
	
	List<ShoppingCart> searchCart(int uId);
	
	List<ShoppingCart> searchCart(int uId, int fId);
	
}
