package oocl.ita.main.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import oocl.ita.main.dao.OrderDao;
import oocl.ita.main.model.Order;
import oocl.ita.main.model.ShoppingCart;
import oocl.ita.main.util.DbUtil;

public class OrderDaoImpl implements OrderDao {

	private Connection con = null;
	
	
	@Override
	public int payOrder(int uId ,String oMessage, int oPrice) {
		con = DbUtil.connect();
		PreparedStatement pst_delete = null;
		PreparedStatement pst_insert = null;
		int count = 0;
		String sql_delete = "delete from itaproject_cart where userId = ?";
		String sql_insert = "insert into itaproject_order(oId,userId,oMessage,oPrice,oDate) values(HYMAN_SEQ01.nextval,?,?,?,?)";
		
		try {
			con.setAutoCommit(false);
			pst_delete = con.prepareStatement(sql_delete);
			pst_delete.setInt(1, uId);
			pst_delete.executeUpdate();
			
			pst_insert = con.prepareStatement(sql_insert);
			pst_insert.setInt(1,uId);
			pst_insert.setString(2, oMessage);
			pst_insert.setInt(3, oPrice);
			Date date = new Date();
			pst_insert.setTimestamp(4, new java.sql.Timestamp(Calendar.getInstance().getTime().getTime()));
			count = pst_insert.executeUpdate();
			con.commit();
			con.setAutoCommit(true);
		} catch (SQLException e) {
			try {
				con.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
			return -1;
		}finally {
			DbUtil.free(con, pst_insert, null);
		}
		
		
		
		return count;
	}


	@Override
	public List<ShoppingCart> getCartList(int uId) {
		con = DbUtil.connect();
		List<ShoppingCart> list = new ArrayList<ShoppingCart>();
		
		PreparedStatement pst = null;
		String sql = "select f.* ,c.*  from itaproject_cart c inner join itaproject_food f on c.fid = f.fid"
				+ " inner join itaproject_user u on c.userId = u.userid where u.userid = ? and c.fNum >0";
		ResultSet rs = null;
		try {
			pst = con.prepareStatement(sql);
			pst.setInt(1, uId);
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
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}

		
		return list;
	}


	@Override
	public List<Order> findOrder(int uId) {
		con = DbUtil.connect();
		List<Order> list = new ArrayList<Order>();
		PreparedStatement pst = null;
		String sql = "select * from itaproject_order where userId = ? and oPrice > 0";
		ResultSet rs = null;
		try {
			pst = con.prepareStatement(sql);
			pst.setInt(1, uId);
			rs = pst.executeQuery();
			while(rs.next()){
				Order order = new Order();
				order.setoId(rs.getInt("oId"));
				order.setuId(rs.getInt("userId"));
				order.setoMessage(rs.getString("oMessage"));
				order.setoPrice(rs.getInt("oPrice"));
				//Date date=new Date();  
//				Calendar cal=Calendar.getInstance();  
//				cal.setTime(rs.getDate("oDate"));
//				System.out.println(rs.getTimestamp("oDate"));
				order.setTime(rs.getTimestamp("oDate"));
				list.add(order);
			}
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}finally {
			DbUtil.free(con, pst, rs);
		}

		return list;
	}

}
