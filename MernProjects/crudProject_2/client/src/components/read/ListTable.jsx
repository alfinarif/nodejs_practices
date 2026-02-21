import React, {Component, useEffect, useState} from 'react';
import {ReadProduct} from "../../APIServices/CRUDServices.js";
import FullScreenLoader from "../common/FullScreenLoader.jsx";
const ListTable = ()=>{
    let [dataList, setDataList] = useState([]);

    useEffect(()=>{

        ReadProduct()
            .then((result)=>{
                setDataList(result);
                console.log(result)
            })
    }, []);


    if(dataList.length >0){ // if statement
        return (
            <div>
                <table className="table table-bordered">
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
                    <tbody>
                    {
                        dataList.map((item, i)=>{
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td><img className="list-image" src={item.img}/></td>
                                    <td>{item.quantity}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>{item.totalPrice}</td>
                                    <td>
                                        <button className="mx-1 btn btn-primary">Edit</button>

                                        <button className="mx-1 btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    } else { // else statement
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }



}

export default ListTable;