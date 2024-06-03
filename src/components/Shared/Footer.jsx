import { Curve, TelegramIcon, TwitterIcon } from "../../assets/constants";

const Footer = () => {
  return (
    <div className="bg-[#df1731]">
      <section className="relative">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-col items-center gap-5 pb-10 md:flex-row pt-36 md:pt-48 lg:pt-64 md:pb-16">
            <div className="w-1/2 md:w-[30%] md:p-2.5">
              <img src="/imgs/LOGO-PUSSY-2.png" alt="LOGO-PUSSY-2" />
            </div>
            <div className="md:w-[40%] md:p-2.5">
              <p className="text-center text-white font-titillium sm:text-xl">
                Be part of the PUSS movement now and play a role in
                making the world a more enjoyable and inclusive space for all!
              </p>
            </div>
            <div className="md:w-[30%] md:p-2.5">
              <div className="flex items-center justify-center pt-6 space-x-3">
                <a
                  href="https://twitter.com/PussTheKitten"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[90px] bg-black text-white h-[90px] rounded-full border-4 border-[#09eab4] flex items-center justify-center"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://t.me/pussthekitten"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[90px] bg-[#2ca5e0] text-white h-[90px] rounded-full border-4 border-[#09eab4] flex items-center justify-center"
                >
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#d419f3] py-8 text-center">
            <p className="text-[#bcbabc]">© 2024 $DJT • All Rights Reserved</p>
          </div>
        </div>
        {/* Kitty  */}
        <div className="absolute top-0 w-full left-0 overflow-hidden -translate-y-[45%] z-10">
          <div className="max-w-[150px] md:max-w-[200px] lg:max-w-[275px] mx-auto">
            <img src="/imgs/pussy-the-kitten-footer.gif" alt="pussy-the-kitten-footer" />
          </div>
        </div>
        {/* Curve  */}
        <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
          <Curve />
        </div>
      </section>
    </div>
  );
};

export default Footer;
