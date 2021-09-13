// var c = prompt("大记号");


//笔记
/*
  == 和===两者区别:
 ==会有隐式转换  会把"123" ==123会把左边的字符串转换成数字返回true 
 ===   判断数据类型  "123"===123  不会做数据类型转换  返回false

 null 和undefined比较
   null === undefined  false
   null == undefined true  仅仅等于对方而不等于其他任何的值(非严格相等)

   null 在 > <>= <=  比较中null会转换为0
     null>0
     null<=0
     null==0        在相等判断中 只会与null相等
  underfined > <>= <=  不会与任何值相等
        underfined >0  false  在进行> <>= <=转换为NAN NaN 不与任何值相等
        underfined<=0  false  
        underfined==0  false  在相等判断中 只会与null相等

 */
// "use strict" 开启严格模式
console.log("123" === 123);
console.log("\n0\n");
//练习
console.log(5 > 4); //true
console.log("apple" > "pineapple"); //  false
console.log("2" > "12"); //false
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //falseen




/*
函数声明创建函数
function 函数名 (参数,....){
   函数体
}
return  
*/
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }

// 三元运算符
//   function checkAge(age) {
//     return age > 18 ? true :confirm('Do you have your parents permission to access this page?');
//   }

//   checkAge(19);

//  或运算符  
//function checkAge(age) {
//     let Isconfirm = confirm('Do you have your parents permission to access this page?');
//       return age>18 | Isconfirm 

//     }

//   checkAge(19);

function min(value, value1) {
    return value > value1 ? value1 : value
}
min(3, -1)

function pow(m, n) {
    var accumulate = m;
    for (var i = 1; i < n; i++) {
        accumulate *= m
    }
    return accumulate;
}
pow(3, 2)


/*
  函数声明和函数表达式区别
  函数声明可以在声明之前就可以访问
  而函数表达式在赋值的时后才可以访问
  箭头函数 ：
        语法：(参数)=>{代码块}
*/

let age = 18;
// 严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。
// 有条件地声明一个函数
//使用函数声明的方法去创建一个函数出现下列问题
if (age < 18) {

    function welcome() {
        alert("Hello!");
    }

} else {

    function welcome() {
        console.log("Greetings!");
    }

}

welcome();


// 箭头函数
// let cc = n => { 
//     console.log(this);
//     n*2; };

// console.log(this)

//语法： 分号的作用 下列代码没有使用分隔符; 会使代码报错
console.log("There will be an error after this message")[1, 2].forEach((i) => {
    console.log(i)
})

//调试 debugger 错误开启

/*
 注释： 尽量少写解释型注释 如果一个结构一眼看上去不能解释的通，这时候就需要考虑重构代码；
 好的注释：
     描述架构
     记录函数的参数和用法
     解决方案的注释非常重要 他们可以帮助你以正确的方式继续开发
     如果代码存在任何巧妙和不显而易见的方法，那绝对需要注释。
 总结：一个好的开发者的标志之一就是他的注释：
      它们的存在甚至它们的缺席（译注：在该注释的地方注释，
      在不需要注释的地方则不注释，甚至写得好的自描述函数本身就是一种注释);
 注释内容：
      整体架构，高层次的观点。
      函数的用法。
      重要的解决方案，特别是在不是很明显时。
  避免注释：
     描述“代码如何工作”和“代码做了什么”。
     避免在代码已经足够简单或代码有很好的自描述性而不需要注释的情况下，还写些没必要的注释。
*/

/*
  忍者 新手 代码审查者
  简洁的代码
     例子: i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
  一个字母的变量  a,b
  变量的缩写 :list -> lst  userAgent -> ua
  抽象化: data value ,变量的类型命名:  str num;
  智能同义词  
  下划线
  等等;_
*/

/**
 *  使用Mocha进行自动化测试
 *    手动测试代码容易遗漏其他代码测试
 *    行为驱动开发(BDD)
 *       内容,测试,文档和示例
 *  开发 “pow(x,n)”：规范:
 *      计算x的n次幂
 *      在创建函数 pow 的代码之前，我们可以想象函数应该做什么并且描述出来。
        这样的描述被称作 规范（specification, spec）
        describe("pow", function() {

          it("raises to n-th power", function() {
            assert.equal(pow(2, 3), 8);
          });
       });
 */