import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      myState : "My Initial state"
    }
  }

  update(e){
    this.setState({myState:e.target.value})
  }

  render(){

    return (      
        <div>
          <h1>Hello</h1>
          <MyWidget updatex={this.update.bind(this)}></MyWidget>
          <h1>{this.state.myState}</h1>
          <h1>{this.props.txt} - {this.props.cat}</h1>
          <NewWidget ></NewWidget>

          <Button>Click here <Heart/></Button>
        </div>

        
      )
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return (<span>&hearts;</span>)
  }
}

const MyWidget = (x1) => <input type="text" onChange={x1.updatex}/>

class NewWidget extends React.Component{

  render(prop){
    return (<div><input type="text"/></div>)
  }
}

App.propTypes = {
  txt :PropTypes.string,
  cat : PropTypes.number.isRequired
}

App.defaultProps = {
  txt : "My Default value"
}


export default App;


