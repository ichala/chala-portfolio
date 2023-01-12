import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../config/firebase';

function onImageChange(file, setImageState, setUploadProgress) {
  const storageRef = ref(
    storage,
    `/portfolio/images/${Date.now()}-${uuidv4()}`,
  );
  const uploadImage = uploadBytesResumable(storageRef, file);
  uploadImage.on(
    'state_changed',
    (snapshot) => {
      const progressPercent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      );
      setUploadProgress(progressPercent);
    },
    () => {
    },
    () => {
      getDownloadURL(uploadImage.snapshot.ref)
        .then((url) => {
          setImageState(url);
        });
    },

  );
}

export async function multiUpload(files, setGallery) {
  const results = [];
  setGallery([]);
  Array.from(files).forEach((file) => {
    const storageRef = ref(
      storage,
      `/portfolio/images/${Date.now()}-${uuidv4()}`,
    );
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        console.log(progressPercent);
      },
      () => {
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            results.push(url);
            setGallery((prevState) => [...prevState, url]);
          });
      },
    );
  });
}

export default onImageChange;
