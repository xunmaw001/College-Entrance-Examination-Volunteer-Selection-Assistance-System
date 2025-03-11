package demo.controller;

import com.jfinal.core.Controller;
import demo.pojo.Subj;

import java.util.List;

/**
 * @Title: SubjController
 * @author: 姜雪超
 * @date:2019/4/13 16:14
 */
public class SubjController extends Controller{
    public void index(){
        queryAll();
    }
    public void queryAll(){
        String sql = "select * from subj";
        List<Subj> subjs = Subj.subj.find(sql);
        renderJson(subjs);
    }
}
