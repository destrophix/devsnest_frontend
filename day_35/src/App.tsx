import "./App.css";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Suggestion from "./components/Suggestion";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="landing">
        <div className="content">
          <Stories />
          <Posts />
        </div>
        <Suggestion />
      </div>
    </div>
  );
};

export default App;
