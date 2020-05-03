var menu = "[" +

        "{'val': '经营管理族', 'menu': [" +

            "{'val': '经营管理序列', 'menu': [" +

                "{'val': '集团总裁'},{'val': '集团 CXO（COO, CFO, CHO，CAO）'},{'val': '集团 功能中心总经理'},{'val': '集团 功能中心副总经理'},{'val': '业务线 总裁'},{'val': '业务线 副总裁'},{'val': '业务线 DUG/BG总经理'},{'val': '业务线 事业部总经理（BU/DU)'},{'val': '销售总经理'},{'val': '区域总经理（总体协调人）'},{'val': '业务线 功能中心总监'}" +

            "]}]}," +

        "{'val': '市场营销族', 'menu': [" +

            "{'val': '销售序列', 'menu': [" +

                "{'val': '销售总监'},{'val': '销售'}" +

            "]}]}," +

        "{'val': '综合项目族', 'menu': [" +

            "{'val': '督导序列', 'menu': [" +

                "{'val': '项目总监'},{'val': '高级项目经理'},{'val': '中级项目经理'},{'val': '项目经理'}]}," +

            "{'val': '质量管理序列', 'menu': [" +

                "{'val': '质量管理总监'},{'val': '质量管理经理'},{'val': '高级质量管理专员'},{'val': '中级质量管理专员'},{'val': '初级质量管理专员'}" +

        "]}]}," +

        "{'val': '技术研发族', 'menu': [" +

            "{'val': '开发序列', 'menu': [" +

                "{'val': '技术专家'},{'val': '高级开发工程师'},{'val': '中级开发工程师'},{'val': '初级开发工程师'},{'val': '助理开发工程师'}" +

            "]},{'val': '测试序列', 'menu': [" +

                "{'val': '测试专家'},{'val': '高级测试工程师'},{'val': '中级测试工程师'},{'val': '初级测试工程师'},{'val': '助理测试工程师'}" +

            "]},{'val': '测试开发序列（自动化测试）', 'menu': [" +

                "{'val': '测试开发专家'},{'val': '高级测试开发工程师'},{'val': '中级测试开发工程师'},{'val': '初级测试开发工程师'},{'val': '助理测试开发工程师'}" +

            "]},{'val': '设计/咨询序列', 'menu': [" +

                "{'val': '高级设计师'},{'val': '中级设计师'},{'val': '初级设计师'},{'val': '见习设计师'},{'val': '高级咨询顾问'},{'val': '中级咨询顾问'},{'val': '咨询顾问'},{'val': '见习咨询顾问'},{'val': '高级售前工程师'},{'val': '中级售前工程师'},{'val': '售前工程师'}" +

            "]},{'val': '实施/服务序列', 'menu': [" +

                "{'val': '工程总监'},{'val': '高级实施项目经理'},{'val': '中级实施项目经理'},{'val': '实施项目经理'},{'val': '实施技术专家'},{'val': '高级实施工程师'},{'val': '中级实施工程师'},{'val': '初级实施工程师'}" +

            "]},{'val': '翻译序列', 'menu': [" +

                "{'val': '高级翻译'},{'val': '中级翻译'},{'val': '初级翻译'}" +

            "]},{'val': '文档开发序列', 'menu': [" +

                "{'val': '高级文档开发工程师'},{'val': '中级文档开发工程师'},{'val': '初级文档开发工程师'}" +

            "]},{'val': '技术支持序列', 'menu': [" +

                "{'val': '技术支持组长'},{'val': '高级技术支持工程师'},{'val': '中级技术支持工程师'},{'val': '技术支持工程师'}" +

         "]}]}," +

        "{'val': '职能管理族', 'menu': [" +

            "{'val': '职能支持序列', 'menu': [" +

                "{'val': '部门经理'},{'val': '主管'},{'val': '高级专员'},{'val': '专员'},{'val': '助理'},{'val': '秘书'}" +

            "]}" +

        "]}" +

    "]";

    var objs = eval("(" + menu + ")");


    (function(){
        for(var i = 0;i < objs.length;i ++) {
            $("#data_1").append("<option value='" + objs[i].val + "'>" + objs[i].val + "</option>");
            alert(objs[i].val)
        }
    })();
    
    alert(1)
 

    $("#data_1").change(function(){

        $("#data_2").empty();

        $("#data_2").append("<option value='请选择'>请选择</option>'");

        switch($(this).val()) {

            case objs[0].val:

                for(var o in objs[0].menu){

                    $("#data_2").append("<option value='" + (objs[0].menu)[o].val + "'>" + (objs[0].menu)[o].val + "</option>");

                }

                break;

            case objs[1].val:

                for(var o in objs[1].menu){

                    $("#data_2").append("<option value='" + (objs[1].menu)[o].val + "'>" + (objs[1].menu)[o].val + "</option>");

                }

                break;

            case objs[2].val:

                for(var o in objs[2].menu){

                    $("#data_2").append("<option value='" + (objs[2].menu)[o].val + "'>" + (objs[2].menu)[o].val + "</option>");

                }

                break;

            case objs[3].val:

                for(var o in objs[3].menu){

                    $("#data_2").append("<option value='" + (objs[3].menu)[o].val + "'>" + (objs[3].menu)[o].val + "</option>");

                }

                break;

            case objs[4].val:

                for(var o in objs[4].menu){

                    $("#data_2").append("<option value='" + (objs[4].menu)[o].val + "'>" + (objs[4].menu)[o].val + "</option>");

                }

                break;

        }

    });

 

    $("#data_2").change(function(){

        $("#data_3").empty();

        $("#data_3").append("<option value='请选择'>请选择</option>'");

        switch($(this).val()) {

            case (objs[0].menu)[0].val:

                for(var o in (objs[0].menu)[0].menu){

                    $("#data_3").append("<option value='" + ((objs[0].menu)[0].menu)[o].val + "'>" + ((objs[0].menu)[0].menu)[o].val + "</option>");

                }

                break;

            case (objs[1].menu)[0].val:

                for(var o in (objs[1].menu)[0].menu){

                    $("#data_3").append("<option value='" + ((objs[1].menu)[0].menu)[o].val + "'>" + ((objs[1].menu)[0].menu)[o].val + "</option>");

                }

                break;

            case (objs[2].menu)[0].val:

                for(var o in (objs[2].menu)[0].menu){

                    $("#data_3").append("<option value='" + ((objs[2].menu)[0].menu)[o].val + "'>" + ((objs[2].menu)[0].menu)[o].val + "</option>");

                }

                break;

            case (objs[2].menu)[1].val:

                for(var o in (objs[2].menu)[1].menu){

                    $("#data_3").append("<option value='" + ((objs[2].menu)[1].menu)[o].val + "'>" + ((objs[2].menu)[1].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[0].val:

                for(var o in (objs[3].menu)[0].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[0].menu)[o].val + "'>" + ((objs[3].menu)[0].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[1].val:

                for(var o in (objs[3].menu)[1].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[1].menu)[o].val + "'>" + ((objs[3].menu)[1].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[2].val:

                for(var o in (objs[3].menu)[2].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[2].menu)[o].val + "'>" + ((objs[3].menu)[3].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[3].val:

                for(var o in (objs[3].menu)[3].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[3].menu)[o].val + "'>" + ((objs[3].menu)[3].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[4].val:

                for(var o in (objs[3].menu)[4].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[4].menu)[o].val + "'>" + ((objs[3].menu)[4].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[5].val:

                for(var o in (objs[3].menu)[5].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[5].menu)[o].val + "'>" + ((objs[3].menu)[5].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[6].val:

                for(var o in (objs[3].menu)[6].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[6].menu)[o].val + "'>" + ((objs[3].menu)[6].menu)[o].val + "</option>");

                }

                break;

            case (objs[3].menu)[7].val:

                for(var o in (objs[3].menu)[7].menu){

                    $("#data_3").append("<option value='" + ((objs[3].menu)[7].menu)[o].val + "'>" + ((objs[3].menu)[7].menu)[o].val + "</option>");

                }

                break;

            case (objs[4].menu)[0].val:

                for(var o in (objs[4].menu)[0].menu){

                    $("#data_3").append("<option value='" + ((objs[4].menu)[0].menu)[o].val + "'>" + ((objs[4].menu)[0].menu)[o].val + "</option>");

                }

                break;

        }

    });