
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-md py-4 px-6 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl font-bold text-white">FlyDreamAir</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Help
        </Button>
        <Button variant="ghost" className="text-white hover:text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Account
        </Button>
        <Button className="bg-white text-airline-blue hover:bg-white/90">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
