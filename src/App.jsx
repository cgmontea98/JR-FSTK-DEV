import "bootstrap/dist/css/bootstrap.min.css";
import { Player } from "@lottiefiles/react-lottie-player";
import "./App.css";
import { Sigin } from "./components/Sigin";
import { Sigup } from "./components/Sigup";

function App() {
  return (
    <main className="App">
      <aside className="signin">
        <Sigin />
      </aside>

      <Player
        src="https://assets2.lottiefiles.com/packages/lf20_PdkPu6L4Om.json"
        loop
        autoplay
        className="player"
      />
      <aside className="signup">
        <Sigup />
      </aside>
    </main>
  );
}

export default App;
