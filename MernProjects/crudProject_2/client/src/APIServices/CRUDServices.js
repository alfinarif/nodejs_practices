import axios from 'axios';


exports.Create = (name, code, img, quantity, unitPrice, totalPrice)=>{
    let URL = "/api/v1/createTodo";
    let postBody = {
        name: name,
        code: code,
        img: img,
        quantity: quantity,
        unitPrice: unitPrice,
        totalPrice: totalPrice
    };

    return axios.post(URL, postBody)
        .then((res)=>{
            if(res.status === 201){
                return true;
            } else {
                return false;
            }
        })
        .catch((err)=>{
            console.log(err);
            return false;
        })
}


exports.Read = ()=>{
    let URL = "/api/v1/readTodo";
    return axios.get(URL)
        .then((res)=>{
            if(res.status === 200){
                return res.data['data'];
            } else {
                return false;
            }
        })
        .catch((err)=>{
            console.log(err);
            return false;
        })
}


exports.Update = (id, name, code, img, quantity, unitPrice, totalPrice)=>{
    let URL = "/api/v1/updateTodo/"+id;
    let postBody = {
        name: name,
        code: code,
        img: img,
        quantity: quantity,
        unitPrice: unitPrice,
        totalPrice: totalPrice
    };

    return axios.post(URL, postBody)
        .then((res)=>{
            if(res.status === 200){
                return true;
            } else {
                return false;
            }
        })
        .catch((err)=>{
            console.log(err);
            return false;
        })
}


exports.Delete = (id)=>{
    let URL = "/api/v1/deleteTodo/"+id;
    return axios.get(URL)
        .then((res)=>{
            if(res.status === 200){
                return true;
            } else {
                return false;
            }
        })
        .catch((err)=>{
            console.log(err);
            return false;
        })
}



