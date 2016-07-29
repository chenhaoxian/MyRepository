package oocl.ita.test.dao;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import oocl.ita.main.model.Food;
import oocl.ita.main.util.DbUtil;

public class SearchDaoImplTest {

	@Test
	public void testSearchAllFood() {
		Connection con = DbUtil.connect();
		PreparedStatement pst = null;
		ResultSet rs = null;
		String sql = "select * from itaproject_food";
		List<Food> list = new ArrayList<Food>();
		Food food = new Food();
		try {
			pst = con.prepareStatement(sql);
			rs = pst.executeQuery();
			while (rs.next()) {
				food.setfId(rs.getInt("fId"));
				food.setfName(rs.getString("fName"));
				food.setfImagePath(rs.getString("fImagePath"));
				food.setfPrice(rs.getInt("fPrice"));
				list.add(food);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		System.out.println(list.size());
	}

}
