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
            Behold the magnificent Trump Media & Technology Group, the ultimate MAGA 2024 dream machine! This glorious conglomerate, led by the inimitable Donald Trump, is the epitome of class, taste, and innovation, the stock of the summer!
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
