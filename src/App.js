import React from 'react';
import './App.css';
import Card from './component/card/Card'
import SearchField from './component/searchfield/Searchfield';
import Scroll from './component/scroll/scroll';


function App() {
const [cardList, setCardList] = React.useState([]);
const [searchField, setSearchField] = React.useState('');


React.useEffect(function(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setCardList(data))
},[])

const filteredPets = cardList.filter(pet => pet.name.toLowerCase().includes(searchField.toLowerCase()));
const cardElement = filteredPets.map(pet => {
  return <Card className='cardlist'key={pet.id} id={pet.id}name={pet.name} email={pet.email}/>
})
  return (
    <div className='container'>
      <h1>PETS</h1>
      <SearchField className='search' onChange={e => setSearchField(e.target.value)}/>
      <Scroll>
      {cardElement} 
      </Scroll>
    </div>
  );
}
export default App;
