import React from "react"
import Paragraph from "../../components/Paragraph"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import BottomNav from "../../components/ui/BottomNav"
import Layout from "../../components/ui/Layout"
import img01 from "../../img/study02/reduxthunk.jpeg"
import img02 from "../../img/study02/reduxsaga.png"

function Middleware02() {
    return (
        <Layout>
            <BottomNav children1={"/hecStudy01/study02/03_ReactRedux"} children2={"/hecStudy01/study02/Final"} />
            <SubTitls />

            <Title>미들웨어!</Title>
            <SubTitls>1. 개념</SubTitls>
            <Paragraph>
            미들웨어(영어: middleware)는 컴퓨터 제작 회사가 사용자의 특정한 요구대로 만들어 제공하는 프로그램으로, 운영 체제와 응용 소프트웨어의 중간에서 조정과 중개의 역할을 수행하는 소프트웨어입니다.
            </Paragraph>
            <Paragraph>
            응용 소프트웨어가 운영 체제로부터 제공받는 서비스 이외에 추가적으로 이용할 수 있는 서비스를 제공하는 컴퓨터 소프트웨어입니다. "소프트웨어 글루"(software glue)로 이야기됩니다.
            </Paragraph>
            <Paragraph>
            응용 소프트웨어는 유연하고 확장, 축소가 편리하여야 하며 이러한 장점을 충족하기에 개발자의 다른 기종 간 플랫폼을 다시 구축할 필요가 없어야 합니다. 
            </Paragraph>
            <Paragraph>
            이를테면 데이터베이스 시스템, 전자 통신 소프트웨어, 메시지 및 쿼리 처리 소프트웨어를 들 수 있습니다.
            </Paragraph>

            <SubTitls>2. Redux-Thunk</SubTitls>
            <Paragraph>
                <img alt="thunk" src={img01} style={{width: "500px"}} />
            </Paragraph>
            <Paragraph>
                객체가 아닌, 동기 또는 비동기 작업을 수행할 수 있는 함수를 말하며, thunk를 사용하려면 액션크리에이터는 객체가 아닌 이 함수를 반환해야 합니다.
            </Paragraph>
            <Paragraph>
                이는 store와의 상호작용을 위해 getState(), dispatch() 함수를 인자로 받습니다. 따라서 store의 상태에 접근하거나 또 다른 액션을 디스패치 하는 것이 가능합니다.
            </Paragraph>

            <SubTitls>3. Redux-Saga</SubTitls>
            <Paragraph>
                <img alt="saga" src={img02} style={{width: "500px"}} />
            </Paragraph>
            <Paragraph>
                리덕스 사가는 제너레이터(생성자)를 이용해 액션의 순수성이 보장되도록 합니다. 특히 이 제너레이터는 js에서 별도의 쓰레드를 fork하는 마법을 부리는 듯 합니다.
            </Paragraph>
            <Paragraph>
                즉, saga는 특별히 비동기 처리가 필요한 액션이 발생할 떄를 기다리다가 해당 액션이 dispatch되면 새로운 쓰레드를 fork 하고 새로운 쓰레드에서 필요한 비즈니스 로직들을 순서대로 처리해 갑니다.
            </Paragraph>

            <SubTitls />

            <BottomNav children1={"/hecStudy01/study02/03_ReactRedux"} children2={"/hecStudy01/study02/Final"} />
        </Layout>
    )
}

export default Middleware02
