import React, {Component} from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
   constructor(props){
      super(props);

      this.state = {
         listOfHouse: []
      }
   }

   componentDidMount(){
      axios.get(`/api/houses`)
      .then(res => this.setState({listOfHouse: res.data}))
      .catch(err => console.log(err));
   }
   
   render() {
      const houses = this.state.listOfHouse.map((e, i) => <House key={i} house={e} />)
      return (
         <div>Dashboard
           <Link to='/wizard'><button>Add New Property</button></Link>
            {houses}

         </div>
      )
   }
}

export default Dashboard;