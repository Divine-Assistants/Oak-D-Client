import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutPage = () => {
  useEffect(() => {
    const handleClick = async () => {
      const stripe = await loadStripe("PUBLIC_KEY");
      
      const { error } = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [
          {
            price: "PRICE_ID",
            quantity: 1,
          },
        ],
        successUrl: "https://your-website.com/success",
        cancelUrl: "https://your-website.com/cancel",
      });

      if (error) {
        console.error("Error:", error);
      }
    };
    handleClick();
  }, []);

 
};

export default CheckoutPage;
