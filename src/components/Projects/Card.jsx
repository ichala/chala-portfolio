import React from 'react';
import IconGenerator from '../../config/IconGenerator';

const Card = ({ data }) => (
  <div className="card w-96 bg-base-300 group hover:shadow-lg cursor-pointer">
    <figure
      className=" group-hover:bg-primary  cursor-pointer bg-cover bg-center  h-[200px] w-full"
      style={{
        backgroundImage: `url(${data.image})`, backgroundRepeat: 'no-repeat',
      }}
    />
    <div className="card-body ">
      <h2 className=" card-title text-base-content italic font-light">{data.title}</h2>
      <div className="flex gap-2 flex-wrap text-primary">
        {
        data.frameworks.map((framework) => (
          IconGenerator(framework)
        ))
      }
      </div>
      <div className="card-actions justify-end">
        <button type="button" className="btn btn-primary btn-xs">Learn now!</button>
      </div>
    </div>
  </div>
);

export default Card;
