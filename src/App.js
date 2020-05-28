import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      places : [],
      searchField : '',
    };
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => this.setState({places: users}));

}

onSearchChange = event => {
  this.setState({searchField:event.target.value});
};

render() {
  const {places, searchField} = this.state;
  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
<div className ='App'>
  <h1>고양이 캐릭터 모음</h1>
  <SearchBox onSearchChange={this.onSearchChange}/>
  <CardList places={filteredPlaces}/>
</div>
    );
}

}

export default App;
