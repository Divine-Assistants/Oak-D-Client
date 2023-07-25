// import { DomesticContext } from "@/context/DomesticWrapper";
// import React, { useEffect, useContext } from "react";
// import { FaArrowRight, FaStripe, FaWindowClose } from "react-icons/fa";
// import { ClientDataType } from "@/pages/quote/domestic";

// interface CheckoutType {
//   data: ClientDataType;
//   registerPackage: (arg: ClientDataType) => void;
//   // onchange: any;
// }

// interface DebitCardInputProps {
//   onchange: (value: string) => void;
// }

// export function Checkout({ data, registerPackage }: CheckoutType) {
//   const {
//     trail,
//     setTrail,
//     value,
//     setValue,
//     icon,
//     setIcon,
//     paystatus,
//     setPaystatus,
//   } = useContext(DomesticContext);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = event.target.value.replace(/\D/g, "");
//     const formattedValue = inputValue
//       .replace(/(\d{4})/g, "$1 ")
//       .trim()
//       .slice(0, 19);
//     setValue(formattedValue);
//     // onchange(formattedValue);
//   };

//   useEffect(() => {
//     const firstDigit = value.charAt(0);
//     switch (firstDigit) {
//       case "4":
//         setIcon("visacard");
//         break;
//       case "5":
//         setIcon("mastercard");
//         break;
//       case "6":
//         setIcon("discovercard");
//         break;
//       default:
//         setIcon("");
//         break;
//     }
//   }, [value]);

//   return (
//     <section
//       className="text-[#1E1E1E] "
//       style={{ display: trail === 4 ? "block" : "none" }}
//     >
//       <div className="w-[90%] md:w-[50%] m-auto  ">
//         <div className="mt-[84px] grid place-items-center gap-[10px] mb-[42px] ">
//           <h2 className="text-[18px] lg:text-[24px] font-[600] ">
//             Express checkout
//           </h2>

//           <button
//             className="bg-[#6772E5] rounded-[15px] py-[0px] px-[140px] md:px-[200px]   "
//             onClick={() => {
//               registerPackage(data);
//             }}
//           >
//             <FaStripe size="80px" color="#FEFEFE" />{" "}
//           </button>
//         </div>
//         <div className="relative mb-[42px] border border-[#EFEFEF] md:w-[90%] md:m-auto md:mb-[42px] ">
//           <p className="font-[500] text-[18px] absolute top-[0px] translate-y-[-12px] left-[45%] bg-[#FEFEFE] w-[10%] rounded-full text-center ">
//             or
//           </p>
//         </div>
//         <div className="text-[18px] lg:text-[24px]">
//           <div className="font-[600] text-center mb-[28px] ">Pay with card</div>
//           <div className="font-[500] ">
//             <div className="mb-[20px] flex flex-col gap-[10px] ">
//               <label htmlFor="">Card Holders Name</label>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 placeholder="Card name"
//                 className="pl-[40px] py-[19px] rounded-[15px] border-2 border-[#D9D9D9] "
//               />
//             </div>
//             <div className="mb-[20px] flex flex-col gap-[10px] ">
//               <label htmlFor="">Card Number</label>
//               <div className="relative">
//                 <input
//                   type="tel"
//                   name=""
//                   id=""
//                   placeholder="1234 - 5678 - 9123 - 4567"
//                   inputMode="numeric"
//                   autoComplete="cc-number"
//                   value={value}
//                   onChange={handleChange}
//                   className="pl-[20%] py-[19px] rounded-[15px] border-2 border-[#D9D9D9] w-[100%] "
//                 />
//                 <div className="absolute top-[23%] left-[5%]">
//                   <div className="debit-card-icon">
//                     {icon && <img src={`/img/${icon}.svg`} alt={icon} />}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center mb-[50px] gap-[26px] justify-center ">
//               <div className="flex flex-col gap-[10px]">
//                 <label htmlFor="">CVV</label>
//                 <input
//                   type="number"
//                   name=""
//                   id=""
//                   placeholder=". . ."
//                   className=" py-[19px] rounded-[15px] border-2 border-[#D9D9D9] text-center w-[100%]"
//                 />
//               </div>
//               <div className="flex flex-col gap-[10px]">
//                 <label htmlFor="">Expiry Date</label>
//                 <input
//                   type="number"
//                   name=""
//                   id=""
//                   placeholder="06 / 24"
//                   className=" py-[19px] rounded-[15px] border-2 border-[#D9D9D9] text-center w-[100%]"
//                 />
//               </div>
//             </div>

//             <div className="">
//               <button
//                 className="flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[55px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] md:px-[135px] md:py-[27px] md:mr-[10%] "
//                 onClick={() => {
//                   setPaystatus("successful");

//                   console.log(paystatus);
//                 }}
//               >
//                 <p>Proceed to shipping summary</p>
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="bg-[#1E1E1E]/[.4] h-[120%] md:h-[150%] w-[100vw] z-10 absolute top-0 bottom-0 pb-[100px] "
//         style={{ display: paystatus === "successful" ? "block" : "none" }}
//       >
//         <div className="bg-[#FEFEFE] w-[90%] md:w-[60%] m-auto mt-[390px] md:mt-[590px] pt-[50px] pb-[32px] px-[23px] text-center rounded-[15] ">
//           <div className="w-fit m-auto">
//             <img src="/img/success.svg" alt="successful Transaction" />
//           </div>
//           <p className="text-[#13BA00] text-[20px] font-[600] text-center mb-[20px] md:text-[32px] ">
//             Payment Successful
//           </p>
//           <p className="text-[16px] font-[500] text-[#1E1E1E] mb-[20px] md:text-[20px] md:w-[80%] md:m-auto md:mb-[20px] ">
//             Congratulations, you have successfully made payments for OAK & D
//             shipping services within Canada. Our customer representative will
//             contact you shortly.
//           </p>
//           <div className="flex items-center gap-[18px] justify-center ">
//             <button
//               className="px-[15px] py-[21px] md:px-[35px] rounded-[10px] bg-[#FEFEFE] border-2 border-[#1E1E1E] text-[#1E1E1E] font-[500] md:text-[20px] "
//               onClick={() => {
//                 setTrail(4);
//               }}
//             >
//               View Invoice
//             </button>
//             <button className="px-[25px] py-[21px] md:px-[45px] rounded-[10px] bg-[#13BA00] text-[#FEFEFE] font-[500] md:text-[20px] ">
//               Continue
//             </button>
//           </div>
//         </div>

//         <div className="bg-[#FEFEFE] w-[90%] md:w-[60%] m-auto mt-[390px] md:mt-[590px] pt-[50px] pb-[32px] px-[23px] text-center rounded-[15px] hidden ">
//           <div
//             className="w-fit ml-[90%]"
//             onClick={() => {
//               setPaystatus("");
//               console.log(paystatus);
//             }}
//           >
//             <FaWindowClose size="50px" />
//           </div>
//           <div className="w-fit m-auto mb-[43px]">
//             <img src="/img/failed.svg" alt="successful Transaction" />
//           </div>
//           <div className="flex items-center gap-[18px] justify-center ">
//             <button
//               className="px-[15px] py-[21px] md:px-[35px] rounded-[10px] bg-[#1E1E1E] border-2 border-[#1E1E1E] text-[#FEFEFE] font-[500] md:text-[20px] "
//               onClick={() => {
//                 setPaystatus("");
//                 console.log(paystatus);
//               }}
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
