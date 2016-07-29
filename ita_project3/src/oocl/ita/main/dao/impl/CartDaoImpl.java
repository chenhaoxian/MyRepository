package oocl.ita.main.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import oocl.ita.main.dao.CartDao;
import oocl.ita.main.util.DbUtil;

public class CartDaoImpl implements CartDao {
	
	private Connection con = null;
	private PreparedStatement pst = null;
	private ResultSet rs = null;
	

	@Override
	public int buyFood(int uId, int fId) {
		con = DbUtil.connect();
		String sql = "insert into itaproject_cart(cId,uId,fId) values(HYMAN_SEQ01.nextval,?,?)";
		int count = 0;
		try {
			pst = con.prepareStatement(sql);
			pst.setInt(1, uId);
			pst.setInt(2, fId);
			count = pst.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		return count;
	}

}
