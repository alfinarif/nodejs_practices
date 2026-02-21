import React, {Component, useEffect, useState} from 'react';
import {ReadProduct} from "../../APIServices/CRUDServices.js";
const ListTable = ()=>{
    let [dataList, setDataList] = useState([]);

    useEffect(()=>{

        ReadProduct()
            .then((result)=>{
                setDataList(result);
                console.log(result)
            })
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Product Unit Price</th>
                        <th>Product Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
        </div>
    );

}

export default ListTable;