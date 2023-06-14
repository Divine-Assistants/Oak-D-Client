// import { loadStripe } from "@stripe/stripe-js";
// // import { useEffect } from "react";

// export const CheckoutPage = async ({lineItems: []}) => {
//     let stripePromise = null;

//     const getStripe = ()=> {
//         if(!stripePromise){
//             stripePromise = loadStripe('')
//         }
//         return stripePromise
//     }

//     const stripe = await getStripe();

//     await stripe.redirectToCheckout({
//         mode: 'payment',
//         lineItems,
//         successURL: '', 
//         cancelUrl: ''

//     })
    
//   };
  