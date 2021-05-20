import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'
import WasteManagement from './WasteManagement'

class App extends Component {

  
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const wasteManagement = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    this.setState({ wasteManagement })
    const id = await wasteManagement.methods.id().call()
    const totalCost = await wasteManagement.methods.totalCost().call()
    this.setState({ totalCost })
    console.log("wasteManagement: ", wasteManagement)
    this.setState({ id })
    for (var i = 1; i <= id; i++) {
      const waste = await wasteManagement.methods.wastes(i).call()
      this.setState({
        wastes: [...this.state.wastes, waste]
      })
    }
    console.log("id: ", id)
    console.log(this.state.wastes)
    this.setState({ loading: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      id: 0,
      wastes: [],
      totalCost: 0,
    }
     this.depositWaste = this.depositWaste.bind(this);
     this.updateWalletBalance = this.updateWalletBalance.bind(this);
  }

  depositWaste(content, quantity, cost) {
    this.state.wasteManagement.methods.depositWaste(content, quantity, cost).send({ from: this.state.account })
  }

  updateWalletBalance(quantity, cost) {
    this.state.wasteManagement.methods.updateWalletBalance(quantity, cost).send({ from: this.state.account })
  }
  

 

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2 className="navbar-brand">Waste Tracker</h2>
            <span class="navbar-text ms-auto">
              Wallet Balance: {this.state.totalCost}
            </span>
          </nav>
        </div>
        <br/>
        <div className="container-fluid">
        
          <div className="row">
            <br/>
            <br/>
            <h1 className="col-lg-12 d-flex justify-content-center">Enter Details of Waste Deposited Here</h1>
            
            <main role="main" className="col-lg-12 main justify-content-center">
                <br/>  
                <WasteManagement
                  wastes={this.state.wastes}
                  depositWaste={this.depositWaste} 
                  updateWalletBalance={this.updateWalletBalance}/>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
