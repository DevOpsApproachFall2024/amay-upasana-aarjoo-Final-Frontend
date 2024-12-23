const Category = ({ name }) => {
  return (
    <div className="text-center p-4 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-300">
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default Category;
