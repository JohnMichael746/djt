import { Curve, LinkIcon } from "../../assets/constants";

const BuySec = () => {
  return (
    <div className="bg-[#1f1f1f]">
      <section className="relative">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-col items-center gap-5 py-16 md:flex-row md:py-24">
            <div className="w-full sm:w-[75%] md:w-1/2">
              <img src="/imgs/how-to-buy.png" alt="how-to-buy" />
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col space-y-6 md:space-y-8">
                <h3 className="block text-4xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl bg-buyheadinggrad bg-clip-text font-coiny">
                  How to buy $DJT
                </h3>
                <p className="font-titillium sm:text-xl text-[#bcbabc]">
                  You can purchase $DJT in different ways. We recommend downloading Phantom Wallet, purchasing SOL,
                  sending it to your Phantom address, and swapping using Phantom’s in-app wallet, or on a decentralized
                  exchange like Jupiter. You can purchase $DJT multichain using our integrated Mayan swap, or swap
                  using Jupiter if you already own some $SOL.
                </p>
                <a
                  href="/"
                  className="leading-none bg-herobtngrad text-white font-coiny rounded-full font-normal text-center flex items-center space-x-2.5 justify-center w-60 py-6 text-base uppercase"
                >
                  <span>Get Phantom</span>
                  <LinkIcon />
                </a>
              </div>
              <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
                <Curve />
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-white"></div>
        </div>
      </section>
    </div>
  );
};

export default BuySec;
