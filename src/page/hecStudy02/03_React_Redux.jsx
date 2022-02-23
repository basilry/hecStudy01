import React from "react"
import CodeBlock from "../../components/CodeBlock"
import Paragraph from "../../components/Paragraph"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import BottomNav from "../../components/ui/BottomNav"
import Layout from "../../components/ui/Layout"
import img01 from "../../img/study02/container.jpg"
import img02 from "../../img/study02/reactreduxtodo.jpg"
import img03 from "../../img/study02/reactreduxindex.jpg"

function ReactRedux02() {
    return (
        <Layout>
            <BottomNav children1={"/hecStudy01/study02/02_ReduxExample"} children2={"/hecStudy01/study02/04_Middleware"} />

            <SubTitls />

            <Title>react-redux</Title>
            <SubTitls>- 지금까지는...?</SubTitls>
            <Paragraph>
                지금까지는 스토어의 상태 변화에 대응해서 직접 뷰를 렌더링하는 방법을 소개했습니다. 하지만 실제로 애플리케이션을 만들 때 뷰가 여러 단계의 구조를 가지고 있다면 해당 부분의 뷰만 찾아 다시
                렌더링 하는 것이 굉장히 힘듭니다.
            </Paragraph>
            <Paragraph>따라서 리액트와 리덕스의 결합을 쉽게 만들어주는 라이브러리로 react-redux를 살펴보겠습니다. 이는 리덕스에서 공식적으로 발표한 리액트 연동 라이브러리입니다.</Paragraph>

            <SubTitls>1. 설치</SubTitls>
            <CodeBlock>npm install --save react-redux</CodeBlock>

            <SubTitls>2. 컨테이너 컴포넌트와 프레젠테이셔널 컴포넌트</SubTitls>
            <Paragraph>react-redux를 구체적으로 들어가기에 앞서, 컨테이너 컴포넌트(Container Component)와 프레젠테이셔널 컴포넌트(Presentational Component)에 대해 설명하겠습니다.</Paragraph>
            <Paragraph>
                간단하게 말해, 리액트는 뷰를 다루는 라이브러리입니다. 그리고 이러한 뷰는 스토어와 액션과 느슨하게 결합하는 것이 좋습니다. 그렇게 해야 컴포넌트 자체를 테스트하기도 쉽고 코드의 가독성도
                향상됩니다.
            </Paragraph>
            <Paragraph>컨테이너 컴포넌트는 리액트의 컴포넌트를 래핑한 컴포넌트이며, 리덕스의 스토어와 액션을 받아 리액트 컴포넌트의 속성으로 전달하는 역할을 담당합니다.</Paragraph>
            <Paragraph>컨테이너 컴포넌트는 리액트와 리덕스의 다리 역할만 해야 합니다. 따라서 여기에 jsx를 작성하는 것은 잘못된 것입니다.</Paragraph>
            <Paragraph>반면 프레젠테이셔널 컴포넌트는 리덕스에 의존성을 가지지 않는 순수한 리액트 컴포넌트라고 할 수 있겠습니다.</Paragraph>


            <SubTitls>3. react-redux가 하는 것</SubTitls>
            <Paragraph>
                react-redux는 크게 구분해서 다음과 같은 두 가지 기능을 가지고 있습니다.

                <SubTitls>3-1. Provider</SubTitls>
                <Paragraph>
                    dispatch는 스토어에 들어있는 메서드이므로, 리액트 컴포넌트에서 dispatch 메서드를 사용하려면 스토어가 필요합니다.
                </Paragraph>
                <Paragraph>
                하지만 dispatch를 컴포넌트 전체에서 사용하고자 스토어를 최상위부터 차근차근 전달한다면 코드가 굉장히 복잡해질 것입니다(프롭스 드릴링Props Drilling).
                </Paragraph>
                <Paragraph>
                이러한 문제는 Provider의 connect라는 함수로 쉽게 해결할 수 있습니다.
                </Paragraph>
                <CodeBlock>
                    <p>{"ReactDOM.render("}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{"<Provider store={store}>"}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<MyRootComponent />"}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{"</Provider>"}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{"document.getElementById('root')"}</p>
                    <p>{")"}</p>
                </CodeBlock>
                <Paragraph>
                    최상위 컴포넌트를 provider 태그로 래핑하고 속성을 사용해 스토어를 전달합니다. 이렇게 코드를 작성하면 provider는 내부적으로 리액트의 컨텍스트를 사용해 스토어를 저장합니다.
                </Paragraph>

                <SubTitls>3-2. connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])</SubTitls>
                <Paragraph>
                    connect는 리액트의 context에 저장되어있는 스토어를 특정 컴포넌트에 전달하는 역할을 합니다. 스토어가 있으면 getState를 사용해 상태를 추출할 수 있습니다. 따라서 액션을 디스패치할 수 있게 됩니다.

                    <SubTitls>(1) mapStateToProps(state, [ownProps])</SubTitls>
                    <Paragraph>
                        connect의 첫 번째 매개변수입니다. 여기서는 스토어 내부에 있는 상태 중 필요한 것을 컴포넌트의 속성에 할당하기 위한 함수를 지정합니다.
                    </Paragraph>
                    <Paragraph>
                    그리고 mapStateToProps가 리턴하는 객체는 connect 대상 컴포넌트의 속성으로 전달됩니다.
                    </Paragraph>

                    <SubTitls>(2) mapDispatchToProps(dispatch, [ownProps])</SubTitls>
                    <Paragraph>
                        connect의 두 번째 매개변수입니다. 액션의 디스패치 처리를 이 함수 내부에 넣어서 컴포넌트에서 디스패치하는 상황이 일어나지 않게 은폐합니다.
                    </Paragraph>
                    <Paragraph>
                    즉, mapDispatchToProps를 통해 전달되는 dispatch 메서드가 액션을 발행하는 것이고, connect의 대상 컴포넌트에서 dispatch를 직접적으로 실행할 필요가 없다는 뜻입니다.
                    </Paragraph>

                    <SubTitls>(3) mergeProps(stateProps, dispatchProps, ownProps)</SubTitls>
                    <Paragraph>
                        mergeProps는 mapStateToProps와 mapDispatchToProps를 통해 전달된 값을 머지(merge)해서 컴포넌트에 전달하기 위한 함수입니다.
                    </Paragraph>
                    <Paragraph>
                    이를 변경하면 각 속성을 원하는 형태로 조합해서 컴포넌트에 넘길 수 있습니다. 그리고 컴포넌트를 통하지 않고도 상태를 매개변수로 받을 수 있습니다.
                    </Paragraph>


                </Paragraph>
                
            </Paragraph>

            
            <SubTitls>4. 아까의 예제에 react-redux 도입</SubTitls>
            <Paragraph>
                아까 전에 만들었던 구성에 파일을 하나 추가합니다.
            </Paragraph>
            <CodeBlock>
                <p>{"src/"}</p>
                <p>{"ㄴ index.js"}</p>
                <p>{"ㄴ container.js <==== 요놈"}</p>    
                <p>{"ㄴ components/"}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"ㄴ TodoApp.js"}</p>
                <p>{"ㄴ actions.js"}</p>
                <p>{"ㄴ reducers.js"}</p>
            </CodeBlock>
            <Paragraph>
                코드 구성은 아래와 같습니다. 굳이 actions나 reducers를 변경할 필요 없이, container 내부에 TodoApp 컴포넌트와 리덕스의 connect와 관련된 작업을 하면 됩니다.
            </Paragraph>
            <Paragraph>
            <img alt="container" src={img01} />
            </Paragraph>
            <Paragraph>
                즉, 위의 예에서는..
                <Paragraph>- mapStateToProps로 스토어에 있는 task, tasks라는 상태를 속성에 전달</Paragraph>
                <Paragraph>- mapDispatchToProps로 해당 액션을 디스패치하는 함수를 속성에 전달</Paragraph>
                과 같은 두 가지의 기능을 수행합니다.
            </Paragraph>
            <Paragraph>
                따라서 TodoApp 컴포넌트에는 속성으로 다음과 같은 4가지가 전달됩니다.
                <Paragraph>- task: input 입력 양식에 입력된 태스크</Paragraph>
                <Paragraph>- tasks: 태스크 배열</Paragraph>
                <Paragraph>- addTask: 태스크를 추가하는 함수</Paragraph>
                <Paragraph>- inputTask: 태스크를 입력하는 함수</Paragraph>
            </Paragraph>

            <SubTitls/>
            <Paragraph>
                이제 container는 완료했으니 TodoApp 컴포넌트를 수정합니다.
            </Paragraph>
            <Paragraph>
                <img alt="todoappreactredux" src={img02} />
            </Paragraph>
            <Paragraph>
                지금까지는 스토어가 속성을 통해 전달됐고 속성에서 상태를 추출했지만, 이번에는 container에서 가공된 객체가 속성으로 전달됐습니다.
            </Paragraph>
            <Paragraph>
                또한 액션크리에이터 처리와 액션 디스패치 처리도 container 내부에서 하고 있으므로 컴포넌트는 속성으로 전달된 inputTask와 addTask를 호출하기만 하면 되도록 코드가 바뀌었습니다.
            </Paragraph>
            <Paragraph>
                이처럼 컴포넌트의 리덕스 의존이 사라지게 할 수 있고, 이렇게 되면 코드의 재사용성이 크게 올라갑니다.
            </Paragraph>

            <SubTitls/>
            <Paragraph>
                마지막으로 index.js를 수정합니다.
            </Paragraph>
            <Paragraph>
                <img alt="reactreduxindex" src={img03} />
            </Paragraph>
            <Paragraph>
                수정한 부분은 다음과 같은 세 부분입니다.
                <Paragraph>- Provider를 사용해 스토어를 속성에 전달</Paragraph>
                <Paragraph>- 컴포넌트의 import 경로를 container로 변경</Paragraph>
                <Paragraph>- 스토어의 subscribe로 컴포넌트를 다시 렌더링하던 부분을 제거</Paragraph>
            </Paragraph>
            <Paragraph>
                이렇게 기존 예제에 react-redux를 도입해 보았습니다.
            </Paragraph>
            

            <SubTitls />

            <BottomNav children1={"/hecStudy01/study02/02_ReduxExample"} children2={"/hecStudy01/study02/04_Middleware"} />
        </Layout>
    )
}

export default ReactRedux02
