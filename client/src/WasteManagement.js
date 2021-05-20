import React, { Component } from 'react'

class WasteManagement extends Component {

  calculateCost (content, quantity){


    if (content == "Non-Recyclable Waste"){
      this.props.updateWalletBalance(quantity, quantity * -5)
      this.props.depositWaste(content, quantity, quantity * -5)
    }
    else{
      this.props.updateWalletBalance(quantity, quantity * 3)
      this.props.depositWaste(content, quantity, quantity * 3)
    }
    
  }

  render() {
    return (
      <div id="content">
        <br/>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.calculateCost(this.waste.value, this.quantity.value)
        }}>
          <select
            id="newWaste"
            ref={(input) => {
              this.waste = input
            }}
            name="wasteType"
            className="form-control"
            placeholder="Add Waste Type"
            required >
              <option value="" disabled selected hidden>Select Waste Type</option>
              <option value="Non-Recyclable Waste">Non-Recyclable Waste</option>
              <option value="Aluminium">Aluminium</option>
              <option value="PET">PET</option>
              <option value="Glass">Glass</option>
              <option value="Tetrapak">Tetrapak</option>
            </select>
            <br/>
            <input
            id="wasteQuantity"
            ref={(input) => {
              this.quantity = input
            }}
            type="text"
            className="form-control"
            placeholder="Add Quantity"
            required />
          <br/>
          <input type="submit"/>
        </form>
        <br/>
        <br/>
        <h1 className="col-lg-12 d-flex justify-content-center">Waste Deposit History</h1>
        <br/>
        <br/>
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-0lax column-1">ID</th>
              <th className="tg-0lax">Waste Material</th>
              <th className="tg-0lax">Quantity</th>
              <th className="tg-0lax">Cost</th>
            </tr>
          </thead>
          
          { this.props.wastes.map((waste, key) => {
            return(
              <>
                <tbody>             
                  <tr key={key}>
                    <td className="tg-0lax column-1">{waste.wasteId}</td>
                    <td className="tg-0lax">{waste.wasteMaterial}</td>
                    <td className="tg-0lax">{waste.quantity}</td>
                    <td className="tg-0lax">{waste.cost}</td>
                  </tr>
                </tbody>                                                    
              </>
            )
          })}
        </table> 
      </div>
    );
  }
}

export default WasteManagement;
