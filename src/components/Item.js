import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img className='item__img' src={"./img/"+ this.props.item.img }  />
        <h2 className='item__text'>{this.props.item.title}</h2>
        <h2 className='item__text'>{this.props.item.category}</h2>
        <h2 className='item__text'>{this.props.item.price}</h2>

        <div className='add__to-cart'>
            +
        </div>
       
    </div>

    )
  }
}

export default Item