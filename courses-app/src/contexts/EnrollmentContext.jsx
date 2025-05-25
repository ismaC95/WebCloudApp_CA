import { createContext, useContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import {  } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

const EnrollmentContext = createContext();

export function useEnrollment() {
  return useContext(EnrollmentContext);
}

export function EnrollmentProvider ({ children }) {
    const { currentUser } = useAuth();
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "enrollments"),
      where("userId", "==", currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEnrollments(data);
    });

    return () => unsubscribe();
  }, [currentUser]);

  //Add enrollment whenever the payment is successfull:
      const addEnrollment = async (userId, courseId) => {
          try {
          await addDoc(collection(db, "enrollments"), {
          userId,
          courseId,
          enrolledAt: serverTimestamp()
          });
      } catch (error) {
          console.error("Failed to add enrollment:", error);
      }
      };

    //Not allowing to have double enrollment
    const enrollmentExists = async (userId, courseId) => {
    const q = query(
        collection(db, "enrollments"),
        where("userId", "==", userId),
        where("courseId", "==", courseId)
    );
    const snapshot = await getDocs(q);
    return !snapshot.empty;
    };



  return (
    <EnrollmentContext.Provider value={{ enrollments, addEnrollment, enrollmentExists }}>
      {children}
    </EnrollmentContext.Provider>
  );
};

