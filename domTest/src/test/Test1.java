package test;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;

public class Test1 {

	public static void main(String[] args) throws Exception {
		Document doc = new Document();
		Element root = new Element("books");
		doc.setRootElement(root);
		for(int i = 1; i<100; i++){
			Element book = new Element("book");
			book.setAttribute("id","id"+i);
//			book.setText("Harry Polt"+i);
			Element bname = new Element("bookName");
			bname.setText("harry polt"+i);
			Element price = new Element("price");
			price.setText(""+i);
			book.addContent(bname);
			book.addContent(price);
			root.addContent(book);
		}
		
		XMLOutputter out = new XMLOutputter(Format.getPrettyFormat());
		out.output(doc, new FileOutputStream("books.xml"));
	}

}
