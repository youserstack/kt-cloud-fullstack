import "./App.css";
import Demo from "./components/Demo";
import Profile from "./components/Profile";
import EventListener from "./pages/EventListener";

function App() {
  return (
    <div>
      <EventListener />
      <Profile />
      <Demo />
    </div>
  );
}

export default App;
