import aboutImg from "../../assets/aboutUs.png";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="text-center pt-8">
        <button className="py-4 px-8 border border-[#FF6A1A] text-[#FF6A1A] text-lg font-bold rounded-lg text-center">
          See All Products
        </button>
      </div>
      <div className="lg:flex items-center  justify-center gap-16">
        <div className="flex-1/2">
          <img className="w-full" src={aboutImg} alt="" />
        </div>
        <div className="flex-1/2 space-y-4">
          <p className="bg-[#749B3F1A] w-[20%] py-1  text-[#749B3F] text-xl font-medium rounded-lg text-center">
            About Us
          </p>
          <h2 className="text-[#212337] font-medium text-5xl">
            About Fresh Harvest
          </h2>
          <p className="text-sm text-[#4A4A52] text-justify">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <button className="py-4 px-8 border border-[#FF6A1A] text-[#FF6A1A] text-lg font-bold rounded-lg text-center">
            Reed More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
