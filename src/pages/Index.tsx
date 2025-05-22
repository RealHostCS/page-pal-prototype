
import Navbar from "@/components/Navbar";
import FlightSearch from "@/components/FlightSearch";
import ServiceOptions from "@/components/ServiceOptions";
import Promotion from "@/components/Promotion";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-airline-blue to-airline-lightBlue bg-cover bg-no-repeat relative">
      {/* Background clouds effect */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-white opacity-10 top-[-200px] left-[-100px] animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-white opacity-10 top-[10%] right-[-200px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-6 pb-16">
          <div className="mt-12 mb-16 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Fly to Your Dreams</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Book flights to hundreds of destinations worldwide at affordable prices
            </p>
          </div>
          
          <FlightSearch />
          <ServiceOptions />
          <Promotion />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
