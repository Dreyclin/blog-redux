// Create store
// Create actions and reducers

import Form from "./components/Form/Form";
import Post from "./features/posts/Post";


function App() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Blog-Redux</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
