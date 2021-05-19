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
    }
     this.depositWaste = this.depositWaste.bind(this);
  }

  depositWaste(content) {
    this.state.wasteManagement.methods.depositWaste(content).send({ from: this.state.account })
  }
  

 

  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.dappuniversity.com/free-download" target="_blank">Dapp University | Todo List</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account"></span></a></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <TodoList
                  tasks={this.state.tasks}
                  createTask={this.createTask}
                  toggleCompleted={this.toggleCompleted} />
              }
            </main>
          </div> 
        </div> */}
        
        <div className="container-fluid">
        
          <div className="row">
            <h1 className="col-lg-12 d-flex justify-content-center">Hello World</h1>
            <main role="main" className="col-lg-12 d-flex justify-content-center">  
                <WasteManagement
                  wastes={this.state.wastes}
                  depositWaste={this.depositWaste} />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
