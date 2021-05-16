import React, { Component } from 'react';
import './Calculator.css';
import priceCalculatorService from '../services/PriceCalculatorService';

class Calculator extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            penguinUnits: '0',
            horseshoeUnits: '0',
            fullCost:''
        }
    }



    handleSubmit = event => {
        event.preventDefault();

        priceCalculatorService.calculateCost(
            {
                'penguinUnits': this.state.penguinUnits,
                'horseshoeUnits': this.state.horseshoeUnits
            }
        ).then(
            response => {
                this.setState({fullCost:response.data.price});
            }
        )
        console.log('fullcost = '+this.state.fullCost);

    }

    changePenguinUnits = event => {
        this.setState({penguinUnits: event.target.value});
        console.log(this.state.penguinUnits);
    }

    changeHorseshoeUnits = event => {
        this.setState({horseshoeUnits: event.target.value});
        console.log(this.state.horseshoeUnits);
    }



  render() {
    return (
        <div >
          <h1 className="calc">Price Calculator</h1>
          <form onSubmit={this.handleSubmit}>
              <div>
                <div>
                <label>Penguin Ears</label>
                <input type="text" name="penguinUnits" value={this.state.penguinUnits} onChange={this.changePenguinUnits}/>
                </div>
                <div>
                <label>Horseshoes</label>
                <input type="text" name="horseshoeUnits" value={this.state.horseshoeUnits} onChange={this.changeHorseshoeUnits}/>
                </div>
                <div>
                    <button type="submit">Calculate Cost</button>
                </div>
              </div>
          </form>
          <label>Full Cost</label>
          <input type="text" name = "cost" value={this.state.fullCost}/>
        </div>
    );
  }
}

export default Calculator;