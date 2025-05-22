
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const FlightSearch = () => {
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value + 1);
  };

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) {
      setter(value - 1);
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-2xl font-bold text-airline-blue">Flights</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <div className="flex items-center">
            <Input 
              className="w-full pr-10" 
              placeholder="Sydney - SYD" 
            />
            <div className="absolute right-3 top-9">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <div className="flex items-center">
            <Input 
              className="w-full pr-10" 
              placeholder="Tokyo - NRT" 
            />
            <div className="absolute right-3 top-9">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                {departureDate ? format(departureDate, "PPP") : <span>When?</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
          <div className="flex items-center">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={() => handleDecrement(setAdults, adults)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
              </svg>
            </Button>
            <span className="w-10 text-center">{adults}</span>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={() => handleIncrement(setAdults, adults)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </Button>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Children &lt; 11 years</label>
          <div className="flex items-center">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={() => handleDecrement(setChildren, children)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
              </svg>
            </Button>
            <span className="w-10 text-center">{children}</span>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={() => handleIncrement(setChildren, children)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </Button>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Infants &lt; 2 years</label>
          <div className="flex items-center">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={() => handleDecrement(setInfants, infants)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
              </svg>
            </Button>
            <span className="w-10 text-center">{infants}</span>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full"
              onClick={() => handleIncrement(setInfants, infants)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <Button className="bg-airline-blue hover:bg-airline-darkBlue px-10">Search</Button>
      </div>
    </div>
  );
};

export default FlightSearch;
