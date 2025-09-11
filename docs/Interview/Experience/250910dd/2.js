async function mw1(ctx, next) {
  console.log("before middleware 1");
  await next();
  console.log("after middleware 1");
}

async function mw2(ctx, next) {
  console.log("before middleware 2");
  await next();
  console.log("after middleware 2");
}

async function mw3(ctx, next) {
  console.log("before middleware 3");
  await next();
  console.log("after middleware 3");
}

mws = [mw1, mw2, mw3];

function compose(middlewares) {
  return function (context) {
    let index = -1;

    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let cur = middlewares[i];
      if (!cur) return Promise.resolve();
      return Promise.resolve(
        cur(context, function next() {
          return dispatch(i + 1);
        }),
      );
    }

    return dispatch(0);
  };
}

fn = compose(mws);
fn();
