package oocl.ita.main.model;

public class Food {
	
	private int fId;
	private String fName;
	private String fImagePath;
	private int fPrice;
	public int getfId() {
		return fId;
	}
	public void setfPrice(int fPrice) {
		this.fPrice = fPrice;
	}
	public void setfId(int fId) {
		this.fId = fId;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getfImagePath() {
		return fImagePath;
	}
	public void setfImagePath(String fImagePath) {
		this.fImagePath = fImagePath;
	}

	@Override
	public String toString() {
		return "Food [fId=" + fId + ", fName=" + fName + ", fImagePath=" + fImagePath + ", fPrice=" + fPrice + "]";
	}
	
	

}
