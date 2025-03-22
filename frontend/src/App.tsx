import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen">
          <Navbar />
          <Toaster position="bottom-center" richColors />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
