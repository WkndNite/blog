const hotKeys = ["iPhone", "iPad", "华为", "小米"];

async function api() {
  // ...
}

function createFactory() {
  let timer = null;
  let lastKeyword = "";

  return function searchGood(keyword) {
    if (keyword.length === 1 && lastKeyword.length === 0) {
      const results = hotKeys
        .filter((item) => item.includes(keyword))
        .join(",");
      console.log("开始搜索", results);
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (keyword === "") {
      console.log("重新输入");
      lastKeyword = "";
      return;
    }

    timer = setTimeout(async () => {
      await api();
      timer = null;
    }, 500);

    lastKeyword = keyword;
  };
}
