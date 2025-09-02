// function red() {
//     console.log('red')
// }

// function green() {
//     console.log('green')
// }

// function yellow() {
//     console.log('yellow')
// }

// function light(cb, wait) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             cb();
//             resolve();
//         }, wait)
//     })
// }

// async function start() {
//     await Promise.resolve().then(() => light(red, 2000)).then(() => light(green, 3000)).then(() => light(yellow, 1000));
//     start();
// }

// start()

function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

// 红绿灯状态配置：[状态函数, 持续时间(ms)]
const states = [
    [red, 2000],
    [green, 1000],
    [yellow, 3000]
];

let currentStateIndex = 0; // 当前状态索引
let stateStartTime; // 当前状态开始时间

// 检查并切换状态
function checkState() {
    const now = Date.now();
    // 首次执行或当前状态已结束
    if (!stateStartTime || now - stateStartTime >= states[currentStateIndex][1]) {
        // 切换到下一个状态（循环）
        currentStateIndex = (currentStateIndex + 1) % states.length;
        // 执行当前状态的函数
        states[currentStateIndex][0]();
        // 记录当前状态开始时间
        stateStartTime = now;
    }
    // 继续检查（用setTimeout递归，避免阻塞）
    setTimeout(checkState, 10); // 每10ms检查一次，平衡精度和性能
}

// 启动
checkState();
