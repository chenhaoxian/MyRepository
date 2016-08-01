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
 * Servlet implementation class RegisterServlet
 */
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String username =  new String(request.getParameter("username").getBytes("ISO-8859-1"),"UTF-8");
//		String username = request.getParameter("username");
		String userEmail = request.getParameter("userEmail");
		String password = request.getParameter("password");
		UserManageService userManageService = new UserManageServiceImpl();
		
		PrintWriter writer = response.getWriter();
		if(userManageService.checkEmail(userEmail) == 0){
			User user = new User();
			user.setUserEmail(userEmail);
			user.setUsername(username);
			user.setPassword(password);
			int count = userManageService.register(user);
			int userId = userManageService.getUserId(userEmail);
			user.setUserId(userId);
			HttpSession session = request.getSession();
			session.setAttribute("user", user);
			writer.print("success");
		}else{
			writer.print("emailerror");
		}
	}

}
