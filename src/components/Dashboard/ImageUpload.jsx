import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import onImageChange from '../../tools/uploader';

const ImageUpload = ({ imageState, setImageState }) => {
  const [LoadingBar, setLoadingBar] = useState(false);
  const [Image, setImage] = useState(null);

  return (
    imageState ? (
      <>
        <img src={imageState} alt="Project" className="w-32 h-32" />
        <div className="flex gap-2">
          {
                LoadingBar && (
                <div className="flex flex-col">
                  <progress className="progress progress-primary w-56" value={LoadingBar} max="100" />
                  {LoadingBar === 100 && (
                    <>
                      Upload Completed
                      <button
                        type="button"
                        className="btn btn-sm btn-error"
                        onClick={
                            () => { setImageState(false); setLoadingBar(false); }
                            }
                      >
                        <MdCancel
                          size={20}
                        />
                      </button>
                    </>
                  )}
                </div>
                )
            }
          {!LoadingBar
         && (
         <>
           <button
             type="button"
             className="btn btn-sm btn-success"
             onClick={() => onImageChange(Image, setImageState, setLoadingBar)}
           >
             <BsCheck size={20} />
           </button>
           <button
             type="button"
             className="btn btn-sm btn-error"
             onClick={
                () => { setImageState(false); setLoadingBar(false); }
                }
           >
             <MdCancel
               size={20}
             />
           </button>
         </>
         )}
        </div>

      </>
    ) : (
      <input
        onChange={
          (e) => {
            setImageState(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
          }
      }
        type="file"
        accept="image/png, image/gif, image/jpeg"
        className="file-input border-0 file-input-primary max-w-sm "
      />
    )
  );
};

export default ImageUpload;
