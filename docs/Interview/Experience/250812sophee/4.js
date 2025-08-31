function isEqualedArray(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  if (m !== n) return false;

  for (let i = 0; i < m; i++) {
    if (!_deepEq(arr1[i], arr2[i])) return false;
  }

  return true;
}

function deepEq(strA, strB) {
  const objA = JSON.parse(strA.replace(/'/g, '"'));
  const objB = JSON.parse(strB.replace(/'/g, '"'));

  return _deepEq(objA, objB);
}

function _deepEq(o1, o2) {
  if (o1 === o2) return true;

  const flag1 = Array.isArray(o1);
  const flag2 = Array.isArray(o2);

  if (flag1 && flag2) {
    return isEqualedArray(o1, o2);
  } else if (
    !flag1 &&
    !flag2 &&
    typeof o1 === "object" &&
    typeof o2 === "object"
  ) {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
      if (!(key in o2)) return false;
      if (!_deepEq(o1[key], o2[key])) return false;
    }
    return true;
  } else {
    return o1 == o2;
  }
}
