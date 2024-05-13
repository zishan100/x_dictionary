import React ,{ useState} from 'react';
import './index.css';

function App () {
  
  let [ searchWord , setSearchWord ] = useState(''); 
  let [ searchMatch , setSearchMatch ] = useState('');

  let words = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
    { word: "Component", meaning: "A reusable building block in React." },
  
    { word: "State", meaning: "An object that stores data for a component." }
  
  ]

  const handleClickEvent = (e)=>{
    
    console.log(searchWord);
    
    if( searchWord === '' ) return;

    let isWordFound = words.find((items)=>{
      return items.word.toLowerCase() === searchWord.toLowerCase()
    })

    if( isWordFound ){
      setSearchMatch(isWordFound.meaning);  
    }else{
      setSearchMatch('Word not found in the dictionary.')
    }

  }

  return (
    <div >
      <h3>Dictionary App</h3>
      <input 
        text='text' 
        placeholder='Search for a word...'
        onChange={(e)=>setSearchWord(e.target.value)}
        value={searchWord} 
      />
      <button 
        type='button' 
        onClick={handleClickEvent}
      >Search</button>
      <h4>Definition:</h4>
      
      {
        (searchMatch) && ( <p>{searchMatch}</p> )
      }
    </div>
  );
  
}

export default App;
