package oocl.ita.main.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import oocl.ita.main.dao.SearchDao;
import oocl.ita.main.model.Food;
import oocl.ita.main.model.ShoppingCart;
import oocl.ita.main.util.DbUtil;

public class SearchDaoImpl implements SearchDao {

	@Override
	public List<String> getAreaList() {
		Connection con = DbUtil.connect();
		PreparedStatement pst = null;
		ResultSet rs = null;
		String sql = "select * from areas";
		List<String> list = new ArrayList<String>();
		try {
			pst = con.prepareStatement(sql);
			rs = pst.executeQuery();
			while(rs.next()){
				list.add(rs.getString("area"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		
		return list;
	}

	@Override
	public List<String> getAreaListByKey(String key) {
		Connection con = DbUtil.connect();
		PreparedStatement pst = null;
		ResultSet rs = null;
		String sql = "select * from areas where area like ?";
		List<String> list = new ArrayList<String>();
		try {
			pst = con.prepareStatement(sql);
			pst.setString(1, key+"%");
			rs = pst.executeQuery();
			while(rs.next()){
				list.add(rs.getString("area"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		
		return list;
	}

	@Override
	public List<Food> searchAllFood() {
		Connection con = DbUtil.connect();
		PreparedStatement pst = null;
		ResultSet rs = null;
		String sql = "select * from itaproject_food";
		List<Food> list = new ArrayList<Food>();
		try {
			pst = con.prepareStatement(sql);
			rs = pst.executeQuery();
			while(rs.next()){
				Food food = new Food();
				food.setfId(rs.getInt("fId"));
				food.setfName(rs.getString("fName"));
				food.setfImagePath(rs.getString("fimagepath"));
				food.setfPrice(rs.getInt("fPrice"));
				list.add(food);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		
		return list;
	}

	@Override
	public List<ShoppingCart> searchCart(int userId) {
		Connection con = DbUtil.connect();
		PreparedStatement pst = null;
		ResultSet rs = null;
		String sql = "select f.* ,c.*  from itaproject_cart c inner join itaproject_food f on c.fid = f.fid "
				+ "inner join itaproject_user u on c.userId = u.userid  where u.userid = ? and c.fNum >0";
		List<ShoppingCart> list = new ArrayList<ShoppingCart>();
		try {
			pst = con.prepareStatement(sql);
			pst.setInt(1, userId);
			rs = pst.executeQuery();
			while(rs.next()){
				ShoppingCart shoppingCart = new ShoppingCart();
				shoppingCart.setfName(rs.getString("fName"));
				shoppingCart.setfPrice(rs.getInt("fPrice"));
				shoppingCart.setcId(rs.getInt("cId"));
				shoppingCart.setuId(rs.getInt("userId"));
				shoppingCart.setfId(rs.getInt("fId"));
				shoppingCart.setfNum(rs.getInt("fNum"));
				list.add(shoppingCart);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		
		return list;
	}
	
	@Override
	public List<ShoppingCart> searchCart(int userId, int fId) {
		Connection con = DbUtil.connect();
		PreparedStatement pst = null;
		ResultSet rs = null;
		String sql = "select f.* ,c.*  from itaproject_cart c inner join itaproject_food f on c.fid = f.fid "
				+ "inner join itaproject_user u on c.userId = u.userid  where u.userid = ? and f.fID = ? ";
		List<ShoppingCart> list = new ArrayList<ShoppingCart>();
		try {
			pst = con.prepareStatement(sql);
			pst.setInt(1, userId);
			pst.setInt(2, fId);
			rs = pst.executeQuery();
			while(rs.next()){
				ShoppingCart shoppingCart = new ShoppingCart();
				shoppingCart.setfName(rs.getString("fName"));
				shoppingCart.setfPrice(rs.getInt("fPrice"));
				shoppingCart.setcId(rs.getInt("cId"));
				shoppingCart.setuId(rs.getInt("userId"));
				shoppingCart.setfId(rs.getInt("fId"));
				shoppingCart.setfNum(rs.getInt("fNum"));
				list.add(shoppingCart);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}
		
		return list;
	}

}
