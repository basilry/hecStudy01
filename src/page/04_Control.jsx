import React from "react";
import BottomNav from "../components/BottomNav";
import CodeBlock from "../components/CodeBlock";
import Paragraph from "../components/Paragraph";
import SubTitls from "../components/SubTitls";
import Title from "../components/Title";

function Control() {
    return (
        <div>
            <Title>DOM 조작하기</Title>
            <Paragraph>
                document 객체에는 셀 수 없이 많은 속성과 메소드가 존재합니다.
                무엇부터 익혀야 할까요? 앞으로 여러분이 앞으로 어떤 종류의
                개발이나 컴퓨터 언어를 배우시더라도 우선은 CRUD 에 집중하셔야
                합니다. 물론 나중에는 이 핵심 이외에도 여러 trivia를 아셔야 하는
                경우가 있지만 CRUD를 먼저 이해하는 것이 새로운 언어를 가장
                빠르게 공부하는 방법입니다.
            </Paragraph>
            <Paragraph>
                document 객체를 통해서 HTML 엘리먼트를 만들고(CREATE),
                조회하고(READ), 갱신하고(UPDATE), 삭제하는(DELETE) 하는 방법을
                배워봅시다. DOM은 신기하게도, HTML에 적용(APPEND)하는 메소드가
                따로 있음으로 이것 또한 익혀야 합니다.
            </Paragraph>

            <SubTitls>1. CREATE - createElement</SubTitls>
            <Paragraph>
                HTML을 제어하는 방법 중 가장 기초적인 element 만드는 법을
                배우겠습니다. DOM을 활용한다는 의미는, document 객체의 여러
                속성과 메소드을 활용한다고 재정의할 수 있습니다. 한번 빈 화면을
                열고 개발자 도구 console에서 document 객체의 createElement
                메소드를 활용하여 div element를 만들어봅시다
            </Paragraph>
            <CodeBlock>{`document.createElement('div')`}</CodeBlock>
            <Paragraph>
                어떻게 활용할 수 있을까요? 우리는 이제 자바스크립트를 활용해서
                DOM을 활용할 수 있어야 합니다. 자바스크립트에서 어떤 작업의
                결과를 담으려면 어떻게 해야 할까요? 네, 바로 변수를 선언하고 그
                결과를 할당하면 되지요. 그러면 우리 div element에 이름을
                지어줍시다.
            </Paragraph>
            <CodeBlock>{`const tweetDiv = document.createElement('div')`}</CodeBlock>

            <SubTitls>2. APPEND - append, appendChild</SubTitls>
            <Paragraph>
                이제 우리가 DOM 구조와 연결되지 못한 이 tweetDiv 라는 녀석을
                붙여보겠습니다. 제목과 같은 append 라는 메소드를 사용해서 트윗을
                담고 있는 body 에 넣어보겠습니다.
            </Paragraph>
            <CodeBlock>{`document.body.append(tweetDiv)`}</CodeBlock>
            <Paragraph>
                아무것도 보이지는 않지만 이제 정말 HTML에 새로운 div가
                추가되었습니다. 개발자 콘솔의 Elements 콘솔에 가서 한번 내용을
                보세요
            </Paragraph>

            <SubTitls>3. READ - querySelector, querySelectorAll</SubTitls>
            <Paragraph>
                자바스크립트에서 변수의 값을 조회하기 위해서는 어떻게 했지요?
                네, 그냥 변수의 이름을 사용하면 조회할 수 있었습니다. 배열은
                index를 조회했고, 객체는 key를 조회하면 됬었죠. 그렇다면 DOM은?
                조금 특별한 방법을 사용해야 합니다. HTML을 사용할 때, 가장 눈에
                띄는 것이 무엇인가요? 네, tag와 id, class죠. 굳이 언급하지
                않아도 우리는 눈으로 보고 이게 무엇인지 구분할 수 있습니다.
            </Paragraph>
            <Paragraph>
                이 셀렉터를 활용하면 보다 효율적으로 DOM을 들여다볼 수 있습니다.
                querySelector 라는 녀석을 사용합시다. (querySelector는 한글로
                셀렉터를 기반으로 한 질문을 한다, 쿼리를 날린다라는 의미입니다.)
                '.tweet' 을 첫 번째 인자로 넣으면 tweet을 클레스 이름으로 가진
                모든 HTML 엘리먼트를 조회할 수 있습니다
            </Paragraph>
            <CodeBlock>{`const oneTweet = document.querySelector('.tweet')`}</CodeBlock>
            <Paragraph>
                음, 뭔가 이상하지 않나요? tweet이란 이름을 가진 클레스가
                여러개가 있는데, 하나만 가져왔습니다. 여러개를 가져오기 위해서는
                querySelectorAll 을 사용하시면 됩니다. 차이가 조금 이해가
                되시죠? 이렇게 조회해온 HTML 엘리먼트들은 배열과 유사하게
                for문을 사용하실 수 있습니다. 이런 '배열 아닌 배열'을 유사배열,
                배열형 객체 등 다양한 이름으로 부릅니다.
            </Paragraph>
            <CodeBlock>{`const tweets = document.querySelectorAll('.tweet')`}</CodeBlock>
            <Paragraph>
                querySelector와 querySelectorAll 만 아셔도 사실 대부분의 조회를
                하실 수 있습니다. 다만, 여러분이 아래와 같이 get으로 시작하는
                DOM 조회 메소드를 보게 되신다면, 비슷한 역할을 하는 오래된
                방식이라고만 이해하시면 됩니다. 혹은 여러분이 이전 브라우져
                (인터넷 익스플로러)의 호환성에 대응을 해야 한다면 이런 옛날
                방식을 사용하셔야 할 수도 있습니다. 알아만 둡시다.
            </Paragraph>

            <CodeBlock>{`const getOneTweet = document.getElementById('container')`}</CodeBlock>
            <CodeBlock>{`const queryOneTweet = document.querySelector('#container')`}</CodeBlock>
            <CodeBlock>{`console.log(getOneTweet === queryOneTweet) // true`}</CodeBlock>

            <Paragraph>
                이제 우리는 드디어 아까 생성했던 트윗을 넣을 수 있습니다.
                container의 맨 마지막 자식 엘리먼트로 tweetDiv를 추가했습니다!
                이제 정말 트윗이 원래 추가되어야 할 자리에 추가되었습니다.
            </Paragraph>

            <CodeBlock>{`const container = document.querySelector('#container')`}</CodeBlock>
            <CodeBlock>{`const tweetDiv = document.createElement('div')`}</CodeBlock>
            <CodeBlock>{`container.append(tweetDiv)`}</CodeBlock>

            <SubTitls>4. UPDATE - textContent, classList.add</SubTitls>
            <Paragraph>
                이제 만들고, 붙이고, 조회할 줄 아니까 뭐 더 할 필요 없겠네요?
                아닙니다. 안타깝게도 우리가 지금 배운 생성하는 방법은 실제
                사용하기는 많이 부족합니다. 텅 빈 div로는 아무것도 웹페이지에
                표현할 수 없으니까요
            </Paragraph>
            <CodeBlock>{`const oneDiv = document.createElement('div')`}</CodeBlock>
            <CodeBlock>{`console.log(oneDiv) // <div></div>`}</CodeBlock>

            <Paragraph>
                이제 좀 더 디테일한 표현을 하기 위해서 생성된 HTML 엘리먼트에
                조금 더 재미있는 작업을 해봅시다. 글자를 넣어볼까요?
            </Paragraph>
            <CodeBlock>{`oneDiv.textContent = 'dev';`}</CodeBlock>
            <CodeBlock>{`console.log(oneDiv) // <div>dev</div>`}</CodeBlock>

            <Paragraph>
                스타일이 적용될 수 있도록 class를 지정해봅시다.
            </Paragraph>
            <CodeBlock>{`oneDiv.classList.add('tweet')`}</CodeBlock>
            <CodeBlock>{`console.log(oneDiv) // <div class="tweet">dev</div>`}</CodeBlock>

            <Paragraph>이제 append로 container에 붙여봅시다.</Paragraph>
            <CodeBlock>{`const container = document.querySelector('#container')`}</CodeBlock>
            <CodeBlock>{`container.append(oneDiv)`}</CodeBlock>

            <SubTitls>5. DELETE - remove, removeChild</SubTitls>
            <Paragraph>
                이제 삭제하는 법에 대해서 배워봅시다. 삭제하는 방법 또한 여러
                방식이 있습니다. 우선 내가 해당 엘리먼트가 어디있는지 알고 있는
                경우에, 어떻게 삭제하는지 알아봅시다. 이전에 추가했던 tweetDiv를
                삭제해보겠습니다. remove 메소드를 활용하세요.
            </Paragraph>
            <CodeBlock>{`const container = document.querySelector('#container')`}</CodeBlock>
            <CodeBlock>{`const tweetDiv = document.createElement('div')`}</CodeBlock>
            <CodeBlock>{`container.append(tweetDiv)`}</CodeBlock>
            <CodeBlock>{`tweetDiv.remove() // 이렇게 append 했던 엘리먼트를 삭제할 수 있다.`}</CodeBlock>
            <Paragraph>
                그렇다면, 자식 엘리먼트를 지우는 방법은 어떻게 될까요? 가장
                간단한 방법은 innerHTML 을 활용하는 방법입니다. 컨테이너의 모든
                자식 엘리먼트를 지우기 위해서는 아래와 같이 입력하면 됩니다.
            </Paragraph>
            <CodeBlock>{`document.querySelector('#container').innerHTML = '';`}</CodeBlock>
            <Paragraph>
                이 방법은 분명 간편하고 편리한 방식임에는 분명하지만,
                innerHTML은 여러 보안상 문제를 가지고 있습니다. 메소드를
                활용해봅시다. removeChild 는 자식 엘리먼트를 지정해서 삭제하는
                메소드입니다. 모두 삭제하기 위해서, while문을 활용할 수
                있습니다. 자식 엘리먼트가 하나도 없을 때 까지 삭제한다는 의미의
                코드입니다.
            </Paragraph>
            <CodeBlock>{`const container = document.querySelector('#container');`}</CodeBlock>
            <CodeBlock>{`while (container.firstChild) { container.removeChild(container.firstChild); }`}</CodeBlock>
            <Paragraph>
                이렇게 지우면, 제목에 해당하는 H2 Tweet List까지 삭제하게
                되는데요, 이를 방지하기 위한 방법은 여러가지가 있습니다. 자식
                엘리먼트를 하나는 남기게 하면 되지 않을까요?
            </Paragraph>
            <CodeBlock>{`const container = document.querySelector('#container');`}</CodeBlock>
            <CodeBlock>{`while (container.children.length > 1) { container.removeChild(container.lastChild); }`}</CodeBlock>
            <Paragraph>
                또한 직접 일일히 엘리먼트 자체를 찾아서 지울수도 있습니다.
            </Paragraph>
            <CodeBlock>{`const tweets = document.querySelectorAll('.tweet')`}</CodeBlock>
            <CodeBlock>{`tweets.forEach(function(tweet){ tweet.remove(); })`}</CodeBlock>
            <Paragraph>or</Paragraph>
            <CodeBlock>{`for (let tweet of tweets){ tweet.remove() }`}</CodeBlock>

            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "25px",
                    fontWeight: "600",
                }}
            >
                <div onClick={() => window.scrollTo(0, 0)}>
                    <Link to="/03_Quiz">{`< 03_Quiz`}</Link>
                </div>
                <div onClick={() => window.scrollTo(0, 0)}>
                    <Link to="/">{`Main >`}</Link>
                </div>
            </div> */}
            <BottomNav children1={"03_Quiz"} children2={"Main"} />
        </div>
    );
}

export default Control;
