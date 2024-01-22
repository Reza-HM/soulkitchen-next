import { useState } from "react";

const DinnerTemplate: React.FC = () => <div>Dinner Template</div>;
const AfterDinnerTemplate: React.FC = () => <div>After Dinner Template</div>;
const LunchTemplate: React.FC = () => <div>Lunch Template</div>;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const renderTemplate = () => {
    switch (selectedCategory) {
      case "dinner":
        return <DinnerTemplate />;
      case "after dinner":
        return <AfterDinnerTemplate />;
      case "lunch":
        return <LunchTemplate />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="p-8 m-8 flex flex-col gap-16 items-center text-center">
        <h2 className="font-PlayfairDisplay text-6xl font-bold">Our Menu</h2>
        <p>
          Picky eaters, adventurous eaters, whatever your taste, we have
          something for you.
        </p>
        <div className="flex justify-center items-center gap-20 text-zinc-400 text-2xl font-bold">
          <span
            className={`${
              selectedCategory === "dinner"
                ? "border-b-2 border-black pb-4"
                : ""
            } cursor-pointer tracking-widest hover:text-zinc-600 duration-300`}
            onClick={() => handleCategoryClick("dinner")}
          >
            DINNER
          </span>
          <span
            className={`${
              selectedCategory === "after dinner"
                ? "border-b-2 border-black pb-4"
                : ""
            } cursor-pointer tracking-widest hover:text-zinc-600 duration-300`}
            onClick={() => handleCategoryClick("after dinner")}
          >
            AFTER DINNER
          </span>
          <span
            className={`${
              selectedCategory === "lunch" ? "border-b-2 border-black pb-4" : ""
            } cursor-pointer tracking-widest hover:text-zinc-600 duration-300`}
            onClick={() => handleCategoryClick("lunch")}
          >
            LUNCH
          </span>
        </div>
        {renderTemplate()}
      </div>
    </div>
  );
};
export default Menu;
