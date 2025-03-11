package demo.controller;

import com.jfinal.core.Controller;
import demo.pojo.Admitted;

import java.util.UUID;

/**
 * @Title: AdmittedController
 * @author: 姜雪超
 * @date:2019/4/14 12:44
 */
public class AdmittedController extends Controller {

    public void index(){

    }

    public void add(){
        Admitted specialty = getModel(Admitted.class);
        specialty.set("id", UUID.randomUUID().toString());
        specialty.save();
        setAttr("message","成功");
        setAttr("specialtyid",specialty.get("specialtyid"));
        render("/index/add/addAdmitted.jsp");
    }
}
