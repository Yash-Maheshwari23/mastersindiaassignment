import React from "react";
import "./snippetCard.css";
import { FaRegHeart } from 'react-icons/fa';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default class SnippetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      toggle: false,
    }
  }

  modalDisplay(){
    return(
      <Modal
        isOpen={this.state.toggle}
        style={customStyles}
        onRequestClose={() => this.setState({toggle: !this.state.toggle})}
      >
        <div className="card">
          <div className="incard">
            <div className="top" onClick={()=>{this.setState({toggle: !this.state.toggle})}}>
              <div className="left">
                <p>{this.props.title}</p>
              </div>
              <div className="right">
                <a href={this.props.origin}>Origin</a>
              </div>
            </div>
            <div className="bottom">
              <pre style={{textAlign: 'left',padding: '2px'}}>
              {this.props.code}
              </pre>
              <div className='corner'>
                <FaRegHeart size='25px' color='#808080'/>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  }

  render() {
    return (
      <div className="card">
        <div className="incard">
          <div className="top" onClick={()=>{this.setState({toggle: !this.state.toggle})}}>
            <div className="left">
              <p>{this.props.title}</p>
            </div>
            <div className="right">
              <a href={this.props.origin}>Origin</a>
            </div>
          </div>
          <div className="bottom">
            <pre style={{textAlign: 'left',padding: '2px'}}>
             {this.props.code}
            </pre>
            <div className='corner'>
              <FaRegHeart size='25px' color='#808080'/>
            </div>
          </div>
        </div>
        {this.modalDisplay()}
      </div>
    );
  }
}
