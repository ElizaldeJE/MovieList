import React from 'react';

class AddMovie extends React.Component {
  constructor(porps){
    super(props);
    this.state = {
      description: '',
      quantity: ''
    }
    this.updateDescritption = this.updateDescritption.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.add = this.add.bind(this);
  }

  updateDescritption(e){ // 'e' is for element
      this.setState({description: e.target.value})
  }

  updateQuantity(e){
    this.setState({quantity: e.target.value})
  }

  add(){

    this.props.AddMovieTitle(this.state.description, this.state.quantity);
  }

  render(){
    return (<div>
      Description:
      <input onChange={this.updateDescritption} value={this.state.updateDescritption}></input>
      <br/>
      Quantity:
      <input onChange={this.updateQuantity} value={this.state.updateQuantity}></input>
      <button onClick={this.add}>AddMovie</button>
    </div>)
  }
}

export default AddMovie;
