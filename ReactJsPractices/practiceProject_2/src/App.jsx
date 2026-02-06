import React from 'react';

class App extends React.Component{
  render(){

    return (

        <h1 className="heading">
          <span className="text">Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
        </h1>

    );

  }

}



export default App;