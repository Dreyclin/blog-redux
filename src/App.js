// Create store
// Create actions and reducers

import Form from "./components/Form/Form";
import Post from "./components/Posts/Post";


function App() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Blog-Redux</h1>
        <Form />
        <Post title="Test title" content="Test content"/>
      </div>
    </div>
  );
}

export default App;
