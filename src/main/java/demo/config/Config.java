package demo.config;

import com.jfinal.config.*;
import com.jfinal.core.JFinal;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.render.ViewType;
import com.jfinal.template.Engine;
import demo.controller.*;
import demo.pojo.*;

/**
 * @author yuyang
 * @version V1.0
 * @Package cn.jfinal
 * @Description: TODO
 * @date 2019-4-9 18:26
 */
public class Config extends JFinalConfig {
    @Override
    public void configConstant(Constants me) {

        loadPropertyFile("config.properties");
//    PropKit.use("config.properties");
//    me.setBaseViewPath("/template");
//    me.setDevMode(PropKit.getBoolean("devMode", true));
        me.setViewType(ViewType.JSP);
    }

    @Override
    public void configRoute(Routes me) {
        me.add("/", WellComeController.class);
        me.add("/colleges", CollegesController.class);
        me.add("/grade", GradeController.class);
        me.add("/specialy", SpecialtyController.class);
        me.add("/subj", SubjController.class);
        me.add("/admitted", AdmittedController.class);
    }

    @Override
    public void configEngine(Engine engine) {

    }

    @Override
    public void configPlugin(Plugins me) {
        /**
         * 配置Mysql支持
         */
        //配置Druid数据库连接池插件
        DruidPlugin dp = new DruidPlugin(
                "jdbc:mysql://127.0.0.1:3306/volcho?useUnicode=true&characterEncoding=utf8", "root", "root");
        me.add(dp);
        //配置ActiveRecord插件
        ActiveRecordPlugin arp = new ActiveRecordPlugin(dp);
        me.add(arp);
        arp.setShowSql(true);
        arp.addMapping("admitted", Admitted.class);
        arp.addMapping("base_region", Base_region.class);
       // arp.addMapping("school", School.class);
        arp.addMapping("specialty", Specialty.class);
        arp.addMapping("colleges", Colleges.class);
        arp.addMapping("grade", Grade.class);
        arp.addMapping("subj", Subj.class);

    }

    private ActiveRecordPlugin getActiveRecordPlugin(DruidPlugin druidPlugin) {
        ActiveRecordPlugin arp = new ActiveRecordPlugin(druidPlugin);
        //这里是数据库表名，主键
        arp.addMapping("admitted", Admitted.class);
        arp.addMapping("base_region", Base_region.class);
        //arp.addMapping("school", School.class);
        arp.addMapping("specialty", Specialty.class);
        arp.addMapping("colleges", Colleges.class);
        arp.addMapping("grade", Grade.class);
        arp.addMapping("subj", Subj.class);
        return arp;
    }

    @Override
    public void configInterceptor(Interceptors me) {

    }

    @Override
    public void configHandler(Handlers me) {

    }

    public static void main(String[] args) {
        JFinal.start("src/main/webapp", 8080, "/");
    }
}