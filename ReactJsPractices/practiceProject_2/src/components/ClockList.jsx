import ClockPractice5 from "./ClockPractice5";

const ClockList = ({quantities = []}) => {
    return (
        <div>
            {quantities.map((key)=>(
                <ClockPractice5 key={key} />
            ))}
        </div>
    );
};

export default ClockList;