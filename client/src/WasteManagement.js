import React, { Component } from 'react'

class WasteManagement extends Component {

  render() {
    return (
      <div id="content">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.depositWaste(this.waste.value)
        }}>
          <input
            id="newWaste"
            ref={(input) => {
              this.waste = input
            }}
            type="text"
            className="form-control"
            placeholder="Add Waste Type"
            required />
            <input
            id="wasteQuantity"
            ref={(input) => {
              this.waste = input
            }}
            type="text"
            className="form-control"
            placeholder="Add Waste Type"
            required />
          <input type="submit" hidden={true} />
        </form>
      </div>
    );
  }
}

export default WasteManagement;
