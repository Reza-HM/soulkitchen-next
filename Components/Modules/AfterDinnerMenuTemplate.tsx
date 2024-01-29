import { FaPepperHot } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const AfterDinnerMenuTemplate = () => {
  return (
    <div className="w-full md:container px-0">
      <div className="p-20 bg-black text-white dark:bg-zinc-700 grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="p-12 border-2 rounded-xl text-start border-zinc-700 dark:!border-white">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              TEA MENU
            </h2>
            <p className="text-zinc-400 text-2xl mt-4">
              Tea Rituals for Focus, Health & Slowness
            </p>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Ti Quan Yin</p>
                  <span className="text-zinc-400">
                    Intense aroma, depth and fruitiness- ranked as one of the
                    most famous teas in China
                  </span>
                </div>
                <span className="text-zinc-400">4</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Sencha</p>
                  <span className="text-zinc-400">
                    Shiny needlelike tea leaves that yield a slighty grassy,
                    clean refreshing brew, the most popular tea in Japan
                  </span>
                </div>
                <span className="text-zinc-400">5</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Gunpowder</p>
                  <span className="text-zinc-400">
                    Green pellets of rolled tea leaves that produces a pleasant
                    smokey flavor
                  </span>
                </div>
                <span className="text-zinc-400">6</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Zhenghe Bai Mudan "White Peony"
                  </p>
                  <span className="text-zinc-400">
                    Fresh bamboo aroma, lightly sweet flavor with notes of melon
                    and grape
                  </span>
                </div>
                <span className="text-zinc-400">4</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Hong Tao</p>
                  <span className="text-zinc-400">
                    Peachy flavor, goes well with dessert
                  </span>
                </div>
                <span className="text-zinc-400">4</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Jin Xuan</p>
                  <span className="text-zinc-400">
                    Creamy smooth texture, incredible milk aroma and taste with
                    a naturally sweet flavor. Goes well with spicy foods
                  </span>
                </div>
                <span className="text-zinc-400">5</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Da Yu Ling</p>
                  <span className="text-zinc-400">
                    Buttery aroma with a sweet flavor topped off with floral and
                    tangerine scents
                  </span>
                </div>
                <span className="text-zinc-400">5</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Siji Chun "Four Seasons"
                  </p>
                  <span className="text-zinc-400">
                    Intense floral aroma and delicate fruity taste without any
                    bitterness or dryness
                  </span>
                </div>
                <span className="text-zinc-400">4</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Tao Hong Cha blend</p>
                  <span className="text-zinc-400">
                    Mellow tea with hints of soothing chamomile and lavender
                  </span>
                </div>
                <span className="text-zinc-400">4</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
          <div className="p-12 text-start">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              DESSERTS
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Dessert platter</p>
                  <span className="text-zinc-400">
                    Chef’s selection of sweets. Serves 2
                  </span>
                </div>
                <span className="text-zinc-400">19</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Fried Banana</p>
                  <span className="text-zinc-400">
                    Panko crusted with caramel sauce, banana brulee, caramel
                    popcorn
                  </span>
                </div>
                <span className="text-zinc-400">9</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Thai Donut</p>
                  <span className="text-zinc-400">
                    Fried donut dipped with sweet condense milk & peanut
                  </span>
                </div>
                <span className="text-zinc-400">8</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Mochi Ice Cream</p>
                  <span className="text-zinc-400">
                    Mango, Salted Caramel, Lychee, Chocolate, Strawberry
                  </span>
                </div>
                <span className="text-zinc-400">8</span>
              </li>
            </ul>
          </div>

          <div className="p-12 text-start !mt-20">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              AFTER DINNER DRINKS
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Black Dot Sake Honjozo
                  </p>
                  <span className="text-zinc-400">
                    Clean and soft, hints of mountain flowers on the nose with
                    fruit structure throughout.
                  </span>
                </div>
                <span className="text-zinc-400">9</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Well of Wisdom – Tozai Ginjo, Kyoto
                  </p>
                  <span className="text-zinc-400">
                    Light, clean mouthfeel with subdued notes of stone-fruit.
                  </span>
                </div>
                <span className="text-zinc-400">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Suntory Toki</p>
                  <span className="text-zinc-400">
                    Toki, meaning “time” in Japanese, boasts notes of pink
                    grapefruit, almonds and a light vanilla finish
                  </span>
                </div>
                <span className="text-zinc-400">18</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Yamazaki 12 Years</p>
                  <span className="text-zinc-400">
                    This is a floral and fruity single malt reminiscent of
                    scotch but in a style that is very much its own
                  </span>
                </div>
                <span className="text-zinc-400">16</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Hibiki Japanese Harmony
                  </p>
                  <span className="text-zinc-400">
                    Japanese whisky with well-defined flavors of almond, dried
                    fruit and nougat
                  </span>
                </div>
                <span className="text-zinc-400">16</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-12">
          <div className="p-12 text-start mt-32">
            <ul className="flex flex-col gap-12">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Fruit Plate</p>
                  <span className="text-zinc-400">
                    Seasonal selections of fruits, shaved coconut, vanilla
                    drizzle, mint
                  </span>
                </div>
                <span className="text-zinc-400">14</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Sorbet</p>
                  <span className="text-zinc-400">
                    Watermelon, passion fruit, strawberry, mango, orange
                  </span>
                </div>
                <span className="text-zinc-400">7</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Banana spring rolls</p>
                  <span className="text-zinc-400">
                    Honey glaze, vanilla drizzle, coconut-pineapple ice cream
                  </span>
                </div>
                <span className="text-zinc-400">7</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Lavender scented pancakes
                  </p>
                  <span className="text-zinc-400">
                    Bananas, raspberries, vanilla butter, shaved coconut, mint
                  </span>
                </div>
                <span className="text-zinc-400">9</span>
              </li>
            </ul>
          </div>

          <div className="p-12 text-start">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              COFFEE
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <p className="flex items-center gap-2">Espresso</p>
                <span className="text-zinc-400">3</span>
              </li>
              <li className="flex justify-between">
                <p className="flex items-center gap-2">Double Espresso</p>
                <span className="text-zinc-400">4</span>
              </li>
              <li className="flex justify-between">
                <p className="flex items-center gap-2"> Cappucino</p>
                <span className="text-zinc-400">5</span>
              </li>
              <li className="flex justify-between">
                <p className="flex items-center gap-2"> Cortado</p>
                <span className="text-zinc-400">4</span>
              </li>
              <li className="flex justify-between">
                <p className="flex items-center gap-2"> Macchiato</p>
                <span className="text-zinc-400">5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AfterDinnerMenuTemplate;
