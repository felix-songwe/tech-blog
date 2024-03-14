import Navbar from "./navbar";
import Home from "./home";
import Create from "./create";
import BlogDetails from "./blogDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // #3. we create a dynamic value in ths 'const' give it a title and retuen it in the curly brackets.
  return (
    <Router>
      <div className="App">
        {/* after we import the navbar, we nest it. It is a self closing tag. */}
        <Navbar />
        {/* #19. This is were our page content will go when to go to different pages */}
        <div className="content">
          <Routes>
            <Route path="/" element={ < Home /> } />
            <Route path="/create" element={ < Create /> } />
            <Route path="/blogs/:id" element={ < BlogDetails /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
