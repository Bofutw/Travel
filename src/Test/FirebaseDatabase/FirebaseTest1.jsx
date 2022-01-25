import React, { useRef, useState } from "react";

import { database, storage } from "../../Firebase/firebase-config";
import firebase from "firebase/compat/app";
import { UploadFileSharp } from "@mui/icons-material";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
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
    uploadFiles(file);
    setSrc(src2);
    console.log(src2);


  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const uploadTask = storage.ref(`files/7${file.name}5`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
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
        <input type="file" name="" id="" />
        <button type="submit">Send</button>
      </form>
      <img src={src} alt="" />
    </div>
  );
}

export default FirebaseTest1;
