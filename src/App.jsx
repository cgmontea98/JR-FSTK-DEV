import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AnimationOne } from "./components/AnimationOne";
import { Background } from "./components/Background";
import { SignIn } from "./components/SignIn";
import { Sigup } from "./components/Sigup";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Background />
      <main className="container">
        <article className="article-signIn">
          <SignIn />
        </article>
        <aside className="aside-animationOne">
          <AnimationOne className="animationOne" />
        </aside>
        <article className="article-sigup">
          <Sigup />
        </article>
      </main>
      <Nav />
    </>
  );
}

export default App;
