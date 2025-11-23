import { useNavigate } from 'react-router-dom';
import { useData } from "../hooks/useData";

export default function Category() {
  const { data } = useData();
  const navigate = useNavigate();

  const getUniqueCategory = (data, property) => {
    let newVariable = data?.map((currentElement) => currentElement[property]);
    newVariable = [...new Set(newVariable)];
    return newVariable;
  };

  const categoryOnly = getUniqueCategory(data, 'category');

  return (
    <div className="flex flex-wrap gap-4 justify-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      {categoryOnly.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(`/category/${item}`)}
          className="px-4 py-2 bg-gradient-to-l from-amber-500 to-amber-300 hover:shadow-md text-white border border-gray-300 rounded-md transition first-letter:uppercase text-sm sm:text-base"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
