package oocl.ita.main.timer;

import java.util.TimerTask;

import javax.servlet.http.HttpSession;

public class MyTimerTask extends TimerTask {

	public MyTimerTask(HttpSession session){}
	
	@Override
	public void run() {
		System.out.println("***********************************************************");

	}

}
