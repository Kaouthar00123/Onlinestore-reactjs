import React from "react";
import Card from "./Card";

export default function SectionShopping(props) {
  return (
    <section id={props.id}>
      {/* Section title */}
      <div className="flex flex-col gap-3">
        <h2 className="text-left text-3xl font-semibold mt-[5%]">
          {props.title}
        </h2>
        <hr />
      </div>
      {/* Section body */}
      <div
        id="cards"
        className="mt-[5%] mx-auto grid max-[500px]:grid-cols-1 grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-4"
      >
        {props.products.map((product) => (
          <Card
            id={product.id}
            img-url={product["img-url"]}
            name={product.name}
            rate={product.rate}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
