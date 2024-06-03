import { TelegramIcon, TwitterIcon } from "../../assets/constants";

const FolllowSec = () => {
  return (
    <section className="scroll-mt-12" id="social">
      <div className="max-w-6xl px-4 py-16 mx-auto md:py-24 lg:px-0">
        <div className="flex items-center justify-center mb-8">
          <img
            src="/imgs/home-the-kitten.png"
            alt="home-the-kitten"
            className="max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
          />
        </div>
        <h3 className="block text-4xl text-center text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-coiny bg-aboutgrad bg-clip-text">
          Follow $DJT on social media
        </h3>
        <div className="flex items-center justify-center pt-6 space-x-3">
          <a
            href="https://x.com/djt_solana?s=21"
            target="_blank"
            rel="noreferrer"
            className="w-[90px] text-white h-[90px] rounded-full border-4 border-[#09eab4] flex items-center justify-center"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://t.me/DJTofficial"
            target="_blank"
            rel="noreferrer"
            className="w-[90px] bg-[#2ca5e0] text-white h-[90px] rounded-full border-4 border-[#09eab4] flex items-center justify-center"
          >
            <TelegramIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FolllowSec;
