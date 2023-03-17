setTimeout(function() {
  console.log("첫번째 함수");
  setTimeout(function() {
    console.log("두번째 함수");
    setTimeout(function(){
      console.log("세번째 함수");
      setTimeout(function (){
        console.log("네번째 함수");
      },1000) // 네번째 함수 setTimeout 끝
    },1000) //세번째 함수 setTimeout 끝
  },1000) // 두번째 함수 setTimeout 끝
},1000) // 첫번째 함수 setTimeout 끝