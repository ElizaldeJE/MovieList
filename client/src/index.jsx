import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MovieList from '/components/List.jsx';
import AddMovie from '/components/AddItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
    this.AddMovieTitle = this.AddMovieTitle.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    getMovies();
}

  AddMovieTitle(description, quantity){
    console.log('des', description);
    $.ajax({
      url: '/items',
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify({description: description, quantity: quantity}),
      success: (data) => {
        this.getMovies();
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      }
  })
 }

 getMovies(){
   $.ajax({
     url: '/items',
     type: 'GET',
     success: (data) => {
       this.setState({list: data});
     },
     error: (xhr, err) => {
       console.log('err', err);
    }

   })
 }

 componentDidMount(){
   this.getMovies();
 }

  render () {
    return (<div>
      <h1>Movie List</h1>

      <AddMovie AddMovieTitle={this.AddMovieTitle}/>
      <MovieList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
