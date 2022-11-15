/**
 * 1. 统一收集所有的日志信息
 * 2. 环境区分
 *  2.1 开发环境（本地启动） 默认展示
 *  2.2 测试环境（发布到线上测试） 不展示日志，将日志信息发布到远程服务
 *  2.3 生产环境（发布到线上生产） 不展示日志，将日志信息发布到远程服务
 * 3. 配置收集的日志等级（优先级上error>warn>log）
 *  3.1 log 收集 error，warn，log
 *  3.2 warn 收集 warn，log
 *  3.3 error 收集 error
 * 4.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var NO_OP = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
};
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(options) {
        var level = (options || {}).level;
        this.error = function (args) {
            var _a;
            (_a = console.log).call.apply(_a, __spreadArray([console], args, false));
        };
        if (level === 'error') {
            this.warn = NO_OP;
            this.log = NO_OP;
            return;
        }
        this.warn = console.warn.bind(console);
        if (level === 'warn') {
            this.log = NO_OP;
            return;
        }
        this.log = console.log.bind(console);
    }
    return ConsoleLogger;
}());
var logger = new ConsoleLogger({ level: 'log' });
// logger.log('log')
// logger.warn('warn')
// logger.error('error')
