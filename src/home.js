// #7&12. use state and effect hook
import BlogList from "./blogList";
import useFetch from "./useFetch";

// #6. When user clicks on the butteon it should return whatever is in the curly brackets by returning it.
const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {/* child component */}
      {blogs && <BlogList lists={blogs} title="All Blogs" />}
      {/* <BlogList lists={ blogs.filter((blog) => blog.author === "Fredo")} title="Fredo's Blogs" /> */}
    </div>
  );
};

export default Home;
