// create a stateless funtional component using snipets by typing 'sfc' 
const Navbar = () => {
   return (
      <nav className="navbar">
         <h1>Masked Artist Blog</h1>
         <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
         </div>
      </nav>
   );
}
 
export default Navbar;
