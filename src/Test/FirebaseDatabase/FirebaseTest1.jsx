import React, { useRef, useState } from "react";

import firebase from "firebase/compat/app";
import { UploadFileSharp } from "@mui/icons-material";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Firebase/firebase-config";

function FirebaseTest1() {
  const emailref = useRef("");
  // const dbRef = sRef(getDatabase());

  const [data, setData] = useState("");
  const [progress, setProgress] = useState(0);
  const [src, setSrc] = useState("");

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   get(child(dbRef, "/admin"))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };



  const handleSubmit = (e) => {
    e.preventDefault();

    const file = e.target[0].files[0];
    const src2 = URL.createObjectURL(file);
    const storageRef = ref(storage, `files/5${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);




    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        //   case 'paused':
        //     console.log('Upload is paused');
        //     break;
        //   case 'running':
        //     console.log('Upload is running');
        //     break;
        // }
      },
      (error) => {
        console.log(error.message);
        // Handle unsuccessful uploads
      },
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setSrc(downloadURL);
          console.log('File available at', downloadURL);
        });
      }
    );

  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h1>FIREBASE_TEST</h1>
      {/* <input type="text" name="" id="" ref={emailref} />
      <button onClick={handleClick}>送出</button> */}

      <form onSubmit={handleSubmit}>
        <input type="file" name="" id="" onChange={(e) => setSrc(URL.createObjectURL(e.target.files[0]))} />
        {console.log(src)}
        <button type="submit">Send</button>

      </form>
      <img src={src} alt="" />
    </div>
  );
}

export default FirebaseTest1;
