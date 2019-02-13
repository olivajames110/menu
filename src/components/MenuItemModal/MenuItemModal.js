import React, { Component } from 'react';

class MenuItemModal extends Component {


  render() {
      const isOpen = this.props.isOpen ? 'initial' : "none"
    return (    
        <div style={{display: isOpen} } className="item-modal-bg">
         <div className="item-modal">
            <div onClick={() => this.props.onModalClose()} className="close-button"><i className="fas fa-times"></i>
            </div>
            <div className="modal-header-cont">
                <div className="modal-header">{this.props.title}</div>
                <div className="modal-header-desc">{this.props.desc}</div>
            </div>
            <div className="modal-body">
                <div className="modal-question-col">
                    <div className="modal-question-item">
                        <span className="modal-question-item-question">What bread would you like?</span>
                        <div className="input-container">
                            <input type="select" className="modal-question-item-answer" placeholder="Select Item" /> 
                            <span className="input-arrow"><i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>   
                </div>
                <div className="modal-modifier-col">
                    <div className="modal-modifier-col-header">
                        <span className="modifier-col-header-type">Bread</span>
                        <span>Options:</span>
                    </div>
                    <div className="modifier-col-item">White</div>
                    <div className="modifier-col-item">Whole Wheat</div>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default MenuItemModal;





