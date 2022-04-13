import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { GET_PERSONAS } from "./actionsTypes";

export function getPersonas() {
  return async function (dispatch) {
    try {
      const res = await getDocs(collection(db, "persona"));

      return dispatch({
        type: GET_PERSONAS,
        payload: res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
}
