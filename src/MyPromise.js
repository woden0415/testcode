var enumPromiseStatus;
(function (enumPromiseStatus) {
    enumPromiseStatus["PENDING"] = "pending";
    enumPromiseStatus["FULFILLED"] = "fulfilled";
    enumPromiseStatus["REJECTED"] = "rejected";
})(enumPromiseStatus || (enumPromiseStatus = {}));
var MyPromise = /** @class */ (function () {
    function MyPromise(fn) {
        var _this = this;
        this.status = enumPromiseStatus.PENDING;
        this.resValue = null; // 返回结果
        this.error = new Error(); // 错误结果
        this.resolveCallbacks = [];
        this.rejectCallback = function () { };
        var resolve = function (result) {
            if (_this.status === enumPromiseStatus.PENDING) {
                _this.status = enumPromiseStatus.FULFILLED;
                _this.resValue = result;
                _this.resolveCallbacks.forEach(function (func) {
                    func(_this.resValue);
                });
            }
        };
        var reject = function (_error) {
            if (_this.status === enumPromiseStatus.PENDING) {
                _this.status = enumPromiseStatus.REJECTED;
                _this.error = _error;
                _this.rejectCallback(_this.error);
            }
        };
        fn(resolve, reject);
        return this;
    }
    MyPromise.prototype.then = function (fn1, fn2) {
        if (this.status === enumPromiseStatus.PENDING) {
            this.resolveCallbacks.push(fn1);
            this.rejectCallback = fn2;
        }
        if (this.status === enumPromiseStatus.FULFILLED) {
            fn1(this.resValue);
        }
        if (this.status === enumPromiseStatus.REJECTED) {
            fn2(this.error);
        }
    };
    return MyPromise;
}());
/**
 * Promise 创建一个流程，执行异步/同步的流程
 * 需要使用者Promise执行的操作
 * 使用者注册异步成功和失败工具
 */
function test() {
    new MyPromise(function (resolve, reject) {
        if (Math.random() - 0.5 > 0) {
            setTimeout(function () {
                if (Math.random() - 0.5 > 0) {
                    resolve("\u5B9A\u65F6\u5668\uFF0C\u6B63\u786E\u4FE1\u606F___".concat(new Date()));
                }
                else {
                    reject(new Error("\u5B9A\u65F6\u5668\uFF0C\u9519\u8BEF\u4FE1\u606F___".concat(new Date())));
                }
            }, 1000);
        }
        else {
            if (Math.random() - 0.5 > 0) {
                resolve("\u6B63\u786E\u4FE1\u606F___".concat(new Date()));
            }
            else {
                reject(new Error("\u9519\u8BEF\u4FE1\u606F___".concat(new Date())));
            }
        }
    }).then(function (value) {
        console.log('fulfilled__' + value);
    }, function (error) {
        console.log('rejected__' + error.message);
    });
}
test();
test();
test();
test();
test();
test();
