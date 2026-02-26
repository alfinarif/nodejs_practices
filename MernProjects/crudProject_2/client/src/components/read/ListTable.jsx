import React, {Component, useEffect, useState} from 'react';
import {DeleteProduct, ReadProduct} from "../../APIServices/CRUDServices.js";
import FullScreenLoader from "../common/FullScreenLoader.jsx";
import {errorToast, successToast} from "../../helpers/ValidationHelper.js";


const ListTable = ()=>{
    let [dataList, setDataList] = useState([]);
    const [currentComponent, refreshComponent] = useState(0);

    useEffect(()=>{

        ReadProduct()
            .then((result)=>{
                setDataList(result);
            })
    }, [currentComponent]);


    const deleteProduct = (id)=>{
        DeleteProduct(id)
            .then((result)=>{
                if(result === true){
                    successToast("Product deleted successfully");
                    refreshComponent(prevFlag => prevFlag + 1);
                }else {
                    errorToast("Request failed try again!")
                }
            })
    };

    const updateProduct = (id)=>{
        alert(id);
    }


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
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td><img className="list-image" src={item.img}/></td>
                                    <td>{item.quantity}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>{item.totalPrice}</td>
                                    <td>
                                        <button onClick={updateProduct.bind(this, item._id)} className="mx-1 btn btn-primary">Edit</button>

                                        <button onClick={deleteProduct.bind(this, item._id)} className="mx-1 btn btn-danger">Delete</button>
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