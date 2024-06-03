import { About, BuySec, ChooseSec, FolllowSec, Hero, Tokenomics } from "../../components/Landing";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";

const Home = () => {
  return (
    <>
      <div className="bg-transparent bg-herograd">
        <Header />
        {/* Hero Section  */}
        <Hero />
        {/* End Hero Section  */}
      </div>

      {/* About Section  */}
      <About />
      {/* End About Section  */}

      {/* Buy Secion  */}
      <BuySec />
      {/* End Buy Secion  */}

      {/* Token Secion  */}
      <Tokenomics />
      {/* End Token Secion  */}

      {/* Follow Section  */}
      <FolllowSec />
      {/* End Follow Section  */}

      {/* Choose Sec  */}
      <ChooseSec />
      {/* End Choose Sec  */}

      {/* Footer  */}
      <Footer />
      {/* End Footer  */}
    </>
  );
};

export default Home;
