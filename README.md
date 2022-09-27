# Redux
1> javascript application들의 state(상태)를 관리하는 방법
2> redux는 react와 별개다.
3> redux는 angular, vue.js 에서 쓸 수 있고, vanilla javascript(framework가 없는 pure한 js) 등 여러 곳에서 쓸 수 있다.
4> 학습 목표 및 방향성
    1> redux가 왜 만들어졌고, redux를 사용하는 이유를 알아보자.
    2> vanilla-redux와 react-redux를 배운다.
    3> redux를 사용하지 않고, vanilla, react 각각 두 파트의 프로젝트를 만든 후, 그것을 redux로 바꿔보자.
5> Vanilla js를 하기 위한 설정
app.css / app.js / app.test.js / index.css / logo.svg / reportwebvitals.js / setuptests.js 삭제 / index.js 내용 삭제

# 1.0 Vanilla Counter
1> 첫 번째로, 모든 걸 바닐라로만 한다. => public 하위에 있는 index.html 사용
2> count = count + 1; <=> count ++
3> html에 뭔가가 바뀌었다고, 알려주기 위해서 함수를 쓰는 것 => 리덕스
4> Vanilla js로 add, minus 단추를 만들어 누를때마다 각각 +1, -1 되게끔 설정 후, const updateText로 내가 버튼을 누르는 것에 대한 업데이트 결과를 html에 표현한 것.