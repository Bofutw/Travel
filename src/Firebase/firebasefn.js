import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase-config";


export function uploadtofirebase(file, b) {
    const storageRef = ref(storage, `files/5${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    let a = "";

    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //console.log('Upload is ' + progress + '% done');
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
                console.log('File available at', downloadURL);

                b = downloadURL;


            });
        }
    );
}