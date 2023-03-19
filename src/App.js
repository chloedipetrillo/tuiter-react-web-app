import logo from './logo.svg';
import './App.css';
import './index.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import Nav from "./nav.js";

function App() {
    return (

        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index path="/*"
                           element={<Labs />}/>
                    <Route path="/hello"
                           element={<HelloWorld />}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;



