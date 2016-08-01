package oocl.ita.main.login.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import oocl.ita.main.model.User;
import oocl.ita.main.service.UserManageService;
import oocl.ita.main.service.impl.UserManageServiceImpl;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		request.setCharacterEncoding("UTF-8");
		UserManageService userManageService = new UserManageServiceImpl();
		String userEmail = request.getParameter("userEmail");
		String password = request.getParameter("password");
		int count = userManageService.checkUser(userEmail, password);
		response.setContentType("text/xml;charset=utf-8");
		response.setHeader("Cache-Control", "no-cache");
		PrintWriter writer = response.getWriter();
		if(count == 1){
			User user = userManageService.getUser(userEmail);
			session.setAttribute("user", user);
			writer.print("success");
		}else{
			writer.print("fail");
		}
	}

}
