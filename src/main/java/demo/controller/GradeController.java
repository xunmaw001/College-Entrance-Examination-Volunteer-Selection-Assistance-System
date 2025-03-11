package demo.controller;

import com.jfinal.core.Controller;
import demo.pojo.Colleges;
import demo.pojo.Grade;

import javax.annotation.Resource;
import java.util.List;
import java.util.UUID;


public class GradeController extends Controller{
    @Resource
    /**
     * 直接访问user地址进入list.jsp
     */
    public void index(){
        List<Grade> grades = Grade.gradesDao.find("select * from grade");
        setAttr("grades",grades);
        System.out.print("得到的数据是"+grades.size()+"条");
        render("/list.jsp");
    }

    public void getIdGrade(){
        String id=getPara("s_id");
        List<Grade> grades = Grade.gradesDao.find("select * from grade where s_id='"+id+"'");
        setAttr("gradelist",grades);
        System.out.println("grades得到的数据是"+grades.size()+"条");
        //  学校查询
        List<Colleges> colleges = Colleges.COLLEGES_DAO.find("select * from colleges where s_id='"+id+"'");
        setAttr("colleges", colleges);
        System.out.print("college得到的数据是"+ colleges.size()+"条");
        render("/index/gaoxiaochaxun/schoolindex.jsp");
    }

    public void add(){
        Grade grade = getModel(Grade.class);
        grade.set("c_id", UUID.randomUUID().toString());
        grade.save();
        setAttr("message","成功");
        setAttr("s_id",grade.get("s_id"));
        render("/index/add/addGrade.jsp");
    }
}
