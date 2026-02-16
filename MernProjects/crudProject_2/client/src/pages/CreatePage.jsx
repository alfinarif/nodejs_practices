import React, {Component} from 'react';
import CreateForm from "../components/create/CreateForm.jsx";
import AppNavBar from "../components/common/AppNavBar.jsx";
import { Toaster } from 'react-hot-toast';
class CreatePage extends Component {
    render() {
        return (
            <div>
                <Toaster/>
                <AppNavBar/>

                <br/>
                <CreateForm/>
            </div>
        );
    }
}

export default CreatePage;