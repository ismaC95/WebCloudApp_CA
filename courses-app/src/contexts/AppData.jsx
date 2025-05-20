import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [coursesSnap, instructorsSnap, reviewsSnap] = await Promise.all([
          getDocs(collection(db, "courses")),
          getDocs(collection(db, "instructors")),
          getDocs(collection(db, "reviews")),
        ]);

        setCourses(coursesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setInstructors(instructorsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setReviews(reviewsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <AppDataContext.Provider value={{ courses, instructors, reviews }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
