
import React, { Component } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';

 class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Chair",
          img: "chair.jpg",
          category: "furniture",
          description: "lorem wdcwe dcdde  eerhn",
          price: 199

        },
        {
          id: 2,
          title: "bed",
          img: "bed.jpg",
          category: "furniture",
          description: "lorem wdcwe dcdde  eerhn",
          price: 299

        },
        {
          id: 3,
          title: "table",
          img: "table.jpg",
          category: "furniture",
          description: "lorem wdcwe dcdde  eerhn",
          price: 99

        },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
      <Header/>
      
     <div className="container">
      <Items items = {this.state.items}/>
      
     </div>
     <Footer/>
   </div>
    )
  }
}

export default App;