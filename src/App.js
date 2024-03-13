import Navbar from "./navbar";
import Home from "./home";

function App() {
  // #3. we create a dynamic value in ths 'const' give it a title and retuen it in the curly brackets.
  return (
    <div className="App">
      {/* after we import the navbar, we nest it. It is a self closing tag. */}
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
