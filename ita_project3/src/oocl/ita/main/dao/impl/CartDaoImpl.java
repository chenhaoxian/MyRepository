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


	@Override
	public int checkRecord(int uId, int fId) {
		con = DbUtil.connect();
		String sql = "select count(1) as count from itaproject_cart where userId = ? and fId = ?";
		PreparedStatement pst = null;
		int count = 0;
		ResultSet rs = null;
		try {
			pst = con.prepareStatement(sql);
			pst.setInt(1, uId);
			pst.setInt(2, fId);
			rs = pst.executeQuery();
			while(rs.next()){
				count = rs.getInt("count");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		
		return count;
	}


	@Override
	public int insert2Cart(int uId, int fId) {
		con = DbUtil.connect();
		String sql = "insert into itaproject_cart(cid,userid,fid,fNum) values(HYMAN_SEQ01.nextval,?,?,1)";
		PreparedStatement pst = null;
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


	@Override
	public int updateCart(int uId, int fId) {
		con = DbUtil.connect();
		String sql = "update itaproject_cart set fNum = fNum+1 where userId = ? and fId = ?";
		PreparedStatement pst = null;
		int count = 0;
		try {
			pst = con.prepareStatement(sql);
			pst.setInt(1, uId);
			pst.setInt(2, fId);
			count = pst.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		return count;
	}


	@Override
	public int addFood(int uId, int fId) {
		con = DbUtil.connect();
		String sql = "update itaproject_cart set fNum";
		return 0;
	}


	@Override
	public int cutFood(int uId, int fId) {
		con = DbUtil.connect();
		String sql = "update itaproject_cart set fNum = fNum-1 where userId = ? and fId = ?";
		PreparedStatement pst = null;
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
