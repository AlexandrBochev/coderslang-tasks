import React from 'react';



class RandomNumber extends React.Component {
  state = {
    randomNumber: 0
  }

  // handleFieldTwoUpdate = () => {
  //   this.setState({ randomNumber: 5 })
  // }
  
  render() {
    return (
      <div>
        <div>{this.state.randomNumber}</div>
        <button onClick={ console.log(123) }>Generate</button>
      </div>
    ) 
  } 
}


export default RandomNumber;
