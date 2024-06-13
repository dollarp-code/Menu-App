import MenuItems from './MenuItems';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <MenuItems key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Menu;
