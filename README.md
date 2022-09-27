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
3> let count = 0;
    => 여기서 유일한 data이자 바뀌는 곳.
4> const updateText = () => {
    number.innerText = count;
    };
    => html에 count를 업데이트하라고 알려주는 함수.
5> Vanilla js로 add, minus 단추를 만들어 누를때마다 각각 +1, -1 되게끔 설정 후, const updateText로 내가 버튼을 누르는 것에 대한 업데이트 결과를 html에 표현한 것.

# 1.1 Store and Reducer
1> 1.0의 예시를 사용해서 redux로 만들어보자. => Vanilla Redux
2> npm install redux
3> store =  나의 data를 저장하는 곳 => state = 나의 application에서 바뀌는 data를 말한다.
4> const store = createStore();라고 하면 오류가 나서 그 위에 const reducer = () => {};라고 쓴 후, ()안에 reducer 써주기
5> reducer는 함수로써, 나의 data를 수정(업데이트)한다.
6> reducer 함수에서 return하는 것은 내 application의 data가 된다.
7> createstore은 store을 create한다.   

# 1.2 Actions
1> Action : redux에서 function을 부를 때 쓰는 두번 째 parameter 또는 argument라고 한다.
2> 나의 data를 modify할 수 있는 function은 오직 countModifier다. 
3> countModifier 함수와 외부에서 커뷰니케이션을 할 수 있는 건 countModifier에게 action을 보내는 것이다.
4> countStore.dispatch({ type : "ADD" }); => 이것이 action으로 countModifier에 대입된다.