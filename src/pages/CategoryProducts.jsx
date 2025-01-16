import React, { useEffect, useState } from "react";
import Card from "../components/ShoppingPage/Card";
import Filter from "../components/ProductDetails/Filter";
import SearchComponent from "../components/sharedComponents/SearchComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlaceHolderCard from "../components/ShoppingPage/PlaceHolderCard";
import { div } from "framer-motion/client";
import { CiFilter } from "react-icons/ci";
import ListMenu from "../components/ProductDetails/ListMenu";

const apiUrl = "http://localhost:4000/products";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  // {
  //   id: 0,
  //   name: "Category",
  //   options: [
  //     { value: "new-arrivals", label: "New Arrivals", checked: false },
  //     { value: "sale", label: "Sale", checked: false },
  //     { value: "travel", label: "Travel", checked: false },
  //     { value: "organization", label: "Organization", checked: false },
  //     { value: "accessories", label: "Accessories", checked: false },
  //   ],
  // },
  {
    id: 1,
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: false },
    ],
  },
  {
    id: 2,
    name: "Color",
    options: [
      { value: "black", label: "Black", checked: false },
      { value: "white", label: "White", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
];

function filterProducts(products, filter) {
  if (!products) return null;
  return products.filter((oneproduct) => {
    return (
      // filter[0].includes(oneproduct.categorie) &&
      oneproduct.sizes.map((x) => filter[1].includes(x)).includes(true) &&
      oneproduct.colors.map((x) => filter[2].includes(x)).includes(true)
    );
  });
}

export default function CategoryProducts() {
  const [products, setproducts] = useState(null);
  const [filterValue, setfilterValue] = useState([]);
  console.log("filterValue: ", filterValue);
  let params = useParams();

  useEffect(() => {
    axios
      .get(apiUrl, {
        params: {
          categorie: params.categoryid,
        },
      })
      .then((response) => {
        setproducts(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <main id="Shopping" className="w-[100%] h-[100%] mt-[2%]">
      {/* <h2 className="text-center text-2xl font-semibold m-5">
        Shopping section
      </h2> */}
      <header className="h-[3rem] my-[2%]">
        <SearchComponent />
      </header>
      <section>
        <div id="shopping-content">
          {/* breadcrumb menu filtrage and descrption */}
          {/* Filtrage */}
          <div id="filter" className="flex items-center flex-wrap	gap-5">
            <button
              className="flex flex-row justify-center items-center gap-2"
              onClick={() => setproducts(filterProducts(products, filterValue))}
            >
              <div className="inline">
                <CiFilter className="inline dark:text-white" />
              </div>
              <span className="dark:text-white">Filter</span>
            </button>
            {filters.map((onefilter) => (
              <ListMenu item={onefilter} setfilterValue={setfilterValue} />
            ))}
          </div>
          {/* End Filtering */}
          <div>
            <div
              id="category-header"
              className="mt-5 mx-[5%] p-2 text-center text-base text-gray-800 font-sans"
            >
              {/* menu */}
              <h4 className="my-3 text-base text-gray-900 font-semibold">
                Description de la categorie
              </h4>
              <p
                id="descrption-category"
                className="text-sm text-gray-600 px-2 text-center"
              >
                Les outils électriques sont utilisés dans les travaux lourds
                Pour gagner le tempts et l'efforts. une large gamme d'outils
                électriques est disponible chez ChekTools, les outils
                électriques sont généralement plus puissants que les outils à
                batterie. Nous avons des marques populaires d'outils électriques
                tels que Makita, Bosch, Worcraft, Crown, Total Tools, Honest
                Pro, EmTop, Stanley, Tolsen, Metabo, Karcher, Stihl, Power Plus,
              </p>
            </div>
            {/* Products part */}
            {!products ? (
              <PlaceHolderCard className="mx-[5%]" />
            ) : products.length == 0 ? (
              <div className="w-full m-[5%] flex justify-center text-center text-xl text-gray-700">
                La list est vide
              </div>
            ) : (
              <div
                id="cards"
                className="mt-[5%] mx-auto grid max-[500px]:grid-cols-1 grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6 md:grid-cols-3 md:gap-4"
              >
                {products.map((product) => (
                  <Card
                    id={product.id}
                    img-url={product["img-url"]}
                    name={product.name}
                    rate={product.rate[0]}
                    price={product.price}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
