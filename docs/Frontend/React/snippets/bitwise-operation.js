// #region 1
export const NoFlags = 0b000000000000000000000000000;
export const PerformedWork = 0b000000000000000000000000001;
export const Placement = 0b000000000000000000000000010;
export const DidCapture = 0b000000000000000000010000000;
export const Hydrating = 0b000000000000001000000000000;
// #endregion 1

// #region 2
// 初始化一些 flags
const NoFlags = 0b00000000000000000000000000;
const PerformedWork = 0b00000000000000000000000001;
const Placement = 0b00000000000000000000000010;
const Update = 0b00000000000000000000000100;

// 一开始将 flag 变量初始化为没有 flag，也就是 NoFlags
let flag = NoFlags;

// 这里就是在合并多个状态
flag = flag | PerformedWork | Update;

// 要判断是否有某一个 flag，直接通过 & 来进行判断即可
//判断是否有  PerformedWork 种类的更新
if (flag & PerformedWork) {
  //执行
  console.log("执行 PerformedWork");
}

//判断是否有 Update 种类的更新
if (flag & Update) {
  //执行
  console.log("执行 Update");
}

if (flag & Placement) {
  //不执行
  console.log("执行 Placement");
}
// #endregion 2

// #region 3
export const NoLanes = 0b0000000000000000000000000000000;
export const NoLane = 0b0000000000000000000000000000000;
export const SyncLane = 0b0000000000000000000000000000001;
export const InputContinuousHydrationLane = 0b0000000000000000000000000000010;
export const InputContinuousLane = 0b0000000000000000000000000000100;
// #endregion 3

// #region 4
// lanes 一套 lane 的组合
function getHighestPriorityLanes(lanes) {
  // 从 lanes 这一套组合中，分离出优先级最高的 lane
  switch (getHighestPriorityLane(lanes)) {
    case SyncLane:
      return SyncLane;
    case InputContinuousHydrationLane:
      return InputContinuousHydrationLane;
    case InputContinuousLane:
      return InputContinuousLane;
      // ...
      return lanes;
  }
}

// lane 在表示优先级的时候，大致是这样的：
// 0000 0001
// 0000 0010
// 0010 0000

// lanes 表示一套 lane 的组合
// 比如上面的三个 lane 组合到一起就变成
// 0010 0011
// getHighestPriorityLane 分离出优先级最高的
// 0010 0011 ----> getHighestPriorityLane -----> 0000 0001

export function getHighestPriorityLane(lanes) {
  return lanes & -lanes;
}
// #endregion 4

// #region 5
// 是否处于 RenderContext 上下文中，结果为 true
executionContext & (RenderContext !== NoContext);
// 是否处于 CommitContext 上下文中，结果为 false
executionContext & (CommitContext !== NoContext);
// #endregion 5
