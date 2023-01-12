import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import Select from 'react-select';

const options = [
  { value: 'fox', label: '🦊 Fox' },
  { value: 'Butterfly', label: '🦋 Butterfly' },
  { value: 'Honeybee', label: '🐝 Honeybee' },
];

const Dashboard = () => {
  const [Image, setImage] = useState(false);
  return (
    <>
      <div>ADD PROJECT</div>
      <div className="flex flex-col flex-wrap justify-center items-center gap-2  ">
        {/* Add Project Form */}
        <input type="text" className="input w-full input-sm input-primary" placeholder="Project title" />
        <Select
          options={options}
          isMulti
          isSearchable
          className="w-full"
        />
        {/* Image upload */}
        <label htmlFor="image" className="text-primary text-sm">
          Main Image
        </label>
        {
            Image ? (
              <>
                <img src={Image} alt="Project" className="w-32 h-32" />
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-success"
                  >
                    <BsCheck size={20} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-error"
                  >
                    <MdCancel
                      size={20}
                      onClick={
                    () => setImage(false)
                    }
                    />
                  </button>
                </div>

              </>
            ) : (
              <input
                onChange={
                (e) => setImage(URL.createObjectURL(e.target.files[0]))
            }
                type="file"
                accept="image/png, image/gif, image/jpeg"
                className="file-input border-0 file-input-primary max-w-sm "
              />
            )

        }

      </div>
    </>
  );
};

export default Dashboard;
