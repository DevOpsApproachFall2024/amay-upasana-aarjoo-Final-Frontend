const Category = ({ name, picture }) => {
  return (
    <div className="text-center p-6  rounded-xl hover:shadow-lg hover:bg-gray-50 cursor-pointer transition duration-300 ease-in-out">
      <img
        src={picture}
        alt={name}
        className=" w-52 h-52 mx-auto mb-6 object-cover rounded-full border-2 border-gray-300"
      />
      <p className="font-semibold text-gray-700 text-lg">{name}</p>
    </div>
  );
};

export default Category;
