import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
   constructor(props){
      super(props)

      this.state ={
         name: '',
         address: '',
         city: '',
         state: '',
         zip: ''
      }
   }

   handleComplete = () => {
      
   }
   
   render() {
      return (
         <div>
            <input onChange={e =>  this.setState({ name: e.target.value})} value={this.state.name} placeholder='Name'></input>
            <input onChange={e => this.setState({address: e.target.value})} placeholder='Address' value={this.state.address}></input>
            <input onChange={e => this.setState({city: e.target.value})} placeholder='City' value={this.state.city}></input>
            <input onChange={e => this.setState({state: e.target.value})} placeholder='State' value={this.state.state}></input>
            <input onChange={e => this.setState({zip: e.target.value})} type='number' value={this.state.zip} placeholder='Zip Code'></input>
            <Link to='/'><button>Cancel</button></Link>
         </div>

      )
   }
}

export default Wizard;