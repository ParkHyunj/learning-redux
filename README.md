# Redux
1> javascript application들의 state(상태)를 관리하는 방법         
2> redux는 react와 별개다.             
3> redux는 angular, vue.js 에서 쓸 수 있고, vanilla javascript(framework가 없는 pure한 js) 등 여러 곳에서 쓸 수 있다.         
4> 학습 목표 및 방향성            
    1> redux가 왜 만들어졌고, redux를 사용하는 이유를 알아보자.            
    2> vanilla-redux와 react-redux를 배운다.               
    3> redux를 사용하지 않고, vanilla, react 각각 두 파트의 프로젝트를 만든 후, 그것을 redux로 바꿔보자.             
5> Vanilla js를 하기 위한 설정             
 => app.css / app.js / app.test.js / index.css / logo.svg / reportwebvitals.js / setuptests.js 삭제 / index.js 내용 삭제             

# 1.0 Vanilla Counter
1> 첫 번째로, 모든 걸 바닐라로만 한다. => public 하위에 있는 index.html 사용          
2> count = count + 1; <=> count ++         
3> let count = 0;           
    => 여기서 유일한 data이자 바뀌는 곳                          
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
8> switch가 자주 쓰인다.(if else문 대신) => switch(action.type){ }                                                                    

# 2.0 Vanilla ToDo
1> index.html만 보면, 데이터가 없이 내가 쓰는 것에 대해서만 반응할 뿐, 저장도 안되고, 특정 값을 지울 수도 없다.                               
2> 리덕스를 통해, array에서 특정 data를 지우거나 저장할 수 있게 해보자.                         

# 2.1 State Mutation
1> mutaion : 변화를 주다.                     
    ex) const friends = ["dal]                  
        friends.push("lynn")                        
        : friends는 1명에서 2명으로 변형되었다.                                             
        => 새로운 objects를 return하는 것이다.                    
2> 우리는 mutation을 하지않고,= 새로운 state를 create하고, 그 새로운 state(new state objects)를 return한다.                         
3> state는 single source of truth이며, read-only이다.                    
4> store을 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다.                
5> state를 mutate하지 말아야한다.                      
    => React는 상황이 바뀌면 UI를 다시 렌더링하는데, 새로운 것을 만드는 대신 변경하면 Javascript가 객체가 다른지 알기가 어려워서              
    ex) 배열 x = [1,2,3]이 있는 경우, 그리고 우리는 x.push(4)를 하면, 'x'는 여전히 동일한 '메모리 주소'의 배열입니다.                             

# 2.2 Delete ToDo
1> toDo를 삭제할 때, dispatch 시 id로 넘겨줘야 한다.                     
2> return [{ text: action.text, id: Date.now() }, ...state];                   
  => 이 부분에서 ...state를 앞에 하면, 항목을 추가할 때, 내가 새로 쓰는 항목이 아래로 가고, 기존에 있던 항목이 위로 향한다.                     
3> 데이터들을 내가 직접 입력한 후, 입력한 데이터를 삭제할 수 있게끔 구현.                    

# 2.3 Delete ToDo(part 2)
1> 빈 칸에 내가 쓴 항목들 중 특정 항목만 del할 수 있게 구현 => id를 준다.                       
2> delete element from array => splice() : array의 컨텐츠를 바꾼다. => state를 mutate하므로 쓰지 말자                 
3> filter() : arrary를 새로 만든다. => 이걸 사용한다.                   

# Conculsions
1> [ ...state ] => 이게 결국 새로운 배열을 만드는 것이다.                 
2>  const dispatchAddToDo = text => {                    
    store.dispatch(addToDo(text));                     
    };                       
    => 이 function은 오로지 action을 dispatch하기 위한 용도                    
3> const addToDo = text => {                      
    return {                         
        type: ADD_TODO,                    
        text                      
    };                   
   };                      
   => objects를 return하고 있으며, 이 object는 action에 보내진다.                 
4>  case ADD_TODO:                       
      const newToDoObj = { text: action.text, id: Date.now() };                    
      return [newToDoObj, ...state];                   
    case DELETE_TODO:                    
      const cleaned = state.filter(toDo => toDo.id !== action.id);                    
      return cleaned;                   
   => state를 mutate하지 않고, 새로운 state를 만들고 있다.                      
5> Vanilla & Redux                       

# 3.0 Setup
1> React-Redux를 하기 위한 setting하기             
2> index.html <body>부분 원래대로 해놓기                  
3> components 폴더를 만든 후, App.js 만들기                   
4> index.js는 App.js에 대하여 npx create-react-app 했을 때의 setting으로 해놓기                  
5> npm install reat-router-dom                 
6> npm install react-redux                 
7> import ReactDOMClient from 'react-dom/client';                     
8>  <BrowserRouter>                   
        <App />               
    </BrowserRouter>                 

# 3.1 Connecting the Store
1> React Redux에는 Provider컴포넌트를 통해 앱의 다른 컴포넌트에서 Redux store를 사용할 수 있다.                  
2> import { createStore } from "redux";                   
   const store = createStore();                       
   => const store 윗 줄에 const reducer = (state = [], action) => {} 쓰기                    
3> react는 모든 것을 다시 render하지 않고, 변화가 있는 부분만 render한다.                   
  => 그래서 react-redux가 필요하다. 왜냐하면, store의 변동사항에 대해 subscribe하고 싶기 때문이다. 그리고 그것이 바뀔 때마다 render가 되기를 바란다.                      
4> src 하위 파일로 store.js를 만들었고, index.js에 impor한다.                    

