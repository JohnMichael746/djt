import { useEffect } from "react";
import { Curve, LinkIcon2, TokenIcon } from "../../assets/constants";

// import { Connection, PublicKey, Transaction } from "@solana/web3.js";

const Tokenomics = () => {
  useEffect(() => {
    window.Jupiter.init({
      displayMode: "integrated",
      endpoint: "https://api.metaplex.solana.com",
      integratedTargetId: "integrated-terminal",
      strictTokenList: false,
      formProps: {
        fixedOutputMint: true,
      },
    });
  }, []);
  return (
    <div className="bg-transparent bg-tokengrad scroll-mt-10" id="tokenomics">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-16 md:py-24">
            <div>
              <div className="text-[#09eab4] flex items-center justify-center mb-6">
                <TokenIcon />
              </div>
              <h3 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-tokenheadinggrad text-transparent bg-clip-text block font-coiny">
                Tokenomics
              </h3>
              <div className="max-w-6xl sm:px-4 mx-auto">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
                  <div className="col-span-1">
                    <div className="flex flex-col space-y-5 lg:pb-8  lg:pt-8 pt-8">
                      <div className="border-4 border-[#09eab4] rounded-[20px] px-4 py-2 flex items-center justify-between">
                        <h4 className="font-coiny text-[#09eab4] text-[28px]">Supply</h4>
                        <span className="text-[#bcbabc] text-xl uppercase font-titillium">1 billion</span>
                      </div>
                      <div className="border-4 border-[#09eab4] rounded-[20px] px-4 py-2 flex items-center justify-between">
                        <h4 className="font-coiny text-[#09eab4] text-[28px]">Symbol</h4>
                        <span className="text-[#bcbabc] text-xl uppercase font-titillium">$DJT</span>
                      </div>
                      <div className="border-4 border-[#09eab4] rounded-[20px] px-4 py-2 flex items-center justify-between">
                        <h4 className="font-coiny text-[#09eab4] text-[28px]">Tax</h4>
                        <span className="text-[#bcbabc] text-xl uppercase font-titillium">0/0</span>
                      </div>
                      <div className="border-4 border-[#09eab4] rounded-[20px] px-4 py-2 flex items-center justify-between">
                        <h4 className="font-coiny text-[#09eab4] text-[28px]">Liquidity</h4>
                        <span className="text-[#bcbabc] text-xl capitalize font-titillium">Burned Forever</span>
                      </div>
                      <div className="gap-1 border-4 flex-wrap border-[#09eab4] rounded-[20px] px-4 pt-2 pb-5 md:flex-row flex-col flex md:items-center justify-between">
                        <h4 className="font-coiny text-[#09eab4] text-[28px]">Token Address</h4>
                        <div className="flex items-center">
                          <input
                            type="button"
                            readOnly
                            value={"9CGKVEUMTD1SgX6PddnTXB6... "}
                            title="copy address"
                            onClick={() => navigator.clipboard.writeText("9CGKVEUMTD1SgX6PddnTXB6...")}
                            className="w-full text-lg sm:text-[21px] text-white/90 bg-transparent font-sans cursor-pointer"
                          />
                          <button
                            onClick={() => navigator.clipboard.writeText("9CGKVEUMTD1SgX6PddnTXB6...")}
                            className="flex-none text-lg sm:text-[21px]"
                          >
                            📑
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div id="integrated-terminal"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-4 sm:pt-0 sm:py-7 z-10 relative">
                  <a
                    href="/"
                    className="leading-none bg-herobtngrad text-white font-coiny rounded-full font-normal border-4 text-center flex items-center space-x-2.5 justify-center w-64 py-5 text-lg uppercase border-white"
                  >
                    <span>Buy on Jupiter</span>
                    <LinkIcon2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Curve  */}
        <div className="absolute bottom-0 w-full left-0 overflow-hidden">
          <Curve />
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
