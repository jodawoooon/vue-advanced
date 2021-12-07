# vue-advanced
Inflearn Vue.js 완벽 가이드 - 실습

----------------

### 하이오더 컴포넌트  
1) 컴포넌트의 코드를 재사용할 수 있는 기술  
2) 단점: HOC로 통신하는 것이 많을 수록 컴포넌트 레벨이 깊어지면서 컴포넌트 통신에있어서 불편한 현상들이 발생함.  

=> 엔드포인트 주소만 빼고 api 콜하는 부분 코드 똑같아서 HOC 적용  
공통적인 부분은 HOC로 만들어주고 거기서 네임이든 분기처리를 해주면된다.  

### Mixins  
공통되는 부분 빼기  
HOC 보다 레이어가 얇다  

### 라우터 네비게이션 가드  
특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)  
=> 스피너 띄우기  
=> store 공용 사용 시 ux가 깨지는 부분도 해결 가능  

### 컴포넌트 라이프 사이클 훅  
created : 컴포넌트가 생성되자마자 호출되는 로직  

### async - await  
 axios 모듈에서의 request / response는 비동기로 처리되기 때문에 어떤 처리 순서를 지정하지 않으면 request로 요청을 보내고 나서 response로 응답도 받기 전에 다음 구문을 수행해 버리기 때문에 원하는 결과가 나오지 않는다  

순차적 처리를 위해서 Promise를 사용 -> .then()  
promise쓸 때 => .then.catch  
async 쓸 때 =>에러 핸들링 불가능 => try catch  

Promise의 .then() 지옥의 가능성  
코드가 길어지면 길어질수록, async/await 를 활용한 코드가 가독성이 좋다.  
async/await 은 비동기 코드가 동기 코드처럼 읽히게 해준다. 코드 흐름을 이해 하기 쉽다.  

### $ref  
 (자바스크립트의 querySelector와 같은 역할) DOM 요소에 접근  

### slot  
컴포넌트의 재활용성을 높여주는 기능  

### 외부 라이브러리 모듈화  
1. 차트 라이브러리 npm 설치  
2. 라이브버리 import로 App.vue 로딩  
3. mounted() 라이프 사이클 훅에서 차트를 그림  
4. 차트를 컴포넌트화  
5. 컴포넌트의 플러그인화  
6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합  


-----------------------------------------------

에러코드(개발자 콘솔에서 확인) :   

TypeError: chart_js__WEBPACK_IMPORTED_MODULE_0__.default is not a constructor    

해결 방법 :  
npm i chart.js로 다운로드 할 시 2021년 4월 달에 새로 출시된 chart.js 3.0버전이 다운로드 됩니다. 위의 에러는 chart.js 3.0버전에서 발견되는 에러인데 chart.js 2버전으로 다시 다운로드 하면 해결됩니다.  

npm install chart.js@2  
