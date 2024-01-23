import CocktailsMenuTemplate from "@/Components/Modules/CocktailsMenuTemplate";
import WinesMenuTemplate from "@/Components/Modules/WinesMenuTemplate";
import { useState } from "react";

const DrinksMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "wines"
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const renderTemplate = () => {
    switch (selectedCategory) {
      case "wines":
        return <WinesMenuTemplate />;
      case "cocktails":
        return <CocktailsMenuTemplate />;
      default:
        return null;
    }
  };

  return (
    <div className="container animate-fade-up">
      <div className="p-8 m-8 flex flex-col gap-16 items-center text-center">
        <h2 className="font-PlayfairDisplay text-6xl font-bold">Drinks</h2>
        <p>
          We serve hand-crafted speciality drinks with the best organic
          ingredients.
        </p>
        <div className="flex justify-center items-center gap-20 text-zinc-400 text-2xl font-bold">
          <span
            className={`${
              selectedCategory === "wines" ? "border-b-2 border-black pb-4" : ""
            } cursor-pointer tracking-widest hover:text-zinc-600 duration-300`}
            onClick={() => handleCategoryClick("wines")}
          >
            WINES
          </span>
          <span
            className={`${
              selectedCategory === "cocktails"
                ? "border-b-2 border-black pb-4"
                : ""
            } cursor-pointer tracking-widest hover:text-zinc-600 duration-300`}
            onClick={() => handleCategoryClick("cocktails")}
          >
            COCKTAILS
          </span>
        </div>
        {renderTemplate()}
      </div>
    </div>
  );
};
export default DrinksMenu;
