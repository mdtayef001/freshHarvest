import arrow from "../assets/arrow.png";
import offer from "../assets/special_offer.png";
import downloadApp from "../assets/Downlad_App.png";

const Banner = () => {
  return (
    <section className="max-w-[85%] mx-auto pt-[75px] relative">
      <div className="max-w-[660px]">
        <p className="text-xl font-medium py-1 px-3 bg-[#749B3F1A] rounded-lg max-w-2xs text-center text-[#749B3F]">
          Welcome to Fresh Harvest
        </p>
        <h1 className="text-[#212337] font-semibold text-[80px] mt-4 leading-[100%]">
          Fresh Fruits and Vegetables
        </h1>
        <p className="text-sm mt-4">
          At Fresh Harvests, we are passionate about providing you with the
          freshest <br /> and most flavorful fruits and vegetables
        </p>
        <button className="mt-8 py-4 px-8 rounded-lg text-white text-lg font-semibold bg-[#FF6A1A]">
          Shop Now
        </button>
      </div>
      <div className="w-[50%]">
        <img className=" w-14 mt-2 ml-32" src={arrow} alt="" />
      </div>
      <div className="w-[331px] ml-48 -mt-10">
        <img className="w-full" src={offer} alt="offer" />
      </div>
      <div className="mt-6 pb-[172px]">
        <p className="text-[#4A4A52] text-sm">Download Now: </p>
        <img
          className="w-[295px] mt-3 "
          src={downloadApp}
          alt="download_apps"
        />
      </div>
    </section>
  );
};

export default Banner;
