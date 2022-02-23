import React from "react"
import CodeBlock from "../../components/CodeBlock"
import Paragraph from "../../components/Paragraph"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import BottomNav from "../../components/ui/BottomNav"
import Layout from "../../components/ui/Layout"
import img01 from "../../img/study02/reducers.jpg"
import img02 from "../../img/study02/actions.jpg"
import img03 from "../../img/study02/todoapp.jpg"
import img04 from "../../img/study02/index.jpg"

function ReduxExample02() {
    return (
        <Layout>
            <BottomNav children1={"/hecStudy01/study02/01_Basic"} children2={"/hecStudy01/study02/03_ReactRedux"} />

            <SubTitls />

            <Title>1. 리덕스를 사용하는 방식</Title>
            <SubTitls>- 예제</SubTitls>
            <Paragraph>가장 먼저 리덕스를 구성하는 방식에 대해 이야기하겠습니다. 리액트로 프로젝트를 하나 생성하고, 그 후 기본적인 리덕스를 설치합니다.</Paragraph>
            <CodeBlock>
                <p>npx create-react-app [폴더명]</p>
                <p>npm install --save redux</p>
            </CodeBlock>
            <Paragraph>그럼 본격적으로 리덕스를 만들어 보겠습니다.</Paragraph>
            <SubTitls>1-1. 스토어의 초기상태를 구성합니다.</SubTitls>
            <CodeBlock>
                <p>{"// index.js"}</p>
                <p>{"const initialState = {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"task : [ ]"}</p>
                <p>{"}"}</p>
            </CodeBlock>

            <SubTitls>1-2. 리듀서를 정의합니다.</SubTitls>
            <CodeBlock>
                <p>{"// index.js"}</p>
                <p>{"function tasksReducer(state = initialState, action)"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"switch (action.type)"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"case 'ADD_TASK' :"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"return {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"...state,"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"tasks: state.tasks.concat([action.task])"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"};"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"default:"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"return state;"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
                <p>{"}"}</p>
            </CodeBlock>
            <Paragraph>리듀서의 첫 번째 매개변수에는 현재 상태를 나타내는 state 객체를 전달합니다. 초기 상태로 이전에 정의한 initialState를 지정했습니다.</Paragraph>
            <Paragraph>두 번째 매개변수에는 어떤 조작을 할지 나타내는 액션객체를 전달합니다.</Paragraph>
            <CodeBlock>
                <p>{"// 액션 객체로 사용할 형태"}</p>
                <p>{"{"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"type: 'ADD_TASK',"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"payload: {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"task: 'Reducer 공부하기'"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
                <p>{"}"}</p>
            </CodeBlock>
            <Paragraph>ADD_TASK라는 type을 가진 액션이 발행되면 현재 태스크 목록을 나타내는 tasks 배열에 task를 추가하면 될 것입니다.</Paragraph>
            <Paragraph>
                그런데 이 때 주의가 필요합니다. 배열에 추가한다면 state.taskspush(action.task)를 사용하면 되겠지만 실제로 이 방버은 추천하지 않습니다(원칙2. 상태는 읽기전용이다 위반).
            </Paragraph>
            <Paragraph>따라서 이러한 경우에는 새로운 배열을 생성하는 concat, Object.assign, 스프레드 연산자 등을 사용하는 것이 좋습니다.</Paragraph>

            <SubTitls>1-3. 액션크리에이터를 정의합니다.</SubTitls>
            <Paragraph>
                액션크리에이터는 이름 그대로 액션을 생성하기 위한 함수입니다. 이를 만들어 두면 액션 테스트를 쉽게 할 수 있으며, 실제로 액션을 사용하는 경우에도 직감적으로 쉽게 사용할 수 있게 해줍니다.
            </Paragraph>
            <Paragraph>그럼 태스크를 추가하기 위한 액션을 생성하는 함수를 정의해봅시다.</Paragraph>
            <CodeBlock>
                <p>{"// index.js"}</p>
                <p>{"const addTask = (task) => ({"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"type: 'ADD_TASK',"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"payload: {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"task"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
                <p>{"});"}</p>
            </CodeBlock>
            <Paragraph>
                태스크로 추가하고 싶은 task를 매개변수로 받고, 액션 객체를 리턴하는 굉장히 간단한 함수입니다. 이후에 액션을 사용하는 경우 모두 이처럼 액션크리에이터로 만들고 사용합니다.
            </Paragraph>

            <SubTitls>1-4. 스토어를 생성합니다.</SubTitls>
            <Paragraph>리덕스는 createStore라는 함수를 가지고 있으며, 이를 사용해서 스토어를 생성합니다. 이렇게 만들어지는 스토어는 애플리케이션 내부에서 유일성을 갖게 됩니다.</Paragraph>
            <Paragraph>즉, 애플리케이션 전체에서 유일한 스토어를 사용해 애플리케이션 전체의 상태를 집약해서 관리하는 것입니다.</Paragraph>
            <CodeBlock>
                <p>{"// index.js"}</p>
                <p>{"import {createStore} from 'redux'"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>{"// taskReducer 정의(생략)"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>{"const store = createStore(tasksReducer)"}</p>
            </CodeBlock>

            <SubTitls>* createStore(reducer, [preloadedState], [enhancer])</SubTitls>
            <Paragraph>이 함수는 이름 그대로 스토어를 생성할 때 사용합니다. 스토어는 애플리케이션 전체의 상태 트리를 관리합니다.</Paragraph>
            <Paragraph>첫 번재 매개변수에는 리듀서를 전달합니다. 현재 예제에서는 tasksReducer를 전달하고 있습니다.</Paragraph>
            <Paragraph>두 번째 매개변수에는 스토어의 초깃값을 객체로 전달할 수 있습니다. 주로 서버사이드 또는 사용자 세션을 사용해서 미리 데이터를 저장하고 있는 경우에 사용합니다.</Paragraph>
            <Paragraph>세 번째 매개변수에는 스토어의 기능을 확장할 수 있게 해주는 서드파티 도구를 옵션으로 지정합니다.</Paragraph>
            <Paragraph>
                그리고 예로써 createStore 함수에 tasksReducer를 지정하면 스토어를 생성할 수 있습니다. 이렇게 만든 스토어에는 console.log()를 찍어보면 다음과 같은 4개의 메서드를 확인할 수 있습니다.
            </Paragraph>
            <CodeBlock>
                <p>dispatch</p>
                <p>subscribe</p>
                <p>getState</p>
                <p>replaceReducer</p>
            </CodeBlock>

            <SubTitls>1-5. 액션을 발행합니다.</SubTitls>
            <Paragraph>그럼 테스트로 dispatch 메서드를 사용해 액션을 발행해봅시다. 액션은 위의 (3)에서 봤던 액션크리에이터를 사용해서 생성합니다.</Paragraph>
            <CodeBlock>store.dispatch(addTask("스토어 공부하기"))</CodeBlock>
            <Paragraph>이렇게 하면 ADD_TASK라는 type을 가진 액션이 발행되어 리듀서에 의해 상태가 변화될 것입니다. 그 후에는 getState를 사용해서 스토어의 현재 상태를 확인할 수 있습니다.</Paragraph>
            <CodeBlock>
                <p>{"console.log(store.getState)"}</p>
                <p>{"// {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"// tasks: ['스토어 공부하기']"}</p>
                <p>{"// }"}</p>
            </CodeBlock>
            <Paragraph>이렇게 하면 tasks에 '스토어 공부하기'가 추가되었습니다.</Paragraph>

            <SubTitls>* subscribe</SubTitls>
            <Paragraph>추가로 스토어에는 subscribe라는 메서드가 있습니다. 이 메서드를 사용하면 스토어의 상태가 변경될 때 호출할 콜백 함수를 지정할 수 있습니다.</Paragraph>
            <Paragraph>
                즉, dispatcher로 스토어의 상태가 변화할 때 그러한 변화를 감시하는 역할을 할 수 있는 것입니다. 콜백 함수를 subscribe로 지정한 뒤 dispatch하면 어떻게 동작하는지 확인해봅시다.
            </Paragraph>
            <CodeBlock>
                <p>{"// index.js"}</p>
                <p>{"import {createStore} from 'redux'"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>{"// taskReducer 정의(생략)"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>{"const store = createStore(tasksReducer)"}</p>
                <p>{"function handleChange() {"}</p>
                <p>{"console.log(store.getState)"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"// {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// tasks: ['스토어 공부하기']"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"// }"}</p>
                <p>{"}"}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{"const unsubscribe = store.subscribe(handleChange)"}</p>
                <p>{"// unsubscribe()를 실행하면 해제됨"}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{"const addTask = (task) => ({"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"type: 'ADD_TASK',"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"payload: {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"task"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
                <p>{"});"}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{"console.log(store.getState())"}</p>
                <p>{"// {"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{"task : [ ]"}</p>
                <p>{"// }"}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{"store.dispatch(addTask('스토어 공부하기'))"}</p>
            </CodeBlock>
            <Paragraph>현재 코드에서는 handleChange 함수를 subscribe 했으므로 dispatch로 상태가 변화되는 시점에 handleChange 함수가 호출됩니다.</Paragraph>
            <Paragraph>dispatch 전에는 초기 상태로 tasks에 빈 배열이 들어갑니다. dispatch 후에는 콜백 함수로 handleChange가 호출되므로 상태가 변화합니다.</Paragraph>
            <Paragraph>또한 subscribe의 리턴 값으로 unsubscriber가 리턴됩니다. 이 함수를 호출하면 subscribe를 제거할 수 있습니다.</Paragraph>
            <Paragraph>
                지금까지는 예를 사용해서 설명했지만 실제로 리액트와 조합할 때는 react-redux라는 라이브러리를 사용해서 상태 변화를 리액트와 바인딩합니다.
            </Paragraph>
            <Paragraph>
            react-redux는 subscribe 관련 기능을 알아서 처리해주므로 스토어의 상태가 변화할 때 리액트의 뷰가 변경되는 간단한 흐름으로 바뀝니다.
            </Paragraph>

            <SubTitls />

            <Title>2. 파일을 기능별로 분리</Title>
            <Paragraph>
                지금까지 액션크리에이터, 스토어, 리듀서, 컴포넌트를 모두 파일 하나(index.js)에서 만들고 사용했습니다. 이러한 기능별로 파일을 분할하면 코드의 가독성이 좋아집니다. 디렉터리 구성을 다음과 같이 변경해봅시다.
            </Paragraph>
            <CodeBlock>
                <p>{"src/"}</p>
                <p>{"ㄴ index.js"}</p>
                <p>{"ㄴ components/"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"ㄴ TodoApp.js"}</p>
                <p>{"ㄴ actions.js"}</p>
                <p>{"ㄴ reducers.js"}</p>
                
            </CodeBlock>

            <SubTitls>2-1. 리듀서Reducers</SubTitls>
            <Paragraph>
                일단 리듀서부터 살펴봅시다. 실제적인 코드처럼 구성해보겠습니다. 리듀서는 각 타입이 어떠한 변화값을 가져오는지 정의하는 곳입니다.
            </Paragraph>
            <Paragraph><img alt="reducers" src={img01} /></Paragraph>

            <SubTitls>2-2. 액션Actions</SubTitls>
            <Paragraph>
                그 다음은 액션입니다. 리듀서가 각 타입별 변화값 정의가 메인이라면, 액션은 실제적인 데이터 변화가 이루어질 수 있게끔 커스텀 타입별 실행 함수를 따로 파일로 분리합니다.
            </Paragraph>
            <Paragraph><img alt="actions" src={img02} /></Paragraph>

            <SubTitls>2-3. 뷰View</SubTitls>
            <Paragraph>
                최종적인 렌더링을 담당하는 뷰입니다. 따로 컴포넌트 폴더를 만들고 해당 뷰와 관련된 코드를 TodoApp.js로 옮겼습니다.
            </Paragraph>
            <Paragraph><img alt="todoapp" src={img03} /></Paragraph>

            <SubTitls>2-4. index.js</SubTitls>
            <Paragraph>
                이러한 리듀서와 컴포넌트를 import해서 최종적인 src/index.js를 아래와 같이 구성합니다.
            </Paragraph>
            <Paragraph><img alt="index" src={img04} /></Paragraph>

            <SubTitls />

            <BottomNav children1={"/hecStudy01/study02/01_Basic"} children2={"/hecStudy01/study02/03_ReactRedux"} />
        </Layout>
    )
}

export default ReduxExample02
