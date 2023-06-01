import './App.css';
import { lazy,Suspense, useState } from 'react';
import Login from './Components/Login';
const Changecolor= lazy(()=>import('./Components/Changecolor'))
const Profile= lazy(()=>import('./Components/Profile'))
const Counter= lazy(()=>import('./Components/Counter'))





function App() {
  const[showprofile,setShowProfile]=useState(false)
  const onClickhandler=()=>{
    setShowProfile(true)
  }
  return (
    <div className="App">
      <Login/>
      <p>below is lazy loading</p>
      <Suspense fallback={<h1>loading...</h1>}>
      {showprofile && <Profile />}
      <Changecolor/>
      <Counter/>
      <button onClick={onClickhandler}></button>
      </Suspense>
      <p>hi</p>
      
    </div>
  );
}

export default App;
