package oocl.ita.main.model;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class Order {
	
	private int oId;
	private int uId;
	private String oMessage;
	private int oPrice;
	private Timestamp time;
	public int getoId() {
		return oId;
	}
	public void setoId(int oId) {
		this.oId = oId;
	}
	public int getuId() {
		return uId;
	}
	public void setuId(int uId) {
		this.uId = uId;
	}

	public String getoMessage() {
		return oMessage;
	}
	public void setoMessage(String oMessage) {
		this.oMessage = oMessage;
	}
	public int getoPrice() {
		return oPrice;
	}
	public void setoPrice(int oPrice) {
		this.oPrice = oPrice;
	}


	public Timestamp getTime() {
		return time;
	}
	public void setTime(Timestamp time) {
		this.time = time;
	}
	@Override
	public String toString() {
		return "Order [oId=" + oId + ", uId=" + uId + ", oMessage=" + oMessage + ", oPrice=" + oPrice + ", time=" + time
				+ "]";
	}
	
	
	
	
	
	

}
