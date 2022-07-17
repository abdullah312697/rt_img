import { useEffect } from 'react';
import db from "../Firebase.js";
import { collection, onSnapshot,deleteDoc,doc} from "firebase/firestore";

const Delete = () => {
    useEffect(() => {
        onSnapshot(
            collection(db, "images"), 
            (snapshot) => {
                snapshot.docs.map(docId =>
                    deleteDoc(doc(db, "images", docId.id))
                );
                console.log("deleted all");
            });
    }, []);
};
 
export default Delete;