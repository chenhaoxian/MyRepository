package test;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;

public class Test2 {

	public static void main(String[] args) throws Exception, IOException {
		SAXBuilder builder = new SAXBuilder();
		Document doc = builder.build(new File("books.xml"));
		Element books = doc.getRootElement();
		System.out.println(books.getName());
		List<Element> bks = books.getChildren();
		for(Element e:bks){
//			System.out.println(e.getTextTrim());
			List<Element> bkss = e.getChildren();
			for(Element ee:bkss){
				System.out.println(ee.getTextTrim());
			}
		}
	}

}
