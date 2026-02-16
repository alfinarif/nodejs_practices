import React, {useRef} from 'react';
import {isEmpty, successToast, errorToast} from "../../helpers/ValidationHelper.js";


const CreateForm =()=> {

    let {name, code, img, quantity, unitPrice, totalPrice} = useRef();

    const CreateProductHandler = ()=>{
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
            successToast("Everything is fine");
        }




    };

        return (
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
                        <button onClick={CreateProductHandler} className="btn btn-primary">Create Product</button>
                    </div>
                </div>
            </div>
        );

}

export default CreateForm;