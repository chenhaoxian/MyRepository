package oocl.ita.main.service.impl;

import java.util.List;

import oocl.ita.main.dao.SearchDao;
import oocl.ita.main.dao.impl.SearchDaoImpl;
import oocl.ita.main.model.Food;
import oocl.ita.main.service.SearchService;

public class SearchServiceImpl implements SearchService {
	
	private SearchDao searchDao = new SearchDaoImpl();

	@Override
	public List<String> getAreaList() {
		
		return searchDao.getAreaList();
	}

	@Override
	public List<String> findAreaListByKey(String key) {
		
		return searchDao.getAreaListByKey(key);
	}

	@Override
	public List<Food> searchAllFood() {
		
		return searchDao.searchAllFood();
	}
	
	

}
