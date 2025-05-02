function wakeUp(callback) {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    callback;
  }, 1000);
}

function washFace(callback) {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    callback;
  }, 1000);
}

function shower() {
  setTimeout(() => {
    console.log("2. 샤워했어요! 💦");
  }, 1000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
  }, 1000);
}

// 동기 처리
wakeUp(function() {
  washFace(function () {
    shower();
  });
});
washFace();