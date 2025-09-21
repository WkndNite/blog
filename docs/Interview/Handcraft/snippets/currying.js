// #region 1
// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
  return reg.test(txt);
}

// 即使是相同的正则表达式，也需要重新传递一次
console.log(check(/\d+/g, "test1")); // true
console.log(check(/\d+/g, "testtest")); // false
console.log(check(/[a-z]+/g, "test")); // true

// Currying后
function curryingCheck(reg) {
  return (txt) => reg.test(txt);
}

// 正则表达式通过闭包保存了起来
var hasNumber = curryingCheck(/\d+/g);
var hasLetter = curryingCheck(/[a-z]+/g);

console.log(hasNumber("test1")); // true
console.log(hasNumber("testtest")); // false
console.log(hasLetter("21212")); // false
// #endregion 1

// #region 2
/**
 *
 * @param {要绑定事件的 DOM 元素} element
 * @param {绑定什么事件} event
 * @param {事件处理函数} handler
 */
var on = (element, event, handler) => {
  if (document.addEventListener) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  } else {
    if (element && event && handler) {
      element.attachEvent("on" + event, handler);
    }
  }
};

on(div, "click", () => {});

var on = (() => {
  if (document.addEventListener) {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
})();

on(div, "click", () => {});

//换一种写法可能比较好理解一点，上面就是把 isSupport 这个参数给先确定下来了
var on = (isSupport, element, event, handler) => {
  isSupport = isSupport || document.addEventListener;
  if (isSupport) {
    return element.addEventListener(event, handler, false);
  } else {
    return element.attachEvent("on" + event, handler);
  }
};
on(true, div, "click", () => {});
on(true, div, "click", () => {});
on(true, div, "click", () => {});
// #endregion 2
