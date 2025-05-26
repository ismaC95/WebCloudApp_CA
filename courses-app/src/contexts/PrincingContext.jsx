import { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";
import { useAppData } from "./AppData";

const PricingContext = createContext();

export const PrincingProvider = ({ children }) => {
    const {addedToCart} = useCart();
    const {promoCodes} = useAppData();

    //PromoCode functionality
    const [promoCode, setPromoCode] = useState([]);

    //promo code input
    const [promoCodeInput, setPromoCodeInput] = useState('');

    //Input promoCode doesn't exist
    const [promoError, setPromoError] = useState(false);

    const totalPrice = addedToCart.reduce((sum, course) => sum + course.price, 0);
    const subtotalPrice = addedToCart.reduce((sum, course) => sum + course.originalPrice, 0);
    const subtotalDiscount = addedToCart.reduce((sum, course) => sum + (course.originalPrice - course.price), 0); 

    const promoCodeFlag = (promoCode.length > 0) ? true : false;


    const discountPromoCode = (totalPrice)=> {
    let discountedPrice = totalPrice;
    const code = promoCode[0];

    if (code.discountType === "fixed"){
      discountedPrice = totalPrice - code.discountValue;
    }else{
      discountedPrice = totalPrice * (1 - code.discountValue / 100);
    }

    return discountedPrice;
    }
    
    const calculateTotalPrice = (totalPrice) => {
      let finalPrice = totalPrice;

      return promoCodeFlag ? (finalPrice = discountPromoCode(totalPrice)): finalPrice;
    }

    const applyPromoCode = () => {
        const matchedPromoCode = promoCodes.find(promo => promo.code.trim().toLowerCase() === promoCodeInput.toLowerCase());

        if (matchedPromoCode){
        setPromoCode([matchedPromoCode]);
        setPromoError(false);
        } else{
        setPromoCode([]);
        setPromoError(true);
        }
    }

    return (
        <PricingContext.Provider
            value={{
                promoCode,
                promoCodeInput,
                promoError,
                setPromoCodeInput,
                applyPromoCode,
                subtotalPrice,
                subtotalDiscount,
                totalPrice,
                calculateTotalPrice,
                setPromoError
            }}>
                {children}
            </PricingContext.Provider>
    )
}

export const usePricing = () => useContext(PricingContext);