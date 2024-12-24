import Category from 'src/components/Category';
import Navbar from 'src/components/Navbar';

const categories = [
  { id: 1, name: 'ART', pic: '/art.png' },
  { id: 2, name: 'SCIENCE & NATURE', pic: '/science.png' },
  { id: 3, name: 'GENERAL KNOWLEDGE', pic: '/gk.png' },
  { id: 4, name: 'SPORTS', pic: '/sports.png' },
];

const CategoryPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="px-8 lg:px-20 py-8">
        {/* Header Section */}
        <div className="flex items-center mt-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex justify-center items-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
          <h1 className="ml-4 text-2xl font-bold text-gray-800">Start Quiz</h1>
        </div>

        {/* Categories Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-28">
          {categories.map((category) => (
            <Category
              key={category.id}
              name={category.name}
              picture={category.pic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
