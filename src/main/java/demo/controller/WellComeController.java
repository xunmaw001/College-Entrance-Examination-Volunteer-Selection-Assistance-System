package demo.controller;

import com.jfinal.core.Controller;
import demo.pojo.Colleges;

import java.util.List;

/**
 * @Title: WellComeController
 * @author: 姜雪超
 * @date:2019/4/14 10:40
 */
public class WellComeController extends Controller {

    public void index(){
        List<Colleges> colleges = Colleges.COLLEGES_DAO.find("select * from colleges");
        setAttr("colleges",colleges);
        System.out.println("得到的数据是"+colleges.size()+"条");
        render("/index/gaoxiaochaxun/gaoxiao.jsp");
    }
}
