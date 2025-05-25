import { db } from "../firebase/firebase.js";
import instructors from "../data/InstructorDetails.js";
import allCourses from "../data/CoursesDatabase.js";
import { doc, setDoc } from "firebase/firestore";

const uploadInstructors = async () => {
  for (const instructor of instructors) {
    try {
      // Replace course IDs with full course objects
      const instructorCourses = allCourses.filter((course) =>
        instructor.courses.includes(course.id)
      );

      const instructorData = {
        ...instructor,
        courses: instructorCourses, // Replace IDs with full course objects
      };

      await setDoc(
        doc(db, "instructors", instructor.id.toString()),
        instructorData
      );

      console.log(`Uploaded: ${instructor.name}`);
    } catch (error) {
      console.error(`Error uploading ${instructor.name}:`, error);
    }
  }

  console.log("All instructors uploaded to Firestore");
};

uploadInstructors();
