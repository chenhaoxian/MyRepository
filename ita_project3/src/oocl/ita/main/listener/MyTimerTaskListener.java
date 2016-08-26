package oocl.ita.main.listener;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import oocl.ita.main.timer.TimerManager;

/**
 * Application Lifecycle Listener implementation class MyTimerTaskListener
 *
 */
public class MyTimerTaskListener implements ServletContextListener ,ServletRequestListener{

	private ServletContext context = null;  
	private HttpServletRequest request;

    

	/**
     * Default constructor. 
     */
    public MyTimerTaskListener() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent arg0)  { 
         // TODO Auto-generated method stub
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent event)  { 
//    	this.context = event.getServletContext();
    	
       // TimerManager timerManager = (TimerManager) context.getBean("timerManager"); 
//    	HttpSession session = this.request.getSession();
//    	TimerManager timerManager = new TimerManager();
//        timerManager.start(session);//启动定时器管理器
    }

	@Override
	public void requestDestroyed(ServletRequestEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void requestInitialized(ServletRequestEvent arg0) {
		this.request = (HttpServletRequest) arg0.getServletRequest();
		
	}
	
}
