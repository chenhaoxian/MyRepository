package oocl.ita.main.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import oocl.ita.main.dao.UserManageDao;
import oocl.ita.main.model.User;
import oocl.ita.main.util.DbUtil;

public class UserManageDaoImpl implements UserManageDao {

	private Connection con ;
	private PreparedStatement pst ;
	
	@Override
	public int register(User user) {
		con = DbUtil.connect();
		String sql = "insert into itaproject_user(userId,username,userEmail,password) "
				+ "values(HYMAN_SEQ01.nextval,?,?,?)";
		int count = 0;
		try {
			pst = con.prepareStatement(sql);
			pst.setString(1, user.getUsername());
			pst.setString(2, user.getUserEmail());
			pst.setString(3, user.getPassword());
			count = pst.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, null);
		}
		return count;
	}

	@Override
	public int checkEmail(String email) {
		con = DbUtil.connect();
		String sql = "select count(1) as count from itaproject_user where userEmail = ?";
		ResultSet rs = null;
		int count = 0;
		try {
			pst = con.prepareStatement(sql);
			pst.setString(1,email);
			rs = pst.executeQuery();
			while(rs.next()){
				count = rs.getInt("count");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, null);
		}
		return count;
	}

	@Override
	public int getUserId(String email) {
		con = DbUtil.connect();
		String sql = "select userId from itaproject_user where userEmail = ?";
		ResultSet rs = null;
		int count = 0;
		try {
			pst = con.prepareStatement(sql);
			pst.setString(1,email);
			rs = pst.executeQuery();
			while(rs.next()){
				count = rs.getInt("userId");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, null);
		}
		return count;
	}

	@Override
	public int checkUser(String userEmail, String password) {
		con = DbUtil.connect();
		String sql = "select count(1) as count from itaproject_user where userEmail = ? and password = ?";
		ResultSet rs = null;
		int count = 0;
		try {
			pst = con.prepareStatement(sql);
			pst.setString(1,userEmail);
			pst.setString(2, password);
			rs = pst.executeQuery();
			while(rs.next()){
				count = rs.getInt("count");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, null);
		}
		return count;
	}

	@Override
	public User getUser(String email) {
		con = DbUtil.connect();
		String sql = "select userid,username,useremail from itaproject_user where useremail = ?";
		ResultSet rs = null;
		int count = 0;
		User user = new User();
		try {
			pst = con.prepareStatement(sql);
			pst.setString(1,email);
			rs = pst.executeQuery();
			while(rs.next()){
				
				user.setUserId(rs.getInt("userid"));
				user.setUsername(rs.getString("username"));
				user.setUserEmail(rs.getString("userEmail"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, null);
		}
		return user;
	}

}
