if(Common)alert('Common is def');
var Common = {};
// 运算
Common.Math = {
	// 加
	add : function(v1, v2) {
		var r1 = 0, r2 = 0, m;
		try {
			r1 = v1.toString().split(".")[1].length;
		} catch (e) {
		}
		try {
			r2 = v2.toString().split(".")[1].length;
		} catch (e) {
		}
		m = Math.pow(10, Math.max(r1, r2));

		return (v1 * m + v2 * m) / m;
	},
	// 减
	sub : function(v1, v2) {
		return this.add(v1, -v2);
	},
	// 乘
	mul : function(v1, v2) {
		var m = 0;
		var s1 = v1.toString();
		var s2 = v2.toString();

		try {
			m += s1.split(".")[1].length;
		} catch (e) {
		}

		try {
			m += s2.split(".")[1].length;
		} catch (e) {
		}

		return Number(s1.replace(".", "")) * Number(s2.replace(".", ""))
				/ Math.pow(10, m);
	},
	// 除
	div : function(v1, v2) {
		var t1 = 0;
		var t2 = 0;
		var r1, r2;

		try {
			t1 = v1.toString().split(".")[1].length;
		} catch (e) {
		}

		try {
			t2 = v2.toString().split(".")[1].length;
		} catch (e) {
		}

		with (Math) {
			r1 = Number(v1.toString().replace(".", ""));
			r2 = Number(v2.toString().replace(".", ""));
			return (r1 / r2) * pow(10, t2 - t1);
		}
	}
};
// 日期
Common.Date = {
	// 字符串转换成日期
	parse : function(dateStr) {
		return new Date((dateStr).replace(/-/g, "/"));
	},
	// 日期格式化
	format : function(date, fmt) { // author: meizz
		var o = {
			"M+" : date.getMonth() + 1, // 月份
			"d+" : date.getDate(), // 日
			"h+" : date.getHours(), // 小时
			"m+" : date.getMinutes(), // 分
			"s+" : date.getSeconds(), // 秒
			"q+" : Math.floor((date.getMonth() + 3) / 3), // 季度
			// 毫秒
			"S" : date.getMilliseconds()
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		for ( var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
						: (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
};
// 金额
Common.Money = {
	number : function(money) {
		return money.replace(",","");
	},
	format : function(number) {
		if (isNaN(number)) return number;// 不是数字直接输出

		var numberStr = Number(number).toString();
		var dotIndex = numberStr.indexOf(".");
		var dec = "";
		if (-1 != dotIndex){
			dec = numberStr.substr(dotIndex);
			// 获取点前面的
			numberStr = numberStr.substr(0,dotIndex);
		}
		numberStr = numberStr.split('').reverse().join('');
		var fmt = "";
		for (var i = 0; i < numberStr.length; i+=3) {
			fmt += numberStr.substr(i,3) + ",";
		}
		fmt = fmt.split('').reverse().join('');

		if(0 == fmt.indexOf(',')){
			fmt = fmt.substr(1);
		}
		return fmt+dec;
	}
};
