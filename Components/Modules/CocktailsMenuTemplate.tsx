const CocktailsMenuTemplate = () => {
  return (
    <div className="w-full md:container px-0 bg-black text-white dark:bg-zinc-700 p-20">
      <h1 className="text-center font-PlayfairDisplay text-6xl tracking-widest">
        COCKTAILS
      </h1>
      <div className="p-20 grid grid-cols-12 items-center gap-2 md:gap-12">
        <div className="col-span-12 lg:col-span-6 xl:col-span-4 space-y-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Ruby Red Dragon</h3>
            <span className="text-zinc-400">
              Grapefruit Rose Botanical Vodka, Yuzu Citrus, Hint of Pomegranate
            </span>
            <p className="text-zinc-400">14</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Cucumber Passion</h3>
            <span className="text-zinc-400">
              Cucumber infusion vodka, passionfruit nectar juice
            </span>
            <p className="text-zinc-400">13</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Haku Ringo</h3>
            <span className="text-zinc-400">
              Haku Japanese Rice Vodka, Amontillado Dry Sherry, Grand Marnier,
              Apple, Honey
            </span>
            <p className="text-zinc-400">11</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4 space-y-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Watermelon Mint Lemonade</h3>
            <span className="text-zinc-400">
              Haku Vodka, Cold Pressed Watermelon & Citrus Juice, Essential Mint
              Oil
            </span>
            <p className="text-zinc-400">16</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Shiso Fine (serves 4)</h3>
            <span className="text-zinc-400">
              Choya Yume Plum Wine, Apricot liqueur, Ginger Liqueur, Dolin Dry,
              Lemon Juice
            </span>
            <p className="text-zinc-400">24</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Suika Ninja</h3>
            <span className="text-zinc-400">
              Watermelon Soju, Olmeca Tequila Reposado, Heering Cherry Liqueur,
              fresh lime juice
            </span>
            <p className="text-zinc-400">12</p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12 xl:col-span-4 space-y-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Mango Chili Martini</h3>
            <span className="text-zinc-400">
              Herradura Blanco Tequila, St. Germain, House Spiced Mango Purée
            </span>
            <p className="text-zinc-400">19</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Ginger Geisha</h3>
            <span className="text-zinc-400">
              Ginger Liqueur, Shochu, Fresh Lime, Ginger Beer
            </span>
            <p className="text-zinc-400">12</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl">Tokyo Drift</h3>
            <span className="text-zinc-400">
              Lucy Liu Arancia Rossa liqueur, Frapin Cognac, Yuzu-shu, Fresh
              lemon & Lime Juice
            </span>
            <p className="text-zinc-400">13</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CocktailsMenuTemplate;
