import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from '/components/MovieList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render(){
    return
  }
}
