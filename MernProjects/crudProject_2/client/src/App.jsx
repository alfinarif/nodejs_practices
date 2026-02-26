import React, {Component, Fragment} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReadPage from './pages/ReadPage.jsx';
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ReadPage/>}/>
                        <Route path="/create" element={<CreatePage/>}/>
                        <Route path="/update/:id" element={<UpdatePage/>}/>
                    </Routes>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;