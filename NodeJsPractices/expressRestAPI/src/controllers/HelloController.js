

exports.HelloGet = (req, res)=>{
    res.status(200).json({status: "Success", data: "This is my first expressJs rest api"});

}

exports.HelloPost = (req, res)=>{
    res.status(201).json({status: "Success", data: "This is my first expressJs rest api"});

}

exports.AlfinArif = (req, res)=>{
    res.status(200).json({status: "ok", data: "This is test api"});

}