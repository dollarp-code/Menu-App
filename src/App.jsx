import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];

// One liner
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterCategory = (category) => {
    // console.log(category);
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
