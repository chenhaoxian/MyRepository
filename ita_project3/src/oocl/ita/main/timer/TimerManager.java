package oocl.ita.main.timer;

import java.util.Calendar;
import java.util.Date;
import java.util.Timer;

import javax.servlet.http.HttpSession;

public class TimerManager {

	/**
     * 执行任务的间隔
     */
    private static final long PERIOD_DAY = 24 * 60 * 60 * 1000;
 
    private int hour = 2;
    private int minute = 0;
    private int second = 0;

    
    public TimerManager() {}
 
    public int getHour() {
        return hour;
    }
 
    public void setHour(int hour) {
        this.hour = hour;
    }
 
    public int getMinute() {
        return minute;
    }
 
    public void setMinute(int minute) {
        this.minute = minute;
    }
 
    public int getSecond() {
        return second;
    }
 
    public void setSecond(int second) {
        this.second = second;
    }
     

 
    // 增加或减少天数
    public Date addDay(Date date, int num) {
        Calendar startDT = Calendar.getInstance();
        startDT.setTime(date);
        startDT.add(Calendar.DAY_OF_MONTH, num);
        return startDT.getTime();
    }
     
    /**
     * 启动定时器
     */
    public void start(HttpSession session)  {
        Calendar calendar = Calendar.getInstance();
 
        calendar.set(Calendar.HOUR_OF_DAY, hour);
        calendar.set(Calendar.MINUTE, minute);
        calendar.set(Calendar.SECOND, second);
 
        Date date=calendar.getTime(); //第一次执行定时任务的时间
 
        //如果第一次执行定时任务的时间 小于 当前的时间
        //此时要在 第一次执行定时任务的时间 加一天，以便此任务在下个时间点执行。如果不加一天，任务会立即执行。
        if (date.before(new Date())) {
            date = this.addDay(date, 1);
        }
        Timer timer = new Timer();
 
        //安排指定的任务在指定的时间开始进行重复的固定延迟执行。
        timer.schedule(new MyTimerTask(session), date,PERIOD_DAY);
    }
	
}
