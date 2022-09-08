import watermark from "./watermark.js";
import {Toast} from "./Toast";

const utils = {

    /**
     * @description 判断值是否为空
     * @param {Null, Undefined, Number, Boolean, String, Array, Set, Map, File, Object} val: 需要判断的值
     */
    isEmpty(val) {
        switch (Object.prototype.toString.call(val)) {
            case "[object Null]":
            case "[object Undefined]":
                return true;

            case "[object Number]":
                return !val;

            case "[object Boolean]":
                return false;

            case "[object String]":
            case "[object Array]":
                return !val.length;

            case "[object Set]":
            case "[object Map]":
            case "[object File]":
                return !val.size;

            case "[object Object]":
                return !Object.keys(val).length;

            default:
                return false;
        }
    },

    /**
     * @description 格式化时间
     * @param {String} date: 默认当前时间
     * @param {String} format 默认'YYYY-MM-DD hh:mm:ss'
     */
    formatDate(date, format = "YYYY-MM-DD hh:mm:ss") {
        date = date ? new Date(date) : new Date();
        let rules = {
            year: {
                value: date.getFullYear(),
                type: "(Y+)",
                attr: "i"
            },
            month: {
                value: date.getMonth() + 1,
                type: "(M+)"
            },
            day: {
                value: date.getDate(),
                type: "(D+)",
                attr: "i"
            },
            hour: {
                value: date.getHours(),
                type: "(h+)",
                attr: "i"
            },
            minute: {
                value: date.getMinutes(),
                type: "(m+)"
            },
            second: {
                value: date.getSeconds(),
                type: "(s+)",
                attr: "i"
            }
        }

        function _formatType(key, value, type, attr, fmt) {
            function _initFmt(val) {
                return ("00" + val).substr(String(val).length)
            }

            if (new RegExp(type, attr).test(fmt)) {
                const fmtDate = key === "year" ? String(value).substr(4 - RegExp.$1.length) : (RegExp.$1.length ===
                    1) ? value : _initFmt(value);
                fmt = fmt.replace(RegExp.$1, fmtDate)
            }
            return fmt
        }

        for (const key in rules) {
            format = _formatType(key, rules[key].value, rules[key].type, rules[key].attr, format);
        }

        return format
    }
}

export default {
    watermark: watermark,
    toast: Toast,
    isEmpty: utils.isEmpty,
    formatDate: utils.formatDate
}
