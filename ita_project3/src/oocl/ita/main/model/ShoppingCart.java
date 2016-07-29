package oocl.ita.main.model;

public class ShoppingCart {
	
	private int cId;
	private int uId;
	private int fId;
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public int getuId() {
		return uId;
	}
	public void setuId(int uId) {
		this.uId = uId;
	}
	public int getfId() {
		return fId;
	}
	public void setfId(int fId) {
		this.fId = fId;
	}

	@Override
	public String toString() {
		return "ShoppingCart [cId=" + cId + ", uId=" + uId + ", fId=" + fId  + "]";
	}
	
	

}
