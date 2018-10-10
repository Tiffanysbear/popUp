/* globals doT */

var tpl = doT.template(__inline('./popUp.tpl'));
var $root = $('.pop-dialog');

var popUp = function (option) {
    var defaultConf = {
        tip: '请选择您的XXXXX',
        confirm: '知道了'
    };
    this.option = $.extend(defaultConf, option || {});
    this.init();
};

popUp.prototype = {
    init: function () {
        var me = this;

        me.tpl = tpl(me.option);
        $root.html(me.tpl);
        $root.show();
        this.bindEvent();
    },
    bindEvent: function () {
        var me = this;
        var $closeBtn = $root.find('.close-dialog-btn');
        var $confirm = $root.find('.confirm');

        $closeBtn.on('click', $.proxy(me.closeDialog, me));
        $confirm.on('click', $.proxy(me.closeDialog, me));
    },
    closeDialog: function () {
        $root.hide();
    }
};

module.exports = popUp;
