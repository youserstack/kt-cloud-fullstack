import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="border border-red-500">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}
