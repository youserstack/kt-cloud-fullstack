import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NoMatch from "./page/NoMatch";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home title="기본 홈페이지" />} />
            <Route path="/welcome" element={<Home title="웰컴 홈페이지" />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
