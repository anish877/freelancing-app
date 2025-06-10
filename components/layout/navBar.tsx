const Navbar = ({ brandName = "futurejob", onLoginClick, onSignupClick }) => {
    
    return (
      <header className="border-b py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold cursor-pointer">
              {brandName}
            </div>
            {/* {isClient !== undefined && (
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <span>Joining as:</span>
                <span className="font-medium text-black">{roleText}</span>
              </div>
            )} */}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Log in
            </button>
            <button 
              onClick={onSignupClick}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Sign up
            </button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Help">
              <span className="rounded-full border w-6 h-6 flex items-center justify-center text-sm">?</span>
            </button>
          </div>
        </div>
      </header>
    );
};

  export default Navbar