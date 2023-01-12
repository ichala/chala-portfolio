import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { multiUpload } from '../../tools/uploader';

const MultiImageUpload = ({ Gallery, setGallery }) => {
  const [Images, setImages] = useState([]);
  const [Uploaded, setUploaded] = useState(false);
  return (
    Gallery.length > 0 ? (
      <>
        <div className="flex flex-wrap gap-2">
          {Gallery.map((image) => (
            <img key={image} src={image} alt="Project" className="w-32 h-32" />
          ))}
        </div>
        <div className="flex gap-2">
          {!Uploaded && (
          <button
            type="button"
            className="btn btn-sm btn-success"
            onClick={
             async () => {
               await multiUpload(Images, setGallery);
               setUploaded(true);
             }
}
          >
            <BsCheck size={20} />
          </button>
          )}
          <button
            type="button"
            className="btn btn-sm btn-error"
          >
            <MdCancel
              size={20}
              onClick={
              () => {
                setGallery(false);
                setUploaded(false);
              }
              }
            />
          </button>
        </div>
      </>
    ) : (
      !Uploaded && (
      <input
        type="file"
        onChange={
        (e) => {
          setImages(e.target.files);
          setGallery(
            Array.from(e.target.files).map((file) => URL.createObjectURL(file)),
          );
        }
    }
        multiple
        accept="image/png, image/gif, image/jpeg"
        className="file-input border-0 file-input-primary max-w-sm "
      />
      )
    )
  );
};

export default MultiImageUpload;
