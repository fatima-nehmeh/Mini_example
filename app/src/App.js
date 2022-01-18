import React, {useEffect} from 'react';
import axios from "axios";
import './App.css';

const App = () => {

  useEffect  ( async () => {
    //DELETE
    //const {data2} = await axios.delete("http://localhost:5000/api/students/61e5c24458ec142ca1ec6e22");
    
    
    //POST
    const student = { name : 'Ali', roll:true, present:false};
    await axios.post("http://localhost:5000/api/students", student);

    //PUT
    const studentUpdated = { name:'Fatima'};
    await axios.put("http://localhost:5000/api/students/61e5b75cb32569301253fe2a", studentUpdated);

    //GET ALL
    const {data} = await axios.get("http://localhost:5000/api/students");
    // data.forEach((d) => {
    //   console.log(d._id);
    // })
    console.log(data);
  })
  
  return (
    <div className="App">
      <h1>REACT EXAMPLE</h1>

      
    </div>
  );
}

export default App;
