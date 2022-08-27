import db, { storage } from "../../../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { POST_REDUCERS } from "../../../store/post-slice";
const collectionRef = collection(db, "Posts");

export function writePostData({
  userId,
  text,
  image,
  video,
  userName,
  timestamp,
  userPhoto,
}) {
  return (dispatch) => {
    if (image) {
      const imagesRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          dispatch(POST_REDUCERS.setLoading(true));
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },

        async () => {
          const imageDownloadURL = await getDownloadURL(
            uploadTask.snapshot.ref
          ).then((downloadURL) => {
            return downloadURL;
          });

          addDoc(collectionRef, {
            userId,
            text,
            image: imageDownloadURL,
            userName,
            userPhoto,
            timestamp,
          });

          dispatch(POST_REDUCERS.setLoading(false));
        }
      );
    } else if (video) {
      const videosRef = ref(storage, `videos/${video.name}`);
      const uploadTask = uploadBytesResumable(videosRef, video);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          dispatch(POST_REDUCERS.setLoading(true));
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const videoDownloadURL = await getDownloadURL(
            uploadTask.snapshot.ref
          ).then((downloadURL) => {
            return downloadURL;
          });
          addDoc(collectionRef, {
            userId,
            timestamp,
            text,
            userPhoto,
            video: videoDownloadURL,
            userName,
          });
          dispatch(POST_REDUCERS.setLoading(false));
        }
      );
    } else {
      addDoc(collectionRef, {
        userId,
        text,
        userName,
        userPhoto,
        timestamp,
      });
    }
  };
}


export function getPostData() {
  return (dispatch) => {
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (resp) => {
      const data = resp.docs.map((item) => item.data());
      dispatch(POST_REDUCERS.setPostDataFromFirebase({ data }));
    });
  };
}