import { CommunityIcon, Curve, LinkIcon2 } from "../../assets/constants";

const Hero = () => {
  return (
    <section className="relative" id="home">
      <div className="max-w-6xl px-4 mx-auto bg-[url(flag.jpg)] bg-no-repeat bg-cover">
        <div className="flex flex-col items-center pt-32 max-md:flex-col-reverse md:flex-row sm:pt-40 md:pb-10 lg:pb-0">
          <div className="w-[90%] sm:w-[75%] md:w-[55%] md:-mt-11">
            <h1 className="font-coiny text-[#df1731] text-[35px] font-medium text-center">WELCOME TO</h1>
            <div className="w-11/12 mx-auto mt-4">
              <img src="/imgs/LOGO-PUSSY-2.png" alt="LOGO-PUSSY-2" className="md:w-[90%]" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center mt-4 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <a
                href="/"
                className="leading-none bg-herobtngrad text-white font-coiny rounded-full font-normal border-4 text-center flex items-center space-x-2.5 justify-center w-64 py-5 text-base uppercase border-white"
              >
                <span>Buy on Jupiter</span>
                <LinkIcon2 />
              </a>
              <a
                href="https://t.me/pussthekitten"
                target="_blank"
                rel="noreferrer"
                className="leading-none text-[#000] font-coiny rounded-full font-normal text-center flex items-center space-x-2.5 justify-center w-64 py-5 text-base uppercase"
              >
                <span className="underline">Join Community</span>
                <CommunityIcon />
              </a>
            </div>
          </div>
          <div className="w-[45%] max-md:w-full flex items-center justify-center">
            <img src="/imgs/pussy-the-kitten.gif" alt="pussy-the-kitten" className="w-[70%] relative z-10" />
          </div>
        </div>
      </div>
      {/* Curve  */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden"> */}
        {/* <Curve /> */}
        {/* <img src="/flag.jpg" alt="LOGO-PUSSY-2" className="object-cover w-full" /> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
