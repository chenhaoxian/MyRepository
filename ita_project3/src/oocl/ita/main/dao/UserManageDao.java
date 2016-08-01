package oocl.ita.main.dao;

import oocl.ita.main.model.User;

public interface UserManageDao {

	int checkEmail(String email);
	
	int register(User user);
	
	int getUserId(String email);
	
	int checkUser(String userEmail, String password);
	
	User getUser(String email);
	
}
