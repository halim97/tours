import React ,{useState,useEffect} from 'react';
import './App.css';
import Tours from './tours';


const url = 'https://course-api.com/react-tours-project'

function App() {

  const removeTour= (id)=>{
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }
  
  const [tours,setTours]=useState([]);

  const fetchTours= async()=>{
    try{
    const response=await fetch(url);
    const tours=await response.json();
    setTours(tours);
    }
    catch(error){
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchTours();
    
  },[]);
  
  
  // const data= fetch(url).then(response=>response.json())
  // .then(data=>setTours(data));
     if(tours.length!==0){     
  return (
    <div className="main">
      <p className="bigTitle">Our Tours</p>
      <div className="line "></div>
      
      <Tours tours={tours} removeTour={removeTour}/> 

</div>

  );
  }else{
    return (
        <button onClick={
          fetchTours
        }>Refresh</button>
    );
  }

}

export default App;
