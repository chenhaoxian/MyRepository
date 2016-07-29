package oocl.ita.main.dao;

import java.util.List;

import oocl.ita.main.model.Food;

public interface SearchDao {

	List<String> getAreaList();
	
	List<String> getAreaListByKey(String key);
	
	List<Food> searchAllFood();
	
	
	
}
