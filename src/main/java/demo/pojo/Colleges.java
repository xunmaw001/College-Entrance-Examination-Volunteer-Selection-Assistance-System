package demo.pojo;

import com.jfinal.plugin.activerecord.Model;


public class Colleges extends Model<Colleges> {
    //Model的dao方法
    public static final Colleges COLLEGES_DAO = new Colleges();

}