const Categories = ({ categories, filterCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
