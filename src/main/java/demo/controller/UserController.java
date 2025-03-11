package demo.controller;

import com.jfinal.core.Controller;
import demo.pojo.User;

import java.util.List;
import java.util.UUID;

/**
 * @author yuyang
 * @version V1.0
 * @Package demo
 * @Description: TODO
 * @date 2019-4-10 8:41
 */

public class UserController extends Controller {
    /**
     * 直接访问user地址进入list.jsp
     */
    public void index(){
        List<User> users = User.userDao.find("select * from user");
        setAttr("users",users);
        System.out.print("得到的数据是"+users.size()+"条");
        render("/list.jsp");
    }
    /**
     * 访问user/form进入from.jsp页面
     */
    public void form(){
        Integer id = getParaToInt(0);
        if(id!=null&&id>0){
            setAttr("user",User.userDao.findById(id));
        }
        render("form.jsp");

    }
    /**
     * 提交方法
     */
    public  void submit(){
        User user = getModel(User.class,"user");
        user.set("s_id", UUID.randomUUID().toString());
        user.save();
        redirect("/user");
    }
    /**
     * 编辑方法
     */
    public void edit(){
        form();
    }
    /**
     * 删除方法
     */
    public void del(){
        User.userDao.deleteById(getPara(0));
        redirect("/user");
    }
    /**
     * 更新方法
     */
    public void update(){
        User user = getModel(User.class,"user");
        user.update();
        redirect("/user");
    }

}
