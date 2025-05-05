import { Link } from "react-router-dom";

const ProductsCard = ({ item }) => {
  return (
    <Link className="space-y-3 text-center">
      <div className="w-full h-52 bg-[#F4F6F6] rounded-2xl ">
        <img
          className="w-[200px] h-[200px] mx-auto rounded-2xl"
          src={item.image}
          alt=""
        />
      </div>
      <div className="space-y-2  text-lg">
        <p className="text-[#212337] font-medium"> {item.name}</p>
        <p className="text-[#4A4A52]">${item.price / 100}/kg</p>
      </div>
      <button className="w-full text-[#212337] text-lg py-3 border border-[#D9D9D9] rounded-lg cursor-pointer hover:bg-[#FF6A1A] hover:text-white transition-all ease-in-out duration-150">
        Add to cart
      </button>
    </Link>
  );
};

export default ProductsCard;
