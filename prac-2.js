new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log("첫번째 함수");
    resolve();
  },1000); // 첫번째 함수 setTimeout 끝
}) //첫 promise 끝
.then(() => { //then의 단어의 뜻 => 그 다음에
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("두번째 함수");
      resolve();
    }, 1000); // 두번째 함수 setTimeout 끝
  });  //첫번째 then의 promise 끝
})//첫번재 then 끝
.then(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("세번째 함수");
      resolve();
    },1000); // 세번째 함수 setTimeout 끝
  }); //두번째 then의 promise 끝
})//두번째 then 끝
.then(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("네번째 함수");
      resolve();
    }, 1000) //네번째 함수 setTimeout 끝
  })//세번째 then의 promise 끝
})//세번째 then 끝
