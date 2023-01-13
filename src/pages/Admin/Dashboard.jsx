import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import ImageUpload from '../../components/Dashboard/ImageUpload';
import MultiImageUpload from '../../components/Dashboard/MultiImageUpload';
import { db } from '../../config/firebase';

const options = [
  { value: 'React', label: 'React' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Postgres', label: 'Postgres' },
  { value: 'NodeJs', label: 'NodeJs' },
  { value: 'Express', label: 'Express' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'NextJs', label: 'NextJs' },
  { value: 'TailwindCSS', label: 'TailwindCSS' },
  { value: 'MaterialUI', label: 'MaterialUI' },
  { value: 'Bootstrap', label: 'Bootstrap' },
  { value: 'Sass', label: 'Sass' },
  { value: 'HTML', label: 'HTML' },
  { value: 'Redux', label: 'Redux' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'Socket.io', label: 'Socket.io' },
  { value: 'GraphQL', label: 'GraphQL' },
  { value: 'Apollo', label: 'Apollo' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Stimulus', label: 'Stimulus' },
  { value: 'Jest', label: 'Jest' },

];

const Dashboard = () => {
  const [MainImage, setMainImage] = useState();
  const [LogoImage, setLogoImage] = useState();
  const [PlaceholderImage, setPlaceholderImage] = useState();
  const [Gallery, setGallery] = useState([]);
  const [ProjectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    hot: false,
    github: null,
    live: null,
    private: false,
    frameworks: [],
  });
  async function saveData() {
    const id = uuidv4();
    const project = {
      id,
      details: ProjectDetails,
      mainImage: MainImage,
      logoImage: LogoImage,
      placeholderImage: PlaceholderImage,
      gallery: Gallery,
    };
    await setDoc(doc(db, 'Chala.dev', id), { project }).then(() => {
      console.log('success');
    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <>
      <div>ADD PROJECT</div>
      <div className="flex flex-col flex-wrap justify-center items-center gap-2  ">
        <input
          defaultValue={ProjectDetails.title}
          type="text"
          onChange={
            (e) => setProjectDetails({ ...ProjectDetails, title: e.target.value })
          }
          className="input w-full input-sm input-primary"
          placeholder="Project title"
        />
        <input
          defaultValue={ProjectDetails.github}
          type="text"
          className="input w-full input-sm input-primary"
          placeholder="Github Link"
          onChange={
            (e) => setProjectDetails({ ...ProjectDetails, github: e.target.value })
          }
        />
        <input
          defaultValue={ProjectDetails.live}
          type="text"
          className="input w-full input-sm input-primary"
          placeholder="Live Link"
          onChange={
            (e) => setProjectDetails({ ...ProjectDetails, live: e.target.value })
          }
        />
        <textarea
          onChange={
          (e) => setProjectDetails({ ...ProjectDetails, description: e.target.value })
        }
          className="textarea textarea-primary w-full"
          placeholder="Bio"
        />
        <div className="flex flex-col">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Private ?</span>
              <input
                onChange={
                (e) => setProjectDetails({ ...ProjectDetails, private: e.target.checked })
              }
                type="checkbox"
                className="toggle toggle-primary"

              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Hot ?</span>
              <input
                onChange={
                (e) => setProjectDetails({ ...ProjectDetails, hot: e.target.checked })
              }
                type="checkbox"
                className="toggle toggle-primary"

              />
            </label>
          </div>

        </div>
        <Select
          options={options}
          isMulti
          onChange={
            (e) => setProjectDetails({ ...ProjectDetails, frameworks: e })
          }
          isSearchable
          className="w-full"
        />
        <div className="flex gap-3 justify-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-primary text-sm">
              Main Image
            </label>
            <ImageUpload imageState={MainImage} setImageState={setMainImage} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-primary text-sm">
              Logo
            </label>
            <ImageUpload imageState={LogoImage} setImageState={setLogoImage} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-primary text-sm">
              Placeholder Image
            </label>
            <ImageUpload imageState={PlaceholderImage} setImageState={setPlaceholderImage} />
          </div>
        </div>

        <label htmlFor="image" className="text-primary text-sm">
          Gallery
        </label>
        <MultiImageUpload Gallery={Gallery} setGallery={setGallery} />
      </div>
      <button
        onClick={
        () => saveData()
      }
        type="button"
        className="btn btn-2xl btn-primary w-full mt-10"
      >
        Add Project
      </button>
    </>
  );
};

export default Dashboard;
