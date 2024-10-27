import './App.css';
import video from './outtatime.mp4';

function Prompt() {
  return (
<div>
  <video autoplay muted id="deloreanVideo" width="100%" height='100%'>
  <source src={video} type="video/mp4"/>
  </video>
</div>

  );
}

export default Prompt;
