package oocl.ita.main.service;

import oocl.ita.main.model.User;

public interface UserManageService {
	
	int register(User user);
	
	int checkEmail(String email);
	
	int getUserId(String email);
	
	int checkUser(String userEmail, String password);
	
	User getUser(String email);
	

}
