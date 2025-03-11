package demo.controller;

import com.jfinal.core.Controller;
import com.jfinal.upload.UploadFile;
import demo.pojo.Colleges;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.regex.Pattern;

/**
 * @author yuyang
 * @version V1.0
 * @Package demo.controller
 * @Description: TODO
 * @date 2019-4-12 8:23
 */
public class CollegesController extends Controller {
    /**
     * 直接访问user地址进入list.jsp
     */
    public void index() {
        List<Colleges> colleges = Colleges.COLLEGES_DAO.find("select * from colleges");
        System.out.print("得到的数据是" + colleges.size() + "条");
        renderJson(colleges);
    }

    public void add() {
        Colleges colleges = new Colleges();
        UploadFile file = getFile("colleges.s_pic");
        colleges.set("s_id", UUID.randomUUID().toString());
        colleges.set("s_name", getPara("colleges.s_name"));
        colleges.set("s_url", getPara("colleges.s_url"));
        colleges.set("s_email", getPara("colleges.s_email"));
        colleges.set("s_type", getPara("colleges.s_type"));
        colleges.set("s_no", getPara("colleges.s_no"));
        colleges.set("s_typeno", getPara("colleges.s_typeno"));
        colleges.set("s_phone", getPara("colleges.s_phone"));
        colleges.set("s_nature", getPara("colleges.s_nature"));
        colleges.set("s_place", getPara("colleges.s_place"));
        colleges.set("s_ys", getPara("colleges.s_ys"));
        colleges.set("s_pic",//项目路径
                file.getUploadPath().replace("D:\\java\\Work Space\\voluntaryChoice\\src\\main\\webapp\\", "") +
                        "/" + file.getFileName()
        );
        colleges.save();
        setAttr("message", "成功");
        render("/index/add/addColleges.jsp");
    }

    private static String[] places = {"北京", "上海", "天津", "广东", "山东", "江苏", "浙江", "湖北", "湖南", "陕西"
            , "吉林", "云南", "广西", "贵州", "青海", "甘肃", "河北", "河南", "重庆", "新疆", "西藏", "黑龙江"
            , "内蒙古", "港澳", "宁夏", "海南", "江西", "辽宁", "安徽", "福建", "四川", "山西"};
    private static String[] nos = {"985", "211", "001"};

    public void queryBySchname() {
        String schname = getPara("schname");
        List<String> schPalce = new ArrayList<String>();
        List<String> schNo = new ArrayList<String>();
        for (String place : places) {
            if (schname.indexOf(place) > -1) {
                schPalce.add(place);
            }
        }
        for (String no : nos) {
            if (schname.indexOf(no) > -1) {
                schNo.add(no);
            }
        }
        String palce = this.listToStr(schPalce);
        String no = this.listToStr(schNo);
        Integer schNum = this.arrayToStr(schname);
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT c.*  ");
        sql.append("from colleges c left join grade g on c.s_id = g.s_id where c.deflag = 0 ");
        if (null != schNum) {
            sql.append(" and g.c_min <= " + schNum.toString() + " ");
        }
        if (!"".equals(palce) && null != palce) {
            sql.append(" and c.s_place in (" + palce + ")");
        }
        if (!"".equals(no) && null != no) {
            sql.append(" and c.s_no in (" + no + ")");

        }
        sql.append(" GROUP BY c.s_id");
        List<Colleges> colleges  = Colleges.COLLEGES_DAO.find(sql.toString());
        System.out.println("得到的数据是"+colleges.size()+"条");
        setAttr("colleges", colleges);
        render("/index/gaoxiaochaxun/gaoxiao.jsp");
    }

    /**
     * 从字符串中提取数字
     * @param content
     * @return
     */
    private static Integer arrayToStr(String content) {
        String regEx = "[^0-9]+";
        Pattern pattern = Pattern.compile(regEx);
        //用定义好的正则表达式拆分字符串，，把字符串中的数字留出来
        String[] cs = pattern.split(content);
        if (cs.length == 0) {
            return null;
        }
        int[] csInt;
        if (cs.length == 1) {
            csInt = new int[1];
            csInt[0] = Integer.parseInt(cs[0]);
        } else {
            csInt = new int[cs.length];
            for (int i = 0; i <= cs.length-1; i++) {
                if (!"".equals(cs[i]) && null != cs[i]) {
                    csInt[i] = Integer.parseInt(cs[i]);
                }
            }
        }
        Arrays.sort(csInt);
        return csInt[csInt.length - 1];
    }

    public String listToStr(List<String> sch) {
        StringBuilder str = new StringBuilder();
        for (String s : sch) {
            if (sch.size() == 1) {
                str.append("'" + s + "'");
            } else {
                if (sch.get(sch.size() - 1) == s) {
                    str.append("'" + s + "'");
                } else {
                    str.append("'" + s + "',");
                }
            }
        }
        return str.toString();
    }

    public static void main(String[] args) {
        /*List<String> schPalce = new ArrayList<String>();
        schPalce.add("ce");
        schPalce.add("11");
        schPalce.add("csas");
        schPalce.add("casa");
        schPalce.add("11");*/
        // System.out.println(CollegesController.arrayToStr(schPalce));
        String test = "我500考了我分上北京 阿萨";
        System.out.println(CollegesController.arrayToStr(test));
    }
}
