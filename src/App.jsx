import Home from "./pages/Home";
import "./App.css";

function App() {
  return <>
    <iframe src="silence.mp3" allow="autoplay" id="audio" className="hidden"></iframe>
    <audio id="player" autoPlay loop>
      <source src="back.mp3" type="audio/mp3" />
    </audio>
    <Home />
  </>;
}

export default App;
