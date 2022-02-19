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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hecStudy01/*" element={<Hec01Router />}>
                  <Route path="Main" element={<Main />} />
                    <Route path="01_Basic" element={<Basic />} />
                    <Route path="02_AtHtml" element={<AtHtml />} />
                    <Route path="03_Quiz" element={<Quiz />} />
                    <Route path="04_Control" element={<Control />} />
                    <Route path="Final" element={<Final />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
