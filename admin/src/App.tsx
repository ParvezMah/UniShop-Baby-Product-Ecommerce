import { Sidebar } from "lucide-react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="">
      <Sidebar/>
      <div>
        <Header/>
        <main>
          <Outlet/>
        </main>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
