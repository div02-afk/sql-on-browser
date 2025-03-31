import Main from "./components/main";
import { AppSidebar } from "./components/sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider className="bg-[#0e0e0e]">
      <AppSidebar />
      <main className="flex min-h-screen h-full w-screen">
        <SidebarTrigger className="text-[#585858]" />
        <Main />
      </main>
    </SidebarProvider>
  );
}

export default App;
