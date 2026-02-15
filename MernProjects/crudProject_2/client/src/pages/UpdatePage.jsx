import React, {Component} from 'react';
import UpdateForm from "../components/update/UpdateForm.jsx";
import AppNavBar from "../components/common/AppNavBar.jsx";

class UpdatePage extends Component {
    render() {
        return (
            <div>
                <AppNavBar/>
                <br/>
                <UpdateForm/>
            </div>
        );
    }
}

export default UpdatePage;