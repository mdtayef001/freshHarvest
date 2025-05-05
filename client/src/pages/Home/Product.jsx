import { useState } from "react";
import { products } from "../../assets/Products/Product";
import SectionHeader from "../../components/SectionHeader";
import ProductsCard from "../../components/ProductsCard";

const Product = () => {
  const [product, setProduct] = useState(products);

  return (
    <section className="mt-52 max-w-[85%] mx-auto">
      <SectionHeader
        title={"Our Products"}
        heading={"Our Fresh Products"}
        subheading={
          "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        }
      />

      <div className="mt-4 mb-8">
        <ul className="flex items-center justify-center gap-6 ">
          <li className="py-3 px-6 text-lg rounded-lg bg-[#749B3F] text-white">
            All
          </li>
          <li className="py-3 px-6 text-lg rounded-lg border border-[#D9D9D9] text-[#A6A6A6]">
            Fruits
          </li>
          <li className="py-3 px-6 text-lg rounded-lg border border-[#D9D9D9] text-[#A6A6A6]">
            Vegetables
          </li>
          <li className="py-3 px-6 text-lg rounded-lg border border-[#D9D9D9] text-[#A6A6A6]">
            Salad
          </li>
        </ul>
      </div>

      {/* card */}
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6 items-center">
        {product.map((item) => (
          <div key={item._id} className="rounded-[20px] py-2.5 px-3 shadow">
            <ProductsCard item={item} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="py-4 px-8 border border-[#FF6A1A] text-[#FF6A1A] text-lg font-bold rounded-lg mt-8 text-center">
          See All Products
        </button>
      </div>
    </section>
  );
};

export default Product;
