import { db } from "../firebase/firebase.js";
import courses from "../data/CoursesDatabase.js";
import { doc, setDoc } from "firebase/firestore";

// Upload each course into the "courses" collection
const uploadCourses = async () => {
  for (const course of courses) {
    try {
      // Use course.id as document ID
      await setDoc(doc(db, "courses", course.id.toString()), course);
      console.log(`Uploaded: ${course.title}`);
    } catch (error) {
      console.error(`Error uploading ${course.title}:`, error);
    }
  }
  console.log("All courses uploaded to Firestore");
};

uploadCourses();
