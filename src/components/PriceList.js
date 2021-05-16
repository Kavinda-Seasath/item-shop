import React, { Component } from 'react';
import './Table.css'
import PriceCalculationService from '../services/PriceCalculatorService';



class PriceList extends Component {

   constructor(props){
       super(props)
       this.state = {
         priceList: [],
         penguinPriceList:[],
         horseshoePriceList: []

       }
   } 

   componentDidMount(){
       PriceCalculationService.getPriceList().then((responce) => {
           this.setState({priceList: responce.data});
           this.setState({penguinPriceList: responce.data.penguinEars});
           this.setState({horseshoePriceList: responce.data.horseShoe})
           console.log('penguinPriceList = '+ JSON.stringify(responce.data.penguinEars));
       });
       
   }


  render() {
    return (
        <div className="App">
          <h1 className = "price" >Prices Per Unit</h1>
          <div>
          <table className = "table table-stripped">
            <thead>
              <tr>
                <td>Units</td>
                <td>Penguin Ears</td>
                <td>Horseshoe</td>
              </tr>
            </thead>
            <tbody>
              { this.state.penguinPriceList.map(
                (price,index) =>
                  <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{price}</td>
                    <td>{this.state.horseshoePriceList[index]}</td>
                  </tr>
              )             
              }
            </tbody>
            </table>

          </div>
          
        </div>
    );
  }
}

export default PriceList;