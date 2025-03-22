import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusSquare, Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "@/components/theme-provider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="flex min-w-10/12 flex-col items-center justify-between p-4 lg:flex-row">
        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-5xl font-bold text-transparent uppercase lg:text-5xl">
          <Link to={"/"}>Product Store 🛒</Link>
        </h1>
        <div className="flex flex-row items-center gap-2 pt-4 lg:pt-0">
          <Link to={"./create"}>
            <Button
              variant="secondary"
              size="icon"
              className="h-16 w-16 border-2"
            >
              <PlusSquare className="scale-200" />
            </Button>
          </Link>
          <Button
            variant="secondary"
            size="icon"
            className="h-16 w-16 border-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="scale-200" />
            ) : (
              <Moon className="scale-200" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
