// CategoryPage.jsx

import Category from 'src/components/Category';
import Navbar from 'src/components/Navbar';

const categories = [
  { id: 1, name: 'GENERAL KNOWLEDGE' },
  { id: 2, name: 'ENTERTAINMENT' },
  { id: 3, name: 'SCIENCE' },
  { id: 4, name: 'GEOGRAPHY' },
  { id: 5, name: 'HISTORY' },
  { id: 6, name: 'POLITICS' },
  { id: 7, name: 'MYTHOLOGY' },
  { id: 8, name: 'ART & LITERATURE' },
];

const CategoryPage = () => {
  return (
    <div className="p-6">
      <Navbar />
      <div className="px-20">
        <div className="mt-12">
          {/* a long arrow */}
          <div className="flex items-center mt-4">
            <div className="w-16 h-16 bg-green-400 rounded-full flex justify-center items-center">
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
            <p className="ml-4 text-gray-800">
              <h1 className="text-xl font-semibold  text-gray-800">
                Start Quiz
              </h1>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-9 mt-12">
          {categories.map((category) => (
            <Category key={category.id} name={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
