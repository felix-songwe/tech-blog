import { useState } from "react";

const Create = () => {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("mario");
   // #26. Submit events
   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author }
   }

   return (
     <div className="create">
       <h2>Add a new blog</h2>

       {/* #25. Input form */}
       <form onSubmit={ handleSubmit }>
         <label>Blog title</label>
         <input
           type="text"
           required
           value={ title }
           onChange={(e) => setTitle(e.target.value)}
         />
         <label>Blog body</label>
         <textarea
           required
           value={ body }
           onChange={(e) => setBody(e.target.value)}
         ></textarea>
         <label>Blog author</label>
         <select>
            {/* Blog author */}
            value={ author}
            onChange={(e) => setAuthor(e.target.value)}

           <option value="mario">Mario</option>
           <option value="yoshi">Yoshi</option>
         </select>
       </form>
       {/* button */}
       <button>Add blog</button>
       <p>{ title }</p>
       <p>{ body }</p>
       <p>{ author }</p>
     </div>
   );
}
 
export default Create;
