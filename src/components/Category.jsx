import React from 'react';
import { useNavigate } from 'react-router-dom';
const Category = ({ name, picture, id }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/quiz/${id}`)}
      className="text-center p-6  rounded-xl hover:shadow-lg hover:bg-gray-50 cursor-pointer transition duration-300 ease-in-out">
      <img
        src={picture}
        alt={name}
        className=" w-52 h-52 mx-auto mb-6 object-cover rounded-full border-2 border-gray-300"
      />
      <p className="font-semibold text-gray-700 text-lg">{name}</p>
    </button>
  );
};

export default Category;
