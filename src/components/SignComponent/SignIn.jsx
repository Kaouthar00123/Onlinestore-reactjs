// import React from "react";
// import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import { Link } from "react-router-dom";

// export default function SignIn() {
//   return (
//     <div className="flex gap-5 sm:flex-col">
//       {/* Account infos */}
//       <div className="w-2/3 flex flex-col gap-3">
//         {/* Logo part */}
//         <div className="max-w-[50px] max-h-[50px] min-w-[20px] min-h-[20px] flex align-middle justify-center items-center gap-2">
//           <svg
//             width="1em"
//             height="1em"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             viewBox="0 0 24 24"
//           >
//             <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
//             <path d="M9.5 17H6V3H4" />
//             <path d="m6 5 14 1-.615 4.302M12.5 13H6m11.8 7.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411L17.8 20.817z" />
//           </svg>
//           <span className="text-lg font-semibold text-black">LogoSpace</span>
//         </div>
//         {/* Account part */}
//         <div>
//           <h2>Create an account</h2>
//           <h5 className="text-gray-500 text-md font-light">
//             I already have an account{" "}
//             <span>
//               <Link to="">Sign in</Link>
//             </span>
//           </h5>
//           <form
//             className="flex max-w-md w-full flex-col gap-4"
//             autocomplete="on"
//           >
//             <div>
//               <Label
//                 className="mb-2 block"
//                 htmlFor="email1"
//                 value="Your email"
//               />
//               <TextInput
//                 id="email1"
//                 type="email"
//                 placeholder="name@flowbite.com"
//                 required
//               />
//             </div>
//             <div className="relative">
//               <Label
//                 className="mb-2 block"
//                 htmlFor="password1"
//                 value="Your password"
//               />
//               <div className="relative">
//                 <TextInput
//                   id="password1"
//                   type="password"
//                   placeholder="Minimun 8 carateres..."
//                   required
//                 />
//                 <div className="absolute">
//                   {/* eye icon */}
//                   <svg
//                     width="1em"
//                     height="1em"
//                     fill="currentColor"
//                     viewBox="0 0 1024 1024"
//                   >
//                     <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
//                   </svg>
//                 </div>
//               </div>

//               {/* eye hidden icon */}
//               <svg
//                 width="1em"
//                 height="1em"
//                 fill="currentColor"
//                 viewBox="0 0 1024 1024"
//               >
//                 <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z" />
//                 <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z" />
//               </svg>
//             </div>
//             <div id="boxes">
//               <div className="flex items-center gap-2">
//                 <Checkbox id="remember" />
//                 <Label htmlFor="remember">Save the password</Label>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Checkbox id="remember" />
//                 <Label htmlFor="remember">
//                   I have read and accept the{" "}
//                   <span className="text-black underline">Privacy Policy</span>
//                 </Label>
//               </div>
//             </div>
//             <Button type="submit" className="bg-black text-gray-50">
//               Create an account
//             </Button>
//           </form>
//           <div className="text-gray-700 text-ms font-medium">
//             <Link to="">Need A help ?</Link>
//           </div>
//           <footer className="text-gray-400 text-sm">
//             © All rights reserved. Made by{" "}
//             <span className="text-black">Kaouthar Esh</span>
//           </footer>
//         </div>
//       </div>
//       {/* Promotion part */}
//       <div className="w-1/3 flex flex-col"></div>
//     </div>
//   );
// }
