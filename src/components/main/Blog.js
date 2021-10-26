const Blog = ({ color }) => {
  return (
    <div className="blog p-5 p-5 bg-white rounded shadow-lg my-5 text-center">
      <h1>Here will be some awesome blogs ...</h1>
      <h1 className="text-uppercase" style={{ color: color }}>
        just wait!
      </h1>
    </div>
  );
};

export default Blog;
