package demo.controller;

import com.jfinal.core.Controller;
import demo.pojo.Specialty;

import java.util.List;
import java.util.UUID;

/**
 * @Title: SpecialtyController
 * @author: 姜雪超
 * @date:2019/4/13 13:31
 */
public class SpecialtyController extends Controller {

    public void index() {
        queryList();
    }

    public void queryList() {
        String subjCode = getPara("subjCode");
        StringBuilder sql = new StringBuilder();
        sql.append("select s.id as id, s.name as name, ");
        sql.append("s.level as level,su.`name` as subjName, ");
        sql.append("s.zydm as zydm ");
        sql.append("from  specialty s ");
        sql.append("left join subj su ");
        sql.append("on s.subjCode = su.`code` ");
        if (!"".equals(subjCode) && null != subjCode) {
            sql.append("where s.subjCode ="+"'"+subjCode+"'");
        }
        List<Specialty> specialties = Specialty.specialty.find(sql.toString());
        renderJson(specialties);
    }

    public void queryPointList() {
        String type = getPara("type");
        String time = getPara("time");
        StringBuilder sql = new StringBuilder();
        sql.append("select s.id as id ,s.name as name, c.s_name as s_name ,c.s_id as s_id , ");
        sql.append("a.maxpoints as maxpoints,a.minpoints as minpoints,a.number as number, ");
        sql.append("s.type as type,a.time as time, s.batch as batch ");
        sql.append("from specialty s ");
        sql.append("left join colleges c on s.schoolid = c.s_id ");
        sql.append("left join admitted a on s.id = a.specialtyid ");
        sql.append("where s.deflag=0 ");
        if(!"".equals(type) && null != type){
            sql.append(" and s.type = "+type);
        }
        if(!"".equals(time) && null != time){
            sql.append(" and a.time = "+"'"+time+"'");
        }
        List<Specialty> specialties = Specialty.specialty.find(sql.toString());
        renderJson(specialties);
    }

    public void queryById() {
        String id = getPara("id");
        System.out.println("id = " + id);
        Specialty specia = Specialty.specialty.findById(id);
        renderJson(specia);
    }

    public void add() {
        Specialty specialty = getModel(Specialty.class);
        specialty.set("id", UUID.randomUUID().toString());
        specialty.save();
        setAttr("message", "成功");
        render("/index/add/addSpecialty.jsp");
    }


}
