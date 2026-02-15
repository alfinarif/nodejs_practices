import React, {Component} from 'react';
import ListTable from "../components/read/ListTable.jsx";
import AppNavBar from "../components/common/AppNavBar.jsx";

class ReadPage extends Component {
    render() {
        return (
            <div>
                <AppNavBar/>
                <br/>
                <ListTable/>
            </div>
        );
    }
}

export default ReadPage;