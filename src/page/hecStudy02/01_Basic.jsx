import React from "react"
import Paragraph from "../../components/Paragraph"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import BottomNav from "../../components/ui/BottomNav"
import Layout from "../../components/ui/Layout"
import img01 from "../../img/study02/ReduxLogo.jpg"
import img02 from "../../img/study02/reduxFlow.jpg"

function Basic02() {
    return (
        <Layout>
            <BottomNav children1={"/hecStudy01/study02/Main"} children2={"/hecStudy01/study02/02_ReduxExample"} />

            <SubTitls />

            <Title>Intro. Redux에 대하여</Title>

            <SubTitls>* Redux의 전체적인 개념 조감</SubTitls>
            <Paragraph>
            <img alt="reduxlogo" src={img01} style={{  width: "1000px" }} />
            </Paragraph>

            <Paragraph>
                <p>
                    클라이언트 사이드가 복잡해지면서 MVC(Model, View, Contorller), MVVM(Model, View, ViewModel)과 같은 개념이 만들어 졌습니다. 이러한 패턴들의 기본은 외관(View)과 데이터를 분리하는
                    것입니다.
                </p>
            </Paragraph>
            <Paragraph>
                제이쿼리를 사용해 애플리케이션을 만들던 시대에는 저번에 우리가 알아봤던 DOM에 데이터를 직접 집어 넣었습니다. 예를들어 체크박스의 체크 상태는 DOM을 직접 확인해야만 알아낼 수 있었습니다.
                그러다가 체크박스의 체크 상태를 JSON으로 관리하게 되었고, 해당 값을 보고 체크 상태를 직접 변경하게 만듦으로 외형과 데이터를 분리할 수 있게 되었습니다
            </Paragraph>
            <Paragraph>
                하지만 애플리케이션이 커지고 로직이 복잡해지면서, 모델과 뷰, 모델끼리의 연결이 굉장히 복잡해져 데이터가 어떤 식으로 연결되는지 자체를 이해하기 힘들어지는 부작용이 발생했습니다.
            </Paragraph>
            <Paragraph>
                그래서 등장한 것이 바로 플럭스(Flux)라는 개념입니다. 플럭스는 아키텍처의 일종이며, 굉장히 많은 구현체가 있습니다. 플럭스는 사용자 입력을 기반으로 액션(Action)을 만들고 액션을
                디스패치(Dispatch)해서 스토어(Store)에 저장한 뒤 뷰에 반영하는 흐름으로 애플리케이션을 만드는 아키텍쳐입니다. 이렇게 애플리케이션을 구현하면 데이터가 한 방향으로만 흐르게 되므로
                애플리케이션이 굉장히 간단해집니다.
            </Paragraph>

            <SubTitls />

            <Title>1. 플럭스(Flux)의 구성요소</Title>
            <Paragraph><img alt="reduxflow" src={img02} /></Paragraph>
            <Paragraph>
                플럭스는 아키첵처의 이름이지만 페이스북에서 'Flux'라는 이름으로 플럭스 아키텍처를 구현한 구현체를 의미하기도 합니다. 크게 플럭스의 구성요소는 View, Action, Dispatcher, Store로 나뉩니다.
            </Paragraph>

            <SubTitls>1-1. 뷰(View)</SubTitls>
            <Paragraph>
                뷰는 리액트 컴포넌트로 생각하면 됩니다. 사용자가 뷰에 어떤 조작을 하면 해당 조작에 해당하는 액션을 생성합니다.
            </Paragraph>

            <SubTitls>1-2. 액션(Action)</SubTitls>
            <Paragraph>
                액션은 단순한 객체입니다. 단순히 어떤 행동을 할지를 나타내는 객체입니다. "상품을 카트에 추가한다" 또는 "상품을 구입한다"라는 사용자 조작 등이 액션입니다. 또한 "대화상자를 출력한다"나 "캐시하고 있는 데이터를 초기화한다"같은 시스템적인 동작도 액션입니다. 액션을 디스패치(Dispatch)하면 액션이 스토어로 전달됩니다.
            </Paragraph>
            
            <SubTitls>1-3. 디스패처(Dispatcher)</SubTitls>
            <Paragraph>
                디스패치는 모든 데이터의 흐름을 관리합니다. 하지만 디스패처 자체는 굉장히 단순한 EventEmitter이며, 디스패치된 데이터는 스토어로 전달됩니다. 디스패처를 통해 액션이 스토어로 전달되다고 생각하면 됩니다.
            </Paragraph>

            <SubTitls>1-4. 스토어(Store)</SubTitls>
            <Paragraph>
                스토어는 애플리케이션의 상태와 로직을 저장하는 장소입니다. 스토어는 MVC에서 모델과 비슷한 것이라고 생각하면 됩니다. 애플리켕시녀 자체 도메인에서 상태를 관리할 수 있다는 것이 특징입니다. 디스패처를 사용해서 전달된 액션을 받고, 이를 기반으로 애플리케이션의 상태를 변화시킵니다.
            </Paragraph>

            <SubTitls />

            <Title>2. 리덕스 3원칙</Title>

            <SubTitls>2-1. 원칙 1) 진실은 하나의 소스로부터</SubTitls>
            <Paragraph>
                애플리케이션의 모든 상태를 거대한 하나의 객체로 관리합니다. 따라서 애플리케이션의 디버깅과 테스트를 쉽게 할 수 있습니다. 또한 모든 곳에서 필요한 상태를 참조할 수 있으므로 애플리케이션 구현도 간단해집니다.
            </Paragraph>

            <SubTitls>2-2. 원칙 2) 상태는 읽기 전용이다</SubTitls>
            <Paragraph>
                컴포넌트에서 애플리케이션의 상태를 참조할 수는 있지만 변경해서는 안됩니다. 액션(Action: 어떤 동작을 했는지를 나타내는 단순한 객체)을  디스패치(Dispatch: 발행)해야만 애플리케이션의 상태를 변경할 수 있습니다. 이렇게 해야 데이터의 흐름이 한 방향으로만 흐르게 만들 수 있습니다. 따라서 애플리케이션이 복잡해지는 부작용 등을 막을 수 있습니다.
            </Paragraph>

            <SubTitls>2-3. 원칙 3) 변화는 순수 함수로 이뤄져야 한다</SubTitls>
            <Paragraph>
                상태 변경은 부작용이 없는 순수 함수(Pure Function)로 합니다. 순수 함수란 무엇일까요? 순수 함수는 "같은 입력 값을 넣으면 같은 출력 값을 내는 함수"를 의미합니다. 리덕스는 액션을 입력으로 받고, 이로 인해 변화한 상태를 출력으로 봅니다. 그리고 이를 수행하는 순수 함수가 바로 리듀서(Reducer)입니다.
            </Paragraph>

            <SubTitls />

            <BottomNav children1={"/hecStudy01/study02/Main"} children2={"/hecStudy01/study02/02_ReduxExample"} />
        </Layout>
    )
}

export default Basic02
