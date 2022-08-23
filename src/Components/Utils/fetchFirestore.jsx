import { query, orderBy, where, collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (id) => {
  let q;
  if (id) {
    q = query(collection(db, "comics"), where("category", "==", parseInt(id)));
  } else {
    q = query(collection(db, "comics"), orderBy("name"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataFromFirestore;
};

export const firestoreFetchDetail = async (idItem) => {
  const docRef = doc(db, "comics", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    console.log("No such document!");
  }
};
