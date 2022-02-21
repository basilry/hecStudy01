import React from "react"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import Layout from "../../components/ui/Layout"

function Final() {
    return (
        <Layout>
            <div>
                <Title>참고자료</Title>
                <SubTitls>
                    <a style={{textDecoration: "none", color: "white"}} href="https://blog.naver.com/basilry/222332673552">1. 바실리 블로그 내 DOM 자료</a>
                </SubTitls>
                <SubTitls>
                    <a style={{textDecoration: "none", color: "white"}} h href="https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction">2. MDN: DOM 전반적인 내용</a>
                </SubTitls>
                <SubTitls>
                    <a style={{textDecoration: "none", color: "white"}} h href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#dom_and_javascript">3. MDN : DOM과 자바스크립트의 차이</a>
                </SubTitls>
            </div>
        </Layout>
    )
}

export default Final
