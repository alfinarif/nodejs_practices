import ClockPractice5 from "./ClockPractice5";

const ClockList = ({quantities = []}) => {
    return (
        <>
        <div>
            {quantities.map((key, index)=>(
                <ClockPractice5 key={key} />
            ))}
        </div>

        <div>
            {quantities.map((key, index)=>(
                <ClockPractice5 key={key} />
            ))}
        </div>

        </>
    );
};

export default ClockList;