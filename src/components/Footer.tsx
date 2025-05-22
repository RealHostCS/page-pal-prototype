
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-white mt-16 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FlyDreamAir</h3>
            <p className="text-white/80">Book affordable flights to destinations worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white">Careers</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white">Press</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/80 hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white">Contact Us</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link to="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link to="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-white/60 text-center">
          <p>&copy; {new Date().getFullYear()} FlyDreamAir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
