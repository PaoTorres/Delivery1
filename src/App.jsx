import { useState } from "react"
import Card from './components/Card'
import phrases from "./phrases.json"
import "./style.css"


function App() {

const randomIndex = Math.floor(Math.random ()* phrases.length);
const [index, setIndex]=useState(randomIndex);

const colors = ['#845EC2', '#D65DB1', '#FF6F91'];
const randomIndexColor = Math.floor(Math.random ()* colors.length);
const [indexColor, setIndexColor]=useState(randomIndexColor);

document.body.style = `background: ${colors[indexColor]}`;

const divStyle={
  color: colors[indexColor], //colors[indexColor]
  };
  

const changePhrase=()=>{
  const randomIndex = Math.floor(Math.random ()* phrases.length);
  const randomIndexColor = Math.floor(Math.random ()* colors.length);
  setIndexColor(randomIndexColor);
  setIndex(randomIndex);
}

    return (
    <div className="App" >
       <div className="ctn-cards">
       <Card title={phrases[index].quote} datos={phrases[index].author} color={divStyle}/>
       <button className="btn-change" onClick={changePhrase}>Change Phrase</button>
       </div>
     </div>
  )
}

export default App
