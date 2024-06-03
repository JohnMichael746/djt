import { Curve } from "../../assets/constants";

const ChooseSec = () => {
  return (
    <div className="bg-transparent bg-choosegrad">
      <section className="relative">
        <div className="max-w-6xl mx-auto py-16 md:py-24 px-4">
          <h3 className=" max-w-xl mx-auto text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-coiny bg-aboutgrad block text-transparent bg-clip-text">
            Why choose $DJT?
          </h3>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 pt-28 xl:pt-32 pb-16 gap-5">
            <div className="col-span-1 mb-16 xl:mb-0">
              <div className="bg-[#d429f3] px-3 rounded-[20px] relative pt-16 pb-16 h-full">
                <div className="max-w-[132px] mx-auto absolute -top-12 left-[50%] -translate-x-1/2 -translate-y-16">
                  <img src="/imgs/kitten-head-2 (1).png" alt="kitten-head-2 (1)" />
                </div>
                <p className="text-white font-titillium text-xl text-center">
                  Puss is a trending storyline built on the Solana blockchain, establishing itself as a prominent
                  presence in the world of Solana meme coins.
                </p>
              </div>
            </div>
            <div className="col-span-1 mb-16 xl:mb-0">
              <div className="bg-[#93fcec] px-9 rounded-[20px] relative pt-16 pb-16 h-full">
                <div className="max-w-[132px] mx-auto absolute -top-10 left-[50%] -translate-x-1/2 -translate-y-20">
                  <img src="/imgs/why-choose-1.png" alt="why-choose-1" />
                </div>
                <p className="text-[#333] font-titillium text-xl text-center">
                  Puss is set to transcend the typical memecoin status, incorporating numerous distinctive use cases and
                  utilities that contribute to the sustained growth of the Solana Ecosystem in the long run.
                </p>
              </div>
            </div>
            <div className="col-span-1 mb-16 xl:mb-0">
              <div className="bg-[#93fcec] px-9 rounded-[20px] relative pt-16 pb-16 h-full">
                <div className="max-w-[132px] mx-auto absolute -top-10 left-[50%] -translate-x-1/2 -translate-y-20">
                  <img src="/imgs/why-choose-2.png" alt="why-choose-2" />
                </div>
                <p className="text-[#333] font-titillium text-xl text-center">
                  The Puss movement is unparalleled on the Solana blockchain, gathering cat enthusiasts from across the
                  crypto sphere and uniting them as a cohesive community.
                </p>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="bg-[#93fcec] px-8 rounded-[20px] relative pt-16 pb-10 h-full">
                <div className="max-w-[132px] mx-auto absolute -top-10 left-[50%] -translate-x-1/2 -translate-y-20">
                  <img src="/imgs/why-choose-3.png" alt="why-choose-3" />
                </div>
                <p className="text-[#333] font-titillium text-xl text-center">
                  As the Solana blockchain and its coin experienced a significant resurgence in recent months, Puss is
                  poised to establish a new standard for meme coins on Solana. There’s a new cat in town, ready to make
                  its mark.
                </p> 
              </div>
            </div>
            <div className="absolute bottom-0 w-full left-0 overflow-hidden">
              <Curve />
            </div>
          </div>
          <div className="flex items-center justify-center lg:mt-3 mb-16 lg:mb-32">
            <a
              href="/"
              className="bg-herobtngrad text-white font-coiny rounded-full font-normal  text-center inline-block w-64 py-4 text-base uppercase"
            >
              Get $DJT Token
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseSec;
