package oocl.ita.main.model;

public class ShoppingCart {
	
	private int cId;
	private int uId;
	private int fId;
	private String fName;
	private int fPrice;
	private int fNum;
	private int fTatol;
	public int getfTatol() {
		return fTatol;
	}
	public void setfTatol(int fTatol) {
		this.fTatol = fTatol;
	}
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public int getfPrice() {
		return fPrice;
	}
	public void setfPrice(int fPrice) {
		this.fPrice = fPrice;
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

	public int getfNum() {
		return fNum;
	}
	public void setfNum(int fNum) {
		this.fNum = fNum;
	}
	@Override
	public String toString() {
		return "ShoppingCart [cId=" + cId + ", uId=" + uId + ", fId=" + fId + ", fName=" + fName + ", fPrice=" + fPrice
				+ ", fNum=" + fNum + ", fTatol=" + fTatol + "]";
	}
	
	

}
