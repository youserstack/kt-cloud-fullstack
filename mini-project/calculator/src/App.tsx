import About from "./pages/About";
import Calc from "./pages/Calc";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./store/auth";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {/* public */}
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />

              {/* private */}
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Calc />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
