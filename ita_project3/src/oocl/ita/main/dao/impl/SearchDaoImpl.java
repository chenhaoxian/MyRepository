package oocl.ita.main.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import oocl.ita.main.dao.SearchDao;
import oocl.ita.main.model.Food;
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

}
