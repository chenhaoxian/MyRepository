package oocl.ita.main.service;

import java.util.List;

import oocl.ita.main.model.Food;
import oocl.ita.main.model.ShoppingCart;

public interface SearchService {
	
	List<String> getAreaList(); 
	
	List<String> findAreaListByKey(String key);
	
	List<Food> searchAllFood();
	
	List<ShoppingCart> searchCart(int uId);
	
	List<ShoppingCart> searchCart(int uId, int fId);

}
