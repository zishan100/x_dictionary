import React ,{ useEffect, useState} from 'react';
import './index.css';
import TableRow from './TableRow/TableRow';

function App () {
  
  let tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]

  let [ tableArr , setTableArr ] = useState([]);

  useEffect(()=>{
    setTableArr(tableData);
  },[])
  
  const sortByDate = (e)=>{
    
    console.log(tableData);    

    tableArr.sort((a,b)=>(new Date(b.date).getTime()-new Date(a.date).getTime()));
    
    setTableArr([...tableArr]);
  } 

  const sortByView = (e)=>{

    tableArr.sort((a,b)=>(b.views-a.views));
    
    setTableArr([...tableArr]);
  }


  

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button 
        type='button' 
        onClick={sortByDate}
      >Sort by Date</button>
      <button 
        type='button'
        onClick={sortByView} 
      >Sort by Views</button> 
      <table>
        <thead>
          <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
          </tr>
        </thead>
        <tbody> 
        {
          tableArr.map((items,idx)=>{
            return (<TableRow 
                      key={idx}
                      date={items.date} 
                      views={items.views} 
                      article={items.article} 
                    />)
          })
        }
        </tbody>
        
      </table>
    </div>
  );
  
}

export default App;
