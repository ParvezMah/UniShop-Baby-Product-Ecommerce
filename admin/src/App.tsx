import { Outlet } from "react-router";
import Header from "./components/Header";
import { Toaster } from "./components/ui/sonner";
import { Button } from "./components/ui/button";
import Sidebar from "./components/Sidebar";
import { toast } from "sonner";

function App() {
  return (
    <div className="h-screen flex bg-background">
      <Sidebar/>
      <div className="flex flex-col flex-1 max-w-[--breakpoint-2xl] ml-64 ">
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
