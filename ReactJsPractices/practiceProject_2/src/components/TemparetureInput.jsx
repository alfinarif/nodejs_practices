
const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
}


const TemparetureInput = ({scale, temperature, onTamperatureChange}) => {
        return (

            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input 
                    type="text" 
                    value={temperature} 
                    onChange={(e) => onTamperatureChange(e, scale)} 
                />
            </fieldset>

        );
};

export default TemparetureInput;