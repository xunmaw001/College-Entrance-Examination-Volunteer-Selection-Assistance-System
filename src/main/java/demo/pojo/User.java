package demo.pojo;

import com.jfinal.plugin.activerecord.Model;

/**
 * @author yuyang
 * @version V1.0
 * @Package demo
 * @Description: TODO
 * @date 2019-4-10 8:41
 */

public class User extends Model<User> {
    //Model的dao方法
    public static final User userDao = new User();
    //静态常量
    public static final int SEX_MALE = 1;//男
    public static final int SEX_FEMAQL = 2;//女性
}