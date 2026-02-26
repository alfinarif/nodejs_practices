import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const UpdateForm = ()=> {

    const { id } = useParams();

    useEffect(()=>{
        alert(id);
    })

        return (
            <div>
                <h1>update form</h1>
            </div>
        );
}

export default UpdateForm;