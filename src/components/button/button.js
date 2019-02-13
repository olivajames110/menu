import React, { Component } from 'react';

import MenuItemModal from './components/MenuItemModal/MenuItemModal';
// import './button.css';


class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Title",
            // title: this.props.title,
            desc: "Description",
            // desc: this.props.desc,
            price: this.props.price
        }
      }
  
    openModal = () => {
        this.setState({
            title: this.props.title,
            desc: this.props.desc,
            price: this.props.price,
        })
        console.log('Clicked'); 
   
        // <MenuItemModal />
    }


  render() {
    return (    
            <div onClick={this.openModal} className="menu-item-wrapper">
                <img src="https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg" width="100%" alt=""></img>
                <div className="menu-item-list">
                    <div className="menu-item-title">{this.props.title}</div>
                    <div className="menu-item-desc">{this.props.desc}</div>
                    <div className="menu-item-price">{this.props.price}</div>
                </div>
          
                <MenuItemModal title={this.state.title} desc={this.state.desc} price={this.state.price} /> 
            </div>
    );
  }
}

export default MenuItem;



