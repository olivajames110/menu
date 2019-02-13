import React, { Component } from 'react';


// const MenuItem = ({ title, desc, price, onClickj }) => {
//     // const { title } = props;

//     const openModal = () => {
//         onClickj(title, desc, price)
//         console.log('Clicked'); 
//     }

//     return (    
//         <div onClick={openModal} className="menu-item-wrapper">
//             <img src="https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg" width="100%" alt=""></img>
//             <div className="menu-item-list">
//                 <div className="menu-item-title">{title}</div>
//                 <div className="menu-item-desc">{desc}</div>
//                 <div className="menu-item-price">{price}</div>
//             </div>          
//         </div>
//     );
// };

class MenuItem extends Component {
    openModal = () => {
        this.props.onClickj(this.props.title, this.props.desc, this.props.price)
        console.log('Clicked'); 
   
        // <MenuItemModal />
    }

    
    render() {
        const { title } = this.props;
        return (    
                <div onClick={this.openModal} className="menu-item-wrapper">
                    <img src="https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg" width="100%" alt=""></img>
                    <div className="menu-item-list">
                        <div className="menu-item-title">{this.props.title}</div>
                        <div className="menu-item-desc">{this.props.desc}</div>
                        <div className="menu-item-price">{this.props.price}</div>
                    </div>
              
                    
                </div>
        );
  }
}

export default MenuItem;



