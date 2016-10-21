# commonjs
javascript 精确计算、日期处理、金额格式化

### clone使用
```html
<script type="text/javascript" src="common.js"></script>
```

### 精确计算
```javascript
var a = 1;
var b = 2;
// 加
var sum = Common.Math.add(a,b);
console.log(sum);

// 减
Common.Math.sub(a,b);

// 乘
Common.Math.mul(a,b);

// 除
Common.Math.div(a,b);
```

### 日期处理
```javascript
// 字符串->Date
Common.Date.parse("2016-10-21");

// Date->字符串
Common.Date.format(new Date(),"yyyy-MM-dd hh:mm");
```

### 日期格式化
```javascript
// 金额格式化 1000->1,000
Common.Money.format("0923823.2136");
// 已格式化金额转数字 1,000->1000
Common.Money.number("12,232.06");
```

more TODO

