import { FaPepperHot } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const DinnerMenuTemplate = () => {
  return (
    <div className="w-full md:container px-0">
      <div className="md:p-20 bg-black text-white dark:bg-zinc-700 grid grid-cols-12 items-center gap-2 md:gap-12">
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          <div className="w-full p-12 border-2 rounded-xl text-start border-zinc-700 dark:!border-white">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              SMALL BITES
            </h2>
            <p className="text-zinc-400 text-2xl mt-4">
              Order for the table and spread the love.
            </p>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Green papaya salad <FaPepperHot />
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    shrimp, chili & lime
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Black pepper calamari
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Galangal dressing, roasted rice, thai basil
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">14</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Tumeric spiced cauliflower
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Sesame tofu dressing, furikake
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">11</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Kingfish sashimi
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Green nam jim, coconut & thai basil
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">15</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Caramelised betel leaf <FaLeaf />
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Pineapple, Chili
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Pacific oysters (price per piece)
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Ponzu, sriracha
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">5</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Thai chicken lettuce cups
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Chilis, thai basil, crispy garlic, fried egg
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">13</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Shishito Peppers
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Yuzu, sesame
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">9</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Edamame
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    maldon sea salt
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">8</span>
              </li>
            </ul>
          </div>
          <div className="w-full !mt-32 p-12 text-start rounded-xl bg-zinc-800 dark:bg-zinc-900 text-white">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              SIDES
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Asian green stir fry
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Pea shoots, chinese broccoli leaves
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">7</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Chinese broccoli
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Black bean sauce
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">7</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Spicy eggplant <FaPepperHot /> <FaLeaf />
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Togarashi yogurt, curry, soybean chili
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">7</span>
              </li>
              <li className="flex justify-between">
                <p className="">Coconut rice</p>
                <span className="text-zinc-400 text-xl md:text-2xl">5</span>
              </li>
              <li className="flex justify-between">
                <p className="">Steamed fragrant rice</p>
                <span className="text-zinc-400 text-xl md:text-2xl">4</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-4  flex flex-col justify-center">
          <div className="w-full p-12 text-start">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              THE LAND
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Ribeye Bites Roasted
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Shishito Peppers, Jalapeño Crème
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">23</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Stir fried Eggplant <FaLeaf />
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Chinese eggplant, sweet chili soy glaze, green onion, garlic
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Crispy Pork Bun
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    House made kimchi, sriracha mayo
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Grilled Pork Chop
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Vietnamese slaw, cashew & shrimp sambal
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">28</span>
              </li>
            </ul>
          </div>

          <div className="w-full p-12 text-start !mt-20">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              THE SEA
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Lobster Tacos
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Mango Salsa, Yuzu Guacamole
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">18</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Blackened Fish Sandwich <FaLeaf />
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Crunchy cabbage, wild baby arugula, tomato, house made
                    tartar sauce, on a brioche bun
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">9</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Honey Glazed Salmon
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    lotus root, green beans, baby sweet peppers
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">36</span>
              </li>
            </ul>
          </div>

          <div className="w-full p-12 text-start !mt-20">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              THE SKY
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Sesame Chicken
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Chinese eggplant, sweet chili soy glaze, green onion,
                    pineapple, ginger
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">18</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Black Pepper Chili Chicken
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Pepper, onion, bamboo shoot, celery
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">14</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Peking Duck
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    For Two
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">36</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Free-Range Chicken Breast
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Ichimi glaze, shishito potato mash, green onion, garlic
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">16</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12 xl:col-span-4 flex flex-col justify-center gap-20 md:gap-40">
          <div className="w-full p-12 text-start">
            <ul className="flex flex-col gap-12">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Buddha's Feast <FaLeaf />
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Five-spice tofu, savory sauce, green beans, shiitakes,
                    broccoli, carrots
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Fried Chicken bun
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Gochujang, pickled radis
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">11</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Wagyu ribeye teppanyaki
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Snow peas, shimeji mushrooms
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">28</span>
              </li>
            </ul>
          </div>

          <div className="w-full p-12 text-start !mt-20">
            <ul className="flex flex-col gap-12">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Charred Seabass
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Orange glazed chicory, saffron rice, pepper sauce
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">17</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Hanoi Style Whole Market Fish
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Whole fish, sweet chilli sauce, Vietnamese herbs and spices,
                    roasted cashews
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">22</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Blackened Snapper
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Steamed bok choy, ginger kaffir lime vinaigrette
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">24</span>
              </li>
            </ul>
          </div>

          <div className="w-full p-12 text-start !mt-20">
            <ul className="flex flex-col gap-12">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Crispy Orange Chicken
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Steamed bok choy
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">24</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Chicken Wings <FaPepperHot /> <FaPepperHot />
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Thai basil, chili, peanuts, green papaya, cilantro
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">22</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Chili & black pepper spiced duck
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Green beans, shiitakes, broccoli, carrots, plum & ginger
                    dressing
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">26</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2 text-2xl md:text-3xl">
                    Drunken Chicken
                  </p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Shao xing wine, shiitake mushrooms, broccoli, carrots, green
                    onion dressing
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">22</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DinnerMenuTemplate;