# 3.2 mapStateToProps
1> redux state로부터 정보를 가지고 올 수 있어야 한다.                   
2> store.getState() => 현재의 state를 전달한다.                        
3> <ul></ul>에서 store로부터 state를 가져올 수 있도록 해야 한다.                    
4> redux에서 connect 함수 : components들을 store에 연결시켜 준다.                    
5> connect는 2개의 argument를 갖는다. state, dispatch                 
6> connect()는 return한 것을 component의 prop에 추가해준다.               
7> connect(mapStateToProps)(Home)가 ES6인가요?                    
    => connect 함수를 들여다봐야 알겠지만 만약 connect함수가 파라미터를 요구하고 connect가 return하는 함수가 다시 또 다른 파라미터를 요구하면 저런식으로 써서                                             
      mapStateToProps가 connect 함수의 파라미터, 내부의 리턴 함수에 필요한 파라미터가 Home으로 들어가는 구조입니다.                      
8> mapStateToProps는 두 종류의 argument와 함께 호출되는 function이다.                   
    => 첫 번째 argument는 Redux store에서 온 state이다.                  
    => 두 번째 argument는 component의 props이다.                   

# 3.3 mapDispatchToProps
1> store.getState() => getState()를 통해 state를 받는다.                    
2> 최근에는 connect를 안 쓰는 추세고, useSelector와 useDispatch를 사용한다.                  
  => useSelector : getState랑 똑같은 기능(store에서 정보를 가져옴)이고 리액트에서는 mapStateToProps 대체                    
  => useDispatch : mapDispatchToProps 대체                  
  => actionCreators는 굳이 사용할 필요가 없다.                    
3> return에서 map 돌릴 때는todos가 아니라 useSelector로 가져온 toDo를 사용하면 된다.                  
4> mapStateToProps는 hooks에서 useSelector, redux에서는 getState이고               
   mapDispatchToProps는 hooks에서 useDispatch, redux에서는 dispatch이다.                      

# 3.4 Deleting To Do
1> const toDo = useSelector((state) => state);                       
    => useSelector를 통해 store의 state를 바로 가져온다.                 
2> 항목을 추가한 후, 특정 항목 삭제하기 구현                      
3> onBtnClick: () => : ToDo의 props와 redux-store의 dispatch의 조합으로 만든 함수                   

# 3.5 Detail Screen
1> 내가 추가한 항목들에 link를 달아서 url 뒤에 나오는 임의의 숫자 구현                        

# 3.6 Redux Local Storage
1> ToDo 리스트를 Local Storage에 저장하고, 관리하기(redux local storage 참고)                           
2> store.js에서 reducer에 initialState 할당하는 부분 수정                      
3> save함수 추가하고 새로운 state를 리턴하기 전에 호출                        
4> toDo.map() => toDo.reducer.map()으로 고치기                     

# 4.0 Redux Toolkit
1> 적은량의 코드로 같은 기능을 하도록 도와주는 package 모음.                
2> npm install @reduxjs/toolkit                             

# 4.1 createAction
1> import { createAction } from "@reduxjs/toolkit";                         
2> 지금부터는 action으로부터 뭔가를 받으면, payload의 안쪽으로 간다.               

# 4.2 createReducer
1> redux에서 state를 mutate하는 이유는?               
  => redux toolkit이 immer 아래 작동하기 때문이다.                
  => immer : 현재 상태를 변경하여 다음 불변 상태를 만든다.                 
  => 이것 또한 새로운 state를 return하는 것이기 때문에 신경 쓰지 말자!                        
2> Array.prototype.unshift()                   
  => unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환한다.                
3> createReducer()에서는 새로운 state를 리턴하거나, state를 mutate할 수 있다.                  
4> createReducer()에서는 switch, case를 사용할 필요가 없고, state를 mutate 할 수 있게 해준다.                      

# 4.3 configureStore
1> configureStore() 함수는 나의 state에 어떤 일이 발생했는지 정확하게 알 수 있다.                 
2> Redux DevTools 설치하기(구글 확장 프로그램)                    
  => https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko                  
3> 개발자 도구 차에서 redux를 누르면, 모든 state의 변화를 볼 수 있다.                         

# 4.4 createSlice
1> createSlice                    
  => 초기 state, reducer 함수의 객체, "slice 이름"을 받아 리듀서 및 state에 해당하는 action crator와 action type을 자동으로 생성하는 함수             
  => 내부적으로는 createAction 및 createReducer를 사용하므로 Immer를 사용하여 "mutating" 불변 업데이트를 작성할 수도 있다.                 
2> createSlice 함수는 reducer뿐만 아니라, action도 생성한다.                  
3> createSlice 함수는 옵션으로,                 
  => 첫 번째 옵션: name: '';                            
  => 두 번째 옵션: initialState: []                 
  => 세 번째 옵션: reducers: { }                     

# 4.5 Conclusions
1> 2개 이상의 reducer를 사용해야 하는 경우에는                  
    const allReducer = combineReducers({                
    <<여기에 관리할 리듀서 다 써주면 됨>>                  
    ex) //user,                 
        //textlist                
    })                
    const store = configureStore({reducer: allReducer});                  
2> 데이터가 배열인 경우에 map으로 꺼낼 때, useSelector로 꺼내온 데이터를 변수로 지정하고 console.log 해보면, combineReducers에서 적어놓은 reducer 이름으로 배열이 만들어져 있다.             
   const data = useSelector(state => state)로 빼왔으면 data.리듀서이름.map 으로 꺼내면 된다.                    

