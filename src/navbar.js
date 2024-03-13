import { Link } from "react-router-dom/cjs/react-router-dom.min";

// create a stateless funtional component using snipets by typing 'sfc' 
const Navbar = () => {
   return (
      <nav className="navbar">
         <h1>Masked Artist Blog</h1>
         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
         </div>
      </nav>
   );
}
 
export default Navbar;
