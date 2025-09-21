for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  function print(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  print(i);
}

for (var i = 0; i < 5; i++) {
  function printText() {
    var temp = i;
    setTimeout(() => {
      console.log(temp);
    }, 100);
  }
  printText();
}

for (var i = 0; i < 5; i++) {
  function printText() {
    setTimeout(() => {
      var temp = i;
      console.log(temp);
    }, 100);
  }
  printText();
}
