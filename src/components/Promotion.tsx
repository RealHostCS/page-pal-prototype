
const Promotion = () => {
  return (
    <div className="relative max-w-4xl mx-auto mt-10 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-airline-blue to-airline-darkBlue p-8 text-white">
        <h2 className="text-4xl font-bold mb-2">Save 10%</h2>
        <h3 className="text-3xl font-semibold mb-6">on all routes!</h3>
        <button className="bg-white text-airline-blue px-4 py-2 rounded-md flex items-center hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          Check it out
        </button>
      </div>
    </div>
  );
};

export default Promotion;
