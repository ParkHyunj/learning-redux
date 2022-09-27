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
5> Reducer에게 Action을 보내는 방법 : store.dispatch({key: value});

# 1.3 Subscriptions
1> add.addEventListener("click", () => countStore.dispatch({ type: "ADD"}));
    => add 버튼을 눌렀을 때 생기는 일
2> console 창에 subscribe: f => store 안에 있는 변화들을 알 수 있게 해준다.
3> Subscribe : store 안에 있는 변화 감지
    => store.subscribe(func); // store안의 변화를 감지하면 func 실행

# 1.4 Recap Refactor
1> countModifier 함수에서 return되는 것이 application의 state가 된다.
2> dispatch : reducer에게 action을 보내는 방법
3> subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행
4> countStore.subscribe(onChange);
    => 변화를 나의 store에서 감지하고 싶다면 onChange를 subscribe하면 된다.
5> reducer : 현재 상태의 application과 함께 불려지는 function (+ with action) / return하는 것은 application의 state가 됨
6> action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type이다. => dispatch({type: " "})
7> string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이
8> switch가 자주 쓰인다.(if else문 대신) => switch(action.type){

# 2.0 Vanilla ToDo
1> index.html만 보면, 데이터가 없이 내가 쓰는 것에 대해서만 반응할 뿐, 저장도 안되고, 특정 값을 지울 수도 없다.
2> 리덕스를 통해, array에서 특정 data를 지우거나 저장할 수 있게 해보자.

# 2.1 State Mutation
1> mutaion : 변화를 주다.
    ex) const friends = ["dal]
        friends.push("lynn)
        : friends는 1명에서 2명으로 변형되었다.
        => 새로운 objects를 return하는 것이다.
2> 우리는 mutation을 하지않고,= 새로운 state를 create하고, 그 새로운 state(new state objects)를 return한다.
3> state는 single source of truth이며, read-only이다
4> store을 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다.
5> state를 mutate하지 말아야한다.
    => React는 상황이 바뀌면 UI를 다시 렌더링하는데, 새로운 것을 만드는 대신 변경하면 Javascript가 객체가 다른지 알기가 어려워서
    ex) 예를 들어 배열 x = [1,2,3]이 있는 경우, 그리고 우리는 x.push(4)를 하면, 'x'는 여전히 동일한 '메모리 주소'의 배열입니다.

# 2.2 Delete ToDo
1> toDo를 삭제할 때, dispatch 시 id로 넘겨줘야 한다.
2> return [{ text: action.text, id: Date.now() }, ...state];
  => 이 부분에서 ...state를 앞에 하면, 항목을 추가할 때, 내가 새로 쓰는 항목이 아래로 가고, 기존에 있던 항목이 위로 향한다.
3> 데이터들을 내가 직접 입력한 후, 입력한 데이터를 삭제할 수 있게끔 구현.


