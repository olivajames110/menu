import React, { Component } from 'react';
import './App.css';
import MenuItem from './components/button/button';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "Title",
  //     // title: this.props.title,
  //     desc: "Description",
  //     // desc: this.props.desc,
  //     price: this.props.price
  //   }
  // }


  addItem = () => {
    this.setState({
      title: this.props.title,
      desc: this.props.desc,
      price: this.props.price,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="container">
          <div className="header-container">
          <div class="logo">My Restaurant Name</div>
            <div class="nav-links display-flex-row">
              <div class="link-item">Link Item</div>
              <div class="link-item">Link Item</div>
              <div class="link-item">Link Item</div>
              <div class="link-item">Link Item</div>
              <div class="link-item">Link Item</div>
              <div class="link-item">Link Item</div>
            </div>
            </div>
        </header>
        <body>
    <div class="menu-header">
        <div class="menu-header-text">
          <span>Order Online</span>
        </div>
    </div>
    <div class="menu-body display-flex-row">
        <div class="menu-container display-flex-row">
           <MenuItem onClick={this.addItem} title='Hamburger' desc='Burger with cheese' price='$10.99'/>
           <MenuItem onClick={this.addItem} title='Cheeseburger' desc='Burger with cheese' price='$12.99'/>
           <MenuItem onClick={this.addItem} title='Chicken Sandwich' desc='Burger with cheese' price='$10.99'/>
           <MenuItem onClick={this.addItem} title='Veggie Burger' desc='Burger with cheese' price='$11.99'/>
           <MenuItem onClick={this.addItem} title='Hot Dog' desc='Burger with cheese' price='$9.99'/>
           <MenuItem onClick={this.addItem} title='BLT' desc='Bacon, lettuce, and tomato' price='$9.99'/>
        </div>
    </div>
</body>
      
    
      </div>
    );
  }
}

export default App;



