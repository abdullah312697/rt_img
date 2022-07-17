import React, { useEffect, useState } from 'react';
import db from "../Firebase.js";
import { collection, onSnapshot} from "firebase/firestore";
import Getimg from './Getimg';

const Imgviewr = () => {

    const [img, setimg] = useState([]);
    useEffect(() => {
        onSnapshot(
            collection(db, "images"), 
            (snapshot) => {
                setimg(snapshot.docs.map((doc) => ({"id": doc.id, "data": doc.data()})));
            });
    }, []);
    /*jshint ignore : start*/
    return(
        <div className="imgviewrpr">
            {
                img.map(d => {
                    return(<Getimg img = {d.data.img} key={d.id}/>)
                })
            }
        </div>
    )
    /*jshint ignore : end*/ 

};
 
export default Imgviewr;