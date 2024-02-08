// Create actions and reducers

import Form from "./features/posts/Form";
import Posts from "./features/posts/Posts"

function App() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Blog-Redux</h1>
        <Form />
        <Posts />
      </div>
    </div>
  );
}

export default App;
