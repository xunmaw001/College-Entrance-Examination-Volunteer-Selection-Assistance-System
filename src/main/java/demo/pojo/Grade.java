package demo.pojo;

import com.jfinal.plugin.activerecord.Model;

/**
 * @author yuyang
 * @version V1.0
 * @Package demo
 * @Description: TODO
 * @date 2019-4-10 8:41
 */

public class Grade extends Model<Grade> {
    //Model的dao方法
    public static final Grade gradesDao = new Grade();

}