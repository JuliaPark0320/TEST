/**
 * Created by nhn on 2015-09-16.
 */

var Manager = Manager || function(){
        this.init.apply(this, arguments);
    };

Manager.prototype = {
   init : function(targetId, options){

        this.setDefaultPropertys(targetId, options);

        this.getLogs();
        this.findCodeStatus();
        this.print();
    },

    setDefaultPropertys: function (targetId, options) {
        this.options = options || {
                min: 200,
                max: 299,
                logData: ''
            };

        this.targetEl = document.getElementById(targetId || "main");
        this.list = [];
    },

    getLogs: function(){
        this._logs = this.options.logData || LOG_DATA;
    },

    findCodeStatus: function(){
        var logs = this._logs.logs,
            len = logs.length,
            index = 0,
            min = this.options.min,
            max = this.options.max;

        for(index = 0; index < len; index++){
            var codeStatus = logs[index].codeStatus;
            if(codeStatus >= min && codeStatus <= max){
                this.list.push(logs[index]);
            }
        }

        return this.list;
    },

    print: function(){
        document.writeln(this.getListHTML(this.list));

    },

    getListHTML: function(list){
        var index = 0,
            len = list.length,
            html = "";

        for(index=0; index<len; index++){
            var code = list[index].codeStatus;
            var message = list[index].message;
            html += "<li>" + "code : " +code+ ", message: "+message+ "</li>";
        };

        return html;
    }
};

