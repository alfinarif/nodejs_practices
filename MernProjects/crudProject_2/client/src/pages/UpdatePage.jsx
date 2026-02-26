
import {useParams} from "react-router-dom";
import UpdateForm from "../components/update/UpdateForm.jsx";
import AppNavBar from "../components/common/AppNavBar.jsx";

const UpdatePage = ()=> {
    const { id } = useParams();

        return (
            <div>
                <AppNavBar/>
                <br/>
                <UpdateForm id={id}/>
            </div>
        );

}

export default UpdatePage;