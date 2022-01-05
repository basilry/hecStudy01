import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Main from "./page/Main";
import Basic from "./page/01_Basic";
import AtHtml from "./page/02_AtHtml";
import Quiz from "./page/03_Quiz";
import Control from "./page/04_Control";
import Final from "./page/Final";

function App() {
  // 일단.. 돔을 강의하자
  // 1. 돔의 기본개념
  // 2. html이 자바스크립트에서는 어떻게 표현되는가?
  // 퀴즈
  // q1. 자식 엘리먼트 찾기
  // q2. 부모 엘리먼트 찾기
  // q3. 돔 순회하기
  // 3. 돔 조작하기
  // 3-1. create
  // 3-2. append
  // 3-3. read
  // 3-4. update
  // 3-5. delete

  // 이 파일은 리엑트기반, 리엑트 라우터 돔으로 라우팅 처리,
  // 각 단원별로 파일을 구성해서 링크를 클릭하면 해당 내용들이 나오게끔 한다.

  return (
    // // <div>hello</div>
    // <div className="App">
    // <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/01_Basic" element={<Basic />} />
          <Route path="/02_AtHtml" element={<AtHtml />} />
          <Route path="/03_Quiz" element={<Quiz />} />
          <Route path="/04_Control" element={<Control />} />

          <Route path="/hecStudy01" element={<Main />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
