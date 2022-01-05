import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import Paragraph from "../components/Paragraph";
import SubTitls from "../components/SubTitls";
import Title from "../components/Title";

function Quiz() {
    return (
        <div>
            <Title>Quiz!!</Title>

            <img
                src="/domHtml.png"
                style={{ margin: "20px", width: "500px" }}
            />

            <SubTitls>Q1. 자식 엘리먼트 찾기</SubTitls>
            <Paragraph>
                body 엘리먼트의 자식 엘리먼트는 총 3개입니다. id가 nav,
                news-contents, footer 인 3가지 엘리먼트입니다.
            </Paragraph>
            <Paragraph>
                그렇다면, 컴퓨터에게는 어떻게 인식시킬까요? 자바스크립트에서
                DOM은 document 객체에 구현되어 있습니다. 브라우저에서 작동되는
                자바스크립트 코드에서는 어디에서나 document 객체를 조회할 수
                있습니다. 한번, body를 찾아보겠습니다.
            </Paragraph>

            <img style={{ margin: "20px" }} src="/consoleLogBody.png" />

            <Paragraph>
                참고로 DOM 구조를 조회하기 위해서는 console.dir이 유용합니다.
                console.log와 달리 DOM을 객체의 모습으로 보여주는 친구입니다.
            </Paragraph>

            <Paragraph>
                어찌되었건, document.body를 조회해보니, 내가 모르는 것들이 정말
                많이 보입니다. 생각해보면 HTML 엘리먼트에 지정할 수 있었던
                다양한 속성이 있던 것이 기억납니다. 그 많은 속성에 미리 이름을
                지어두었다고 생각하시면 됩니다. 우리가 원하는 자식 엘리먼트를
                찾아봅시다. 이번에는 힌트를 드리겠습니다. children을 찾아볼까요?
            </Paragraph>

            <img style={{ margin: "20px" }} src="/consoleLogBodyChd.png" />

            <Paragraph>
                밑으로 쭉 내려보시면 children 속성을 찾으실 수 있을 겁니다.
                신기하게도 children에 nav, news-contents, footer 가 자식으로
                있는 것을 보실 수 있습니다. 물론 document.body.children 으로
                조회하실 수도 있습니다.
            </Paragraph>

            <img style={{ margin: "20px" }} src="/documentBodyChd.png" />

            <SubTitls>Q2. 부모 엘리먼트 찾기</SubTitls>
            <Paragraph>
                news-contents 는 body 의 자식 엘리먼트입니다. 그렇다면, 큰 고민
                없이 우리는 body가 news-contents 엘리먼트의 부모 엘리먼트라는
                것을 알 수 있습니다. 자바스크립트에서도 확인해봅시다.
                news-contents 를 조회하려면, document.body.children 의 첫 번째
                엘리먼트를 조회해야 합니다.
            </Paragraph>

            <img style={{ margin: "20px" }} src="/consoleLogParent.png" />

            <Paragraph>
                매번 document.body 로부터 찾아가는 것은 정말 번거로운 일입니다.
                따로 변수 선언을 해서 이 정보를 저장해둡시다. 변수 newsContents
                를 따로 선언하여 우리가 찾은 news-contents 엘리먼트를
                할당합시다.
            </Paragraph>

            <img style={{ margin: "20px" }} src="/alias.png" />

            <Paragraph>
                결국 newsContents의 부모 엘리먼트를 가리키고 있는 속성을
                찾아봅시다.
            </Paragraph>

            <SubTitls>Q3. DOM 순회하기</SubTitls>
            <Paragraph>
                DOM 구조의 특성을 한번 되돌아보면, 뭔가 이런 조직도가 생각나지
                않으시나요? body가 가장 상위에 있고, 아래에 여러 구성요소가
                부모-자식 관계를 가지고 있는 것을 그려보면 아래와 비슷한 구조가
                만들어집니다.
            </Paragraph>

            <img style={{ margin: "20px" }} src="/tree.png" />

            <Paragraph>
                이런 자료 구조를 컴퓨터 공학에서는 트리 구조라고 합니다. 가장 큰
                특징은, 부모가 자식을 여러개 가지고, 부모가 하나인 구조가 계속
                반복된다는 점입니다. 즉, 부모가 가진 하나, 혹은 여러개의 자식
                엘리먼트를 조회하는 코드를 계속 반복해서 실행하게 될 것입니다.
            </Paragraph>

            <img
                style={{
                    margin: "20px",
                    width: "700px",
                    marginBottom: "100px",
                }}
                src="pseudoCode.png"
            />
            <BottomNav children1={"02_AtHtml"} children2={"04_Control"} />
        </div>
    );
}

export default Quiz;
