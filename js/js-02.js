//对象属性  []  和 .的访问属性
let con = {
    name: "ckf",
    "age no": 19,
}

// delete con["age no"]
console.log(con["age no"]);

//属性存在性测试--in 操作符

console.log("age no" in con);
//for in 遍历key
for (key in con) {
    console.log(con[key])
}
// 像对象一样排序 :整数属性

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
// }

// for (let key in codes) {
//     console.log(key);
// }


function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

let schedule = {};

console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));


function Sum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key]
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log("salaries" + Sum(schedule));

//
// 在调用之前 对对象数值类型进行一个乘法运算;
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (key in obj) {
        if ((typeof obj[key]) == "number") {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);

// 调用函数之后
console.log(menu);

// 克隆与合并;  语法Object.assign(dest, [scr1, scr2, scr3]);
// dest指向目标对象;后面的参数是原对象;
//返回值:dest
//覆盖原来有的值
//无法进行深拷贝 
let user = {
    name: "ckf",
    men: {
        height: 180,
        width: 1990,
    }
}


//垃圾回收机制:可达
/*
  内存管理概念是可达性
  可达值:
      以某种方式可访问或可用的值。它们一定是存储在内存中的。
      当前函数的局部变量和参数。
      嵌套调用时，当前调用链上所有函数的变量与参数。
      全局变量。
     （还有一些内部的）
      这些值被称作 根（roots）
*/
// 例子:相互引用
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});
//例子二:无法到达的岛屿
//优化建议:
// 分代收集（ Generational collection）—— 对象被分成两组：“ 新的” 和“ 旧的”。 许多对象出现， 完成它们的工作并很快死去， 它们可以很快被清理。 那些长期存活的对象会变得“ 老旧”， 而且被检查的频次也会减少。
// 增量收集（ Incremental collection）—— 如果有许多对象， 并且我们试图一次遍历并标记整个对象集， 则可能需要一些时间， 并在执行过程中带来明显的延迟。 所以引擎试图将垃圾收集工作分成几部分来做。 然后将这几部分会逐一进行处理。 这需要它们之间有额外的标记来追踪变化， 但是这样会有许多微小的延迟而不是一个大的延迟。
// 闲时收集（ Idle - time collection）—— 垃圾收集器只会在 CPU 空闲时尝试运行， 以减少可能对代码执行的影响。
// 学习网址:http://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection V8引擎


//对象方法 ,this
/*
  Javascript中行为由属性中的函数来表示;
  方法:作为对象的属性的函数
*/
//方法简写
let user = {
    sayHi: function () {
        console.log("hello");
    }
}
//省略function
user = {
    sayHi() {
        console.log("hello");
    }
}

//this取决于执行的上下文(调用的时候计算出来)

//计算器
let calculator = {
    value: 0,
    value2: 0,
    read() {
        this.value = +prompt("default", 1);
        this.value2 = Number.parseInt(prompt("default", 0));
    },
    sum() {
        return this.value + this.value2
    },
    mul() {
        return this.value * this.value2
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//构造器
//  函数名: 首字母大写
//  给当前对象做赋值操作
//  返回一个对象(this)
function Accumulator(sartingValue) {
    this.value = sartingValue;
    this.read = function () {
        this.value += +prompt("default", 0);
    }
}
let accumulator = new Accumulator(1); // 初始值 1

accumulator.read(); // 添加用户输入的 value
accumulator.read(); // 添加用户输入的 value

alert(accumulator.value); // 显示这些值的总和

//可选链  : "?." 访问嵌套对象属性的安全的方式。即使中间的属性不存在，也不会出现错误。
// 解决当对象不存在的时候 返回undefined而不实报错 
//不要过度使用可选链
let user = {
    name: "ckf",
    address: {
        assert: {},
    }
}

alert(user ? .address);
//可以和(),[],delete 搭配使用
// 搭配:
delete user ? .address;

//Symbol类型;表示唯一的标识符
let id = Symbol(); //实例化Symbol对象
//特点:不会被自动转换为字符串 需要显示调用toString方法() description
//会被for in跳过 --- 克隆会被复制到新的对象上去

//全局Symbol :想要在多个地方访问的id指向完全相同的属性;
let sym = Symbol.for("name"); //注册表的Symbol 
console.log("sym");
console.log(Symbol.keyFor(sym));

//对象原始值转换