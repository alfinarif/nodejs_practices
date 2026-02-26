import React, {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import FullScreenLoader from "../common/FullScreenLoader.jsx";
import {errorToast, isEmpty, successToast} from "../../helpers/ValidationHelper.js";
import {CreateProduct, ReadProductById, UpdateProduct} from "../../APIServices/CRUDServices.js";



const UpdateForm = (props)=> {

    let {name, code, img, quantity, unitPrice, totalPrice, loader} = useRef();

    const navigate = useNavigate();

    useEffect(()=>{
        ReadProductById(props.id)
            .then((result)=>{
                name.value = result[0]['name']
                code.value = result[0]['code']
                img.value = result[0]['img']
                quantity.value = result[0]['quantity']
                unitPrice.value = result[0]['unitPrice']
                totalPrice.value = result[0]['totalPrice']
            })
    })
    const UpdateProductHandler = ()=>{
        const product_name = name.value;
        const product_code = code.value;
        const product_img = img.value;
        const product_quantity = quantity.value;
        const product_unitPrice = unitPrice.value;
        const product_totalPrice = totalPrice.value;

        if(isEmpty(product_name)){
            errorToast("Product name required");
        }
        else if(isEmpty(product_code)){
            errorToast("Product code is required");
        }
        else if(isEmpty(product_img)){
            errorToast("Product image is required");
        }
        else if(isEmpty(product_quantity)){
            errorToast("Product quantity is required");
        }
        else if(isEmpty(product_unitPrice)){
            errorToast("Product unit price is required");
        }
        else if(isEmpty(product_totalPrice)){
            errorToast("Product total price is required");
        }
        else {
            // loader showing
            loader.classList.remove("d-none");
            // calling create api
            UpdateProduct(props.id, product_name, product_code, product_img, product_quantity, product_unitPrice, product_totalPrice)
                .then((result)=>{
                    // loader hide
                    loader.classList.add("d-none");

                    if(result === true){
                        successToast("Product updated successfully");
                        // set value empty
                        name.value = name.value;
                        code.value = code.value;
                        img.value = img.value;
                        quantity.value = quantity.value;
                        unitPrice.value = unitPrice.value;
                        totalPrice.value = totalPrice.value;

                        // redirect user to product list page
                        navigate('/');
                        
                    }else {
                        errorToast("Request failed try again")
                    }
                });

        }




    };




    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="text-primary">Update Product Info</h1>
            </div>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-2">
                        <label>Product Name</label>
                        <input ref={(input)=>name=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 p-2">
                        <label>Product Code</label>
                        <input ref={(input)=>code=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 p-2">
                        <label>Product Image</label>
                        <input ref={(input)=>img=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 p-2">
                        <label>Quantity</label>
                        <input ref={(input)=>quantity=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 p-2">
                        <label>Unit Price</label>
                        <input ref={(input)=>unitPrice=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 p-2">
                        <label>Total Price</label>
                        <input ref={(input)=>totalPrice=input} type="text" className="form-control" />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4 p-2">
                        <button onClick={UpdateProductHandler} className="btn btn-primary">Update Product</button>
                    </div>
                </div>
                <div className="d-none" ref={(div)=> loader=div}>
                    <FullScreenLoader/>
                </div>
            </div>
        </>
    );
}

export default UpdateForm;