import ClockList from './components/ClockList';

const App = () => {
  const quantities = [1,2,3];
  
  return (
    <div>
      {/* <ClockComponent locale="bn-BD"/>
      <br/>
      <ClockPractice locale="bn-BD"/> */}

      {/* <ClockPractice2 locale="bn-BD"/> */}

      {/* <ClockPractice3/> */}

      {/* <ClockComponent4/> */}

      {/* <ClockPractice5/> */}

      <ClockList quantities={quantities}/>

    </div>
  );
};

export default App;