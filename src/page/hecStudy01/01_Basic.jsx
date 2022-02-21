import React from "react"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import BottomNav from "../../components/ui/BottomNav"
import Layout from "../../components/ui/Layout"
import img01 from "../../img/domImg.png"

function Basic() {
    return (
        <Layout>
            <div>
                <Title>Intro. 여러분, DOM에 대해 들어보셨는지요..</Title>

                <SubTitls>* DOM의 기본적인 구조 형태</SubTitls>
                <img alt="hello" src={img01} style={{ margin: "20px" }} />
                <Paragraph>
                    <p
                        style={{
                            color: "red",
                            display: "inline-block",
                            margin: 0,
                            fontWeight: "600",
                        }}
                    >
                        DOM은 Document Object Model의 약자
                    </p>
                    로, HTML(Document)에 접근하여 Object(JavaScript Object)처럼 HTML을 조작(Manipulation)할 수 있는 Model이라는 의미를 가지고 있습니다. 즉, 여러분이 자바스크립트를 사용하는 방법을 알고
                    있으면 DOM을 활용하여 HTML을 조작할 수 있다는 의미입니다. 다시말해, 자바스크립트는 이 구조를 잘 활용하여 HTML로 구성된 웹 페이지를 작동하게 만들 수 있습니다.
                </Paragraph>
                <Paragraph>
                    즉, 우리가 헥톤프로젝트에 입사한 이후부터 지금까지 쭉 가지고 업무를 진행해온 Next.js는 React의 프레임워크이고, React는 JavaScript기반으로 만들어진 라이브러리로써 DOM을
                    가상(Virutal)으로 형성하여 보다 빠르고 편리하게 코드작성을 할 수 있도록 구성된 기술 스택입니다.
                </Paragraph>
                <div
                    style={{
                        margin: "20px",
                        fontSize: "18px",
                        marginBottom: "100px",
                    }}
                >
                    결과적으로 Next.js에서 사용되는 근본적인 형태 자체가{" "}
                    <p
                        style={{
                            color: "red",
                            display: "inline-block",
                            margin: 0,
                            fontWeight: "600",
                        }}
                    >
                        "DOM"
                    </p>
                    이라는 것이지요!
                </div>
                <BottomNav children1={"/hecStudy01/study01/Main"} children2={"/hecStudy01/study01/02_AtHtml"} />
            </div>
        </Layout>
    )
}

export default Basic
