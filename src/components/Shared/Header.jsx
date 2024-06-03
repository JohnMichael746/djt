import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [showMenu, setshowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY > 0;
      setisScrolled(scroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-white fixed z-[1000000000000]" : "absolute z-[1000000000000]"
      } py-5 transition-all ease-in-out duration-300 w-full z-50`}
    >
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between gap-5">
          <a href="/" className="w-[150px] sm:max-w-[200px]">
            <img src="/imgs/logo.png" alt="brand" />
          </a>
          <nav>
            <ul
              className={`${
                showMenu ? "block" : "hidden xl:flex"
              } flex xl:flex-row flex-col items-center right-0 space-y-6 xl:space-y-0 bg-teal-500 xl:bg-transparent top-[83px] py-10 xl:py-0 w-80 xl:w-auto xl:space-x-4 absolute xl:relative xl:top-0`}
            >
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    let home = document.getElementById("home");
                    e.preventDefault();
                    home &&
                      home.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState("home", "home", "/");
                  }}
                  className="flex items-center space-x-3 font-coiny text-[22px] text-[#df1731]"
                >
                  <img src="/imgs/home-icon.png" alt="home-icon" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    let about = document.getElementById("about");
                    e.preventDefault();
                    about &&
                      about.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState("about", "about", "/");
                  }}
                  className="flex items-center space-x-3 font-coiny text-[22px] text-[#df1731]"
                >
                  <img src="/imgs/kitty-icon.png" alt="kitty-icon" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    let tokenomics = document.getElementById("tokenomics");
                    e.preventDefault();
                    tokenomics &&
                      tokenomics.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState("tokenomics", "tokenomics", "/");
                  }}
                  className="flex items-center space-x-3 font-coiny text-[22px] text-[#df1731]"
                >
                  <img src="/imgs/tokenomics-icon.png" alt="tokenomics-icon" />
                  <span>Tokenomics</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    let social = document.getElementById("social");
                    e.preventDefault();
                    social &&
                      social.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    window.history.pushState("social", "social", "/");
                  }}
                  className="flex items-center space-x-3 font-coiny text-[22px] text-[#df1731]"
                >
                  <img src="/imgs/social-icon.png" alt="social-icon" />
                  <span>Social</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="inline-block w-64 py-4 text-base font-normal text-center text-[#df1731] uppercase border-4 border-white rounded-full bg-herobtngrad font-coiny"
                >
                  Get $DJT Token
                </a>
              </li>
            </ul>
            {showMenu ? (
              <button className="text-[#09eab4] block xl:hidden" onClick={() => setshowMenu(!showMenu)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            ) : (
              <button className="text-[#09eab4] block xl:hidden" onClick={() => setshowMenu(!showMenu)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
