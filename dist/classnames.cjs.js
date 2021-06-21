'use strict';

var hasOwn = {}.hasOwnProperty;
function classnames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
            continue;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg)) {
            if (arg.length) {
                var inner = classnames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
        }
        else if (argType === 'object') {
            if (arg.toString === Object.prototype.toString) {
                for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            }
            else {
                classes.push(arg.toString());
            }
        }
    }
    return classes.join(' ');
}

module.exports = classnames;
