import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { CiFilter } from "react-icons/ci";
import ListMenu from "./ListMenu";

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
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

export default function Filter() {
  return (
    <div id="filter" className="flex items-center flex-wrap	gap-5">
      <button className="flex flex-row justify-center items-center gap-2">
        <div className="inline">
          <CiFilter className="inline dark:text-white" />
        </div>
        <span className="dark:text-white">Filter</span>
      </button>
      {filters.map((onefilter) => (
        <ListMenu item={onefilter} />
      ))}
    </div>
  );
}

// export default function Filter() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       <div>
//         {/* Filters */}
//         <form className="mt-4 border-t border-gray-200">
//           <h3 className="sr-only">Categories</h3>
//           {filters.map((section) => (
//             <Disclosure
//               key={section.id}
//               as="div"
//               className="border-t border-gray-200 px-4 py-6"
//             >
//               <h3 className="-mx-2 -my-3 flow-root">
//                 <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                   <span className="font-medium text-gray-900">
//                     {section.name}
//                   </span>
//                   <span className="ml-6 flex items-center">
//                     <PlusIcon
//                       aria-hidden="true"
//                       className="size-5 group-data-[open]:hidden"
//                     />
//                     <MinusIcon
//                       aria-hidden="true"
//                       className="size-5 group-[&:not([data-open])]:hidden"
//                     />
//                   </span>
//                 </DisclosureButton>
//               </h3>
//               <DisclosurePanel className="pt-6">
//                 <div className="space-y-6">
//                   {section.options.map((option, optionIdx) => (
//                     <div key={option.value} className="flex gap-3">
//                       <div className="flex h-5 shrink-0 items-center">
//                         <div className="group grid size-4 grid-cols-1">
//                           <input
//                             defaultValue={option.value}
//                             id={`filter-mobile-${section.id}-${optionIdx}`}
//                             name={`${section.id}[]`}
//                             type="checkbox"
//                             className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                           />
//                           {/* <svg
//                             fill="none"
//                             viewBox="0 0 14 14"
//                             className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
//                           >
//                             <path
//                               d="M3 8L6 11L11 3.5"
//                               strokeWidth={2}
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="opacity-0 group-has-[:checked]:opacity-100"
//                             />
//                             <path
//                               d="M3 7H11"
//                               strokeWidth={2}
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="opacity-0 group-has-[:indeterminate]:opacity-100"
//                             />
//                           </svg> */}
//                         </div>
//                       </div>
//                       <label
//                         htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                         className="min-w-0 flex-1 text-gray-500"
//                       >
//                         {option.label}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </DisclosurePanel>
//             </Disclosure>
//           ))}
//         </form>
//       </div>
//     </div>
//   );
// }
