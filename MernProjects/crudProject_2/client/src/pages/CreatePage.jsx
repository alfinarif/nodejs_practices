import React, {Component} from 'react';
import CreateForm from "../components/create/CreateForm.jsx";
import AppNavBar from "../components/common/AppNavBar.jsx";

class CreatePage extends Component {
    render() {
        return (
            <div>
                <AppNavBar/>

                <br/>
                <CreateForm/>
            </div>
        );
    }
}

export default CreatePage;