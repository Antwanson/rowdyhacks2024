import { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  async function handleSubmit() {
    const result = await fetch(`http://127.0.0.1:5000/chat/${prompt}`);

    const data = await result.json();
    setStory(data.message);
  }

  return (
<div class="container">
    <h1>Enter the Adventurer</h1>
    <input type="text" id="userName" placeholder="Enter Your Name" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
    <button id="startAdventure" onClick={() => {
      handleSubmit();
      setIsClicked(true);
    }}>Start Adventure</button>
    <div class="delorean" style={isClicked ? {animation: "driveAcross 4s"} : {}}></div>
    <div id="story"></div>

    <div class="flash-overlay" id="flash"></div>

    <script src='script.js'/>

    {story ? <p>{story}</p> : ''}
</div>

  );
}

export default App;
