import "./style/App.css"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Home from "./page/Home"
import Hec01Router from "./page/hecStudy01/Hec01Router"
import Basic from "./page/hecStudy01/01_Basic"
import AtHtml from "./page/hecStudy01/02_AtHtml"
import Quiz from "./page/hecStudy01/03_Quiz"
import Control from "./page/hecStudy01/04_Control"
import Final from "./page/hecStudy01/Final"
import Main from "./page/hecStudy01/Main"
import Hec02Rotuer from "./page/hecStudy02/Hec02Rotuer"
import Main02 from "./page/hecStudy02/Main02"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/hecStudy01" element={<Home />} />
                <Route exact path="/hecStudy01/study01" element={<Hec01Router />} />
                <Route exact path="/hecStudy01/study01/Main" element={<Main />} />
                <Route exact path="/hecStudy01/study01/01_Basic" element={<Basic />} />
                <Route exact path="/hecStudy01/study01/02_AtHtml" element={<AtHtml />} />
                <Route exact path="/hecStudy01/study01/03_Quiz" element={<Quiz />} />
                <Route exact path="/hecStudy01/study01/04_Control" element={<Control />} />
                <Route exact path="/hecStudy01/study01/Final" element={<Final />} />
                <Route exact path="/hecStudy01/study02" element={<Hec02Rotuer />} />
                <Route exact path="/hecStudy01/study02/Main" element={<Main02 />} />
            </Routes>
        </Router>
    )
}

export default App
