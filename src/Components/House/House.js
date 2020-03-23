import React, { Component } from 'react';

class House extends Component {
   render() {
      const {house} = this.props
      return (
         <div>
            <h1>{house.name}</h1>
            <div>
               <h3>{house.address}</h3>
               <h3>{house.city}</h3>
               <h3>{house.state}</h3>
               <h3>{house.zipcode}</h3>
            </div>
            <button>Delete</button>
         </div>
      )
   }
}

export default House;
