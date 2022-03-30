import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <div className="App">
      <div className="p-6 bg-blue-500">
        <h3 className="text-3xl font-semibold text-white"> JSONProxyHolder</h3>
      </div>
      <div className="max-w-5xl mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllPosts />} />
            <Route path="/post" element={<Post />}>
              <Route path="/post/:id" element={<Post />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
