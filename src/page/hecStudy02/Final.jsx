import React from "react"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import BottomNav from "../../components/ui/BottomNav"
import Layout from "../../components/ui/Layout"

function Final02() {
    return (
        <Layout>
            <BottomNav children1={"/hecStudy01/study02/04_Middleware"} children2={"/hecStudy01/study02/Main"} />
            <SubTitls />
            <div>
                <Title>참고자료</Title>

                <SubTitls>
                    <a style={{ textDecoration: "none", color: "white" }} href="https://blog.naver.com/basilry/222354428939">
                        1. 바실리 블로그 내 Redux 개념글
                    </a>
                </SubTitls>
                <SubTitls>
                    <a style={{ textDecoration: "none", color: "white" }} href="https://it-eldorado.tistory.com/131">
                        2. 미들웨어 참고자료 블로그 - 개념 나열식
                    </a>
                </SubTitls>
                <SubTitls>
                    <a style={{ textDecoration: "none", color: "white" }} href="https://min9nim.vercel.app/2020-04-23-redux-saga/">
                        3. 미들웨어 참고자료 블로그 - 스토리 진행식
                    </a>
                </SubTitls>
                <SubTitls>* 참고서적 : 모던 리액트/리덕스 프로그래밍(야나이 히로유키 외, 위키북스)</SubTitls>
            </div>
            <SubTitls />

            <BottomNav children1={"/hecStudy01/study02/04_Middleware"} children2={"/hecStudy01/study02/Main"} />
        </Layout>
    )
}

export default Final02
