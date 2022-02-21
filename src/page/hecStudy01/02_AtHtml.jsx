import React from "react"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import BottomNav from "../../components/ui/BottomNav"
import Layout from "../../components/ui/Layout"
import img01 from "../../img/domHtml.png"

function AtHtml() {
    return (
        <Layout>
            <div>
                <Title>HTML이 JavaScript에서 표현되는 방식</Title>

                <SubTitls>* 위와 같은 엘리먼트 구조에서 아래의 질문에 대답을 해보세요</SubTitls>

                <img src={img01} style={{ margin: "20px", width: "700px" }} alt="ele" />

                <SubTitls>질문1</SubTitls>
                <Paragraph>
                    <div style={{ marginBottom: "50px" }}>-body 엘리먼트의 자식 엘리먼트(element)는 총 몇 개인가요?</div>
                </Paragraph>

                <SubTitls>질문2</SubTitls>
                <Paragraph>
                    <div style={{ marginBottom: "50px" }}>-class의 이름이 news-contents 인 div 엘리먼트의 부모 엘리먼트는 무엇인가요?</div>
                </Paragraph>

                <SubTitls>질문3</SubTitls>
                <Paragraph>
                    <div style={{ marginBottom: "100px" }}>
                        -id의 이름이 nav인 div엘리먼트 를 포함해서, 모든 자식 엘리먼트의 class 이름을 console.log를 사용하여 확인하려면 어떻게 해야 할지 수도코드(pseudocode)를 작성해주세요
                    </div>
                </Paragraph>
                <BottomNav children1={"hecStudy01/01_Basic"} children2={"hecStudy01/03_Quiz"} />
            </div>
        </Layout>
    )
}

export default AtHtml
