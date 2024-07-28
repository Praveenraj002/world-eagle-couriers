const NavbarSm = () => {
    return (
      <>
        <div className="container mx-auto px-4 py-3 m-0">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="font-poppins text-xl font-medium text-center textblack cursor-pointer"
            >
              🦅World Eagle Couriers 
            </a>
            <div>
              <button
                id="menu-btn"
                className="z-30 block lg:hidden focus:outline-none hamburger"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  const NavbarLg = () => {
    return (
      <>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center font-poppins">
            <a
              href="#home"
              className="font-poppins text-2xl font-medium text-black"
            >
              🦅World Eagle Couriers 
            </a>
            <div className="flex items-center gap-5 text-deepGray font-normal text-base">
              <a
                href="#home"
                className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out hover:text-black"
              >
                Home
              </a>
              <a
                href="#about"
                className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out hover:text-black"
              >
                Services
              </a>
              <a
                href="#services"
                className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out hover:text-black"
              >
                Track Package
              </a>
              <a
                href="#workflow"
                className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out hover:text-black"
              >
                Shop
              </a>
              <a
                href="#projects"
                className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out hover:text-black"
              >
                Support
              </a>
              <a
                href="#projects"
                className="px-3 py-1 hover:bg-lightGray rounded-sm transition duration-300 ease-in-out hover:text-black"
              >
                Login/Register
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  const Navbar = () => {
    return (
      <>
        <nav
          className="top-0 z-50 fixed w-screen bg-white drop-shadow-xl"
          id="navbar"
        >
          <div className="lg:hidden ">
            <NavbarSm />
          </div>
          <div className="hidden lg:block ">
            <NavbarLg />
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  