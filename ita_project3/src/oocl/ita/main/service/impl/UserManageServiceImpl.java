package oocl.ita.main.service.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import oocl.ita.main.dao.UserManageDao;
import oocl.ita.main.dao.impl.UserManageDaoImpl;
import oocl.ita.main.model.User;
import oocl.ita.main.service.UserManageService;
import oocl.ita.main.util.DbUtil;

public class UserManageServiceImpl implements UserManageService {

	private UserManageDao userManageDao = new UserManageDaoImpl();
	
	@Override
	public int register(User user) {
		// TODO Auto-generated method stub
		return userManageDao.register(user);
	}

	@Override
	public int checkEmail(String email) {
		// TODO Auto-generated method stub
		return userManageDao.checkEmail(email);
	}

	@Override
	public int getUserId(String email) {
		// TODO Auto-generated method stub
		return userManageDao.getUserId(email);
	}

	@Override
	public int checkUser(String userEmail, String password) {
		// TODO Auto-generated method stub
		return userManageDao.checkUser(userEmail, password);
	}

	@Override
	public User getUser(String email) {
		// TODO Auto-generated method stub
		return userManageDao.getUser(email);
	}

	

}
