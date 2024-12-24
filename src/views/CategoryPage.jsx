import React from 'react';
import Category from 'src/components/Category';
import Navbar from 'src/components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  // axios call to get categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/quiz/', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Extract categories and ID from the response
        if (res.data) {
          const data = res.data; // Assuming the data structure you shared
          const extractedCategories = data.map((question) => ({
            category: question.questions[0].category,
            id: question._id,
          }));
          setCategories(extractedCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  console.log(categories);
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
              name={category.category}
              picture={`${category.category}.png`}
              id={category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
