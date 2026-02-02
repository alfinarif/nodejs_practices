

const Hero = (props)=>{
    return(
        <div>
            <ul>
                <li>Id: {props.item.id}</li>
                <li>Name: {props.item.name}</li>
                <li>Email: {props.item.email}</li>
                <li>Age: {props.item.age}</li>
                <li>City: {props.item.city}</li>
                <li>Remark: {props.item.remark}</li>
            </ul>
        </div>
    );
};

export default Hero;