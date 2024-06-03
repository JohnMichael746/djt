const About = () => {
  return (
    <section className="px-4 pad-left scroll-mt-36" id="about">
      <div className="max-w-4xl px-4 py-16 mx-auto md:py-24 xl:px-0">
        <span></span>
        <div className="inner-about" style={{ background: "#df1731", zIndex: 5, position: "relative" }}>
          <div className="flex items-center justify-center mb-6">
            <img src="/imgs/kitten-head-2.png" alt="kitten-head" className="max-w-[107px]" />
          </div>
          <h3 className="block text-4xl text-center text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-coiny bg-aboutgrad bg-clip-text">
            About $DJT
          </h3>

          <p className="mt-4 text-center text-white font-titillium sm:text-xl mb-7">
            Trump Media & Technology Group on the Solana network brings a whisker-twitching twist to the crypto world. With lightning-fast transactions on Solana's high-performance blockchain, $DJT combines the charm of
            cat memes with the efficiency  of decentralized finance. Embrace the blend of fun and innovation as you navigate the crypto landscape with our feline-inspired token.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="inline-block w-64 py-4 text-base font-normal text-center text-white uppercase rounded-full bg-herobtngrad font-coiny"
            >
              Get $DJT Token
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
