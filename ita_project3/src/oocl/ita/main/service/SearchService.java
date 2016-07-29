package oocl.ita.main.service;

import java.util.List;

import oocl.ita.main.model.Food;

public interface SearchService {
	
	List<String> getAreaList(); 
	
	List<String> findAreaListByKey(String key);
	
	List<Food> searchAllFood();

}
