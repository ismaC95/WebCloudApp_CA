import { db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import reviewsData from "../data/ReviewsDataBase.js";

const uploadReviews = async () => {
  for (const review of reviewsData) {
    try {
      await setDoc(doc(db, "reviews", review.id.toString()), review);
      console.log(`Uploaded: Review from ${review.name}`);
    } catch (error) {
      console.error(` Error uploading review from ${creview.name}:`, error);
    }
  }
  console.log("All reviews uploaded to Firestore");
};

uploadReviews();
