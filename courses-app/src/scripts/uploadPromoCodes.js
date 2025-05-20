import { db } from "../firebase/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import promoCodes from "../data/PromoCodeDatabase.js";

// Upload each promocode into the "promocode" collection
const uploadPromoCodes = async () => {
  for (const code of promoCodes) {
    try {
      // Use promoCode.id as document ID
      await setDoc(doc(db, "promoCodes", code.id.toString()), code);
      console.log(`✅ Uploaded: Promo code ${code.code}`);
    } catch (error) {
      console.error(`❌ Error uploading promo code ${code.code}:`, error);
    }
  }
  console.log("🚀 All promo codes uploaded to Firestore");
};

uploadPromoCodes();
