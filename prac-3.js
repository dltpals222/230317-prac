async function myFunction () {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("첫번째 함수");
      resolve();
    }, 1000); // 첫번째 setTimeout 끝
  }) // 첫번쨰 promise 끝
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("두번째 함수");
      resolve();
    }, 1000);// 두번째 setTimeout 끝
  }) // 두번쨰 promise 끝
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("세번째 함수");
      resolve();
    }, 1000);// 세번째 setTimeout 끝
  }) // 세번쨰 promise 끝
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("네번째 함수");
      resolve();
    }, 1000);// 네번째 setTimeout 끝
  }) // 네번쨰 promise 끝
} //function myFunction 끝
myFunction();