package oocl.ita.main.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * Servlet Filter implementation class CharsetEncodingFilter
 */
public class CharsetEncodingFilter implements Filter {
	
	//定义成员变量.  
    private String encoding;  

    /**
     * Default constructor. 
     */
    public CharsetEncodingFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		//System.out.println("CharacterEncodingFilter--begin");  
        //设置字符集.  
        request.setCharacterEncoding(encoding);  
          
        //拿到链条继续向下调用.  
         chain.doFilter(request, response);  
         //返回了.  
         //System.out.println("CharacterEncodingFilter--end");
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
		this.encoding = fConfig.getInitParameter("encoding");
	}

}
