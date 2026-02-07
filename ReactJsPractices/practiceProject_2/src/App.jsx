import ClockComponent from './components/ClockComponent';
import ClockPractice from './components/ClockPractice';

const App = () => {
  return (
    <div>
      <ClockComponent locale="bn-BD"/>
      <br/>
      <ClockPractice locale="bn-BD"/>
    </div>
  );
};

export default App;