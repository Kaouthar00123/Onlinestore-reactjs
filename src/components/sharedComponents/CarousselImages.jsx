import React, { useState } from "react";
import { Carousel } from "flowbite-react";

export default function CarousselImages(props) {
  const images = props.images;
  const [zoomIn, setzoomIn] = useState(false);
  return (
    <div
      className={"h-96 sm:h-96 md:h-[90vh] xl:h-96 2xl:h-96 " + props.className}
    >
      <Carousel slide={false}>
        {images.map((image) => (
          <img
            src={image.src}
            alt={image.alt}
            className={`h-full w-full object-scale-down overflow-hidden transition-all ${
              zoomIn ? "scale-125 cursor-zoom-out" : "scale-100 cursor-pointer"
            }`}
            onClick={() => setzoomIn(!zoomIn)}
          />
        ))}
      </Carousel>
    </div>
  );
  //   return (
  //     <Carousel className="rounded-xl">
  //       <img
  //         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
  //         alt="image 1"
  //         className="h-full w-full object-cover"
  //       />
  //       <img
  //         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
  //         alt="image 2"
  //         className="h-full w-full object-cover"
  //       />
  //       <img
  //         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
  //         alt="image 3"
  //         className="h-full w-full object-cover"
  //       />
  //     </Carousel>
  //   );
}

// export default function CarousselImages({ defaultIndex = 1 }) {
//   const [activeIndex, setActiveIndex] = useState(defaultIndex);

//   return (
//     <Carousel
//       className="rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
//       {images.map((image) => (
//         <img
//           src={image.src}
//           alt={image.alt}
//           className="h-full w-full object-cover"
//         />
//       ))}
//     </Carousel>
//   );
// }
