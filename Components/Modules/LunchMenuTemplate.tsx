import { FaPepperHot } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

const LunchMenuTemplate = () => {
  return (
    <div className="container px-0">
      <div className="p-20 bg-black text-white dark:bg-zinc-700 grid grid-cols-12 items-center gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="p-12 border-2 rounded-xl text-start border-zinc-700 dark:!border-white">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              SMALL BITES
            </h2>
            <p className="text-zinc-400 text-2xl mt-4">
              Order for the table and spread the love.
            </p>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Green papaya salad <FaPepperHot />
                  </p>
                  <span className="text-zinc-400">shrimp, chili & lime</span>
                </div>
                <span className="text-zinc-400">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Black pepper calamari
                  </p>
                  <span className="text-zinc-400">
                    Galangal dressing, roasted rice, thai basil
                  </span>
                </div>
                <span className="text-zinc-400">14</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Tumeric spiced cauliflower
                  </p>
                  <span className="text-zinc-400">
                    Sesame tofu dressing, furikake
                  </span>
                </div>
                <span className="text-zinc-400">11</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Kingfish sashimi</p>
                  <span className="text-zinc-400">
                    Green nam jim, coconut & thai basil
                  </span>
                </div>
                <span className="text-zinc-400">15</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Caramelised betel leaf <FaLeaf />
                  </p>
                  <span className="text-zinc-400">Pineapple, Chili</span>
                </div>
                <span className="text-zinc-400">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Pacific oysters (price per piece)
                  </p>
                  <span className="text-zinc-400">Ponzu, sriracha</span>
                </div>
                <span className="text-zinc-400">5</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Thai chicken lettuce cups
                  </p>
                  <span className="text-zinc-400">
                    Chilis, thai basil, crispy garlic, fried egg
                  </span>
                </div>
                <span className="text-zinc-400">13</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Shishito Peppers</p>
                  <span className="text-zinc-400">Yuzu, sesame</span>
                </div>
                <span className="text-zinc-400">9</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Edamame</p>
                  <span className="text-zinc-400">maldon sea salt</span>
                </div>
                <span className="text-zinc-400">8</span>
              </li>
            </ul>
          </div>
          <div className="!mt-32 p-12 text-start rounded-xl bg-zinc-800 dark:bg-zinc-900 text-white">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              SIDES
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Asian green stir fry
                  </p>
                  <span className="text-zinc-400">
                    Pea shoots, chinese broccoli leaves
                  </span>
                </div>
                <span className="text-zinc-400">7</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Chinese broccoli</p>
                  <span className="text-zinc-400">Black bean sauce</span>
                </div>
                <span className="text-zinc-400">7</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Spicy eggplant <FaPepperHot /> <FaLeaf />
                  </p>
                  <span className="text-zinc-400">
                    Togarashi yogurt, curry, soybean chili
                  </span>
                </div>
                <span className="text-zinc-400">7</span>
              </li>
              <li className="flex justify-between">
                <p className="">Coconut rice</p>
                <span className="text-zinc-400">5</span>
              </li>
              <li className="flex justify-between">
                <p className="">Steamed fragrant rice</p>
                <span className="text-zinc-400">4</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
          <div className="p-12 text-start">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              THE LAND
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Ribeye Bites Roasted
                  </p>
                  <span className="text-zinc-400">
                    Shishito Peppers, Jalapeño Crème
                  </span>
                </div>
                <span className="text-zinc-400">23</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Stir fried Eggplant <FaLeaf />
                  </p>
                  <span className="text-zinc-400">
                    Chinese eggplant, sweet chili soy glaze, green onion, garlic
                  </span>
                </div>
                <span className="text-zinc-400">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Crispy Pork Bun</p>
                  <span className="text-zinc-400">
                    House made kimchi, sriracha mayo
                  </span>
                </div>
                <span className="text-zinc-400">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Grilled Pork Chop</p>
                  <span className="text-zinc-400">
                    Vietnamese slaw, cashew & shrimp sambal
                  </span>
                </div>
                <span className="text-zinc-400">28</span>
              </li>
            </ul>
          </div>

          <div className="p-12 text-start !mt-20">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              THE SEA
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Lobster Tacos</p>
                  <span className="text-zinc-400">
                    Mango Salsa, Yuzu Guacamole
                  </span>
                </div>
                <span className="text-zinc-400">18</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Blackened Fish Sandwich <FaLeaf />
                  </p>
                  <span className="text-zinc-400">
                    Crunchy cabbage, wild baby arugula, tomato, house made
                    tartar sauce, on a brioche bun
                  </span>
                </div>
                <span className="text-zinc-400">9</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Honey Glazed Salmon</p>
                  <span className="text-zinc-400">
                    lotus root, green beans, baby sweet peppers
                  </span>
                </div>
                <span className="text-zinc-400">36</span>
              </li>
            </ul>
          </div>

          <div className="p-12 text-start !mt-20">
            <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
              THE SKY
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Sesame Chicken</p>
                  <span className="text-zinc-400">
                    Chinese eggplant, sweet chili soy glaze, green onion,
                    pineapple, ginger
                  </span>
                </div>
                <span className="text-zinc-400">18</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Black Pepper Chili Chicken
                  </p>
                  <span className="text-zinc-400">
                    Pepper, onion, bamboo shoot, celery
                  </span>
                </div>
                <span className="text-zinc-400">14</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Peking Duck</p>
                  <span className="text-zinc-400">For Two</span>
                </div>
                <span className="text-zinc-400">36</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Free-Range Chicken Breast
                  </p>
                  <span className="text-zinc-400">
                    Ichimi glaze, shishito potato mash, green onion, garlic
                  </span>
                </div>
                <span className="text-zinc-400">16</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center gap-40">
          <div className="p-12 text-start">
            <ul className="flex flex-col gap-12">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Buddha's Feast <FaLeaf />
                  </p>
                  <span className="text-zinc-400">
                    Five-spice tofu, savory sauce, green beans, shiitakes,
                    broccoli, carrots
                  </span>
                </div>
                <span className="text-zinc-400">12</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Fried Chicken bun</p>
                  <span className="text-zinc-400">
                    Gochujang, pickled radis
                  </span>
                </div>
                <span className="text-zinc-400">11</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Wagyu ribeye teppanyaki
                  </p>
                  <span className="text-zinc-400">
                    Snow peas, shimeji mushrooms
                  </span>
                </div>
                <span className="text-zinc-400">28</span>
              </li>
            </ul>
          </div>

          <div className="p-12 text-start !mt-20">
            <ul className="flex flex-col gap-12">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Charred Seabass</p>
                  <span className="text-zinc-400">
                    Orange glazed chicory, saffron rice, pepper sauce
                  </span>
                </div>
                <span className="text-zinc-400">17</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Hanoi Style Whole Market Fish
                  </p>
                  <span className="text-zinc-400">
                    Whole fish, sweet chilli sauce, Vietnamese herbs and spices,
                    roasted cashews
                  </span>
                </div>
                <span className="text-zinc-400">22</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Blackened Snapper</p>
                  <span className="text-zinc-400">
                    Steamed bok choy, ginger kaffir lime vinaigrette
                  </span>
                </div>
                <span className="text-zinc-400">24</span>
              </li>
            </ul>
          </div>

          <div className="p-12 text-start !mt-20">
            <ul className="flex flex-col gap-12">
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Crispy Orange Chicken
                  </p>
                  <span className="text-zinc-400">Steamed bok choy</span>
                </div>
                <span className="text-zinc-400">24</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Chicken Wings <FaPepperHot /> <FaPepperHot />
                  </p>
                  <span className="text-zinc-400">
                    Thai basil, chili, peanuts, green papaya, cilantro
                  </span>
                </div>
                <span className="text-zinc-400">22</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">
                    Chili & black pepper spiced duck
                  </p>
                  <span className="text-zinc-400">
                    Green beans, shiitakes, broccoli, carrots, plum & ginger
                    dressing
                  </span>
                </div>
                <span className="text-zinc-400">26</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <p className="flex items-center gap-2">Drunken Chicken</p>
                  <span className="text-zinc-400">
                    Shao xing wine, shiitake mushrooms, broccoli, carrots, green
                    onion dressing
                  </span>
                </div>
                <span className="text-zinc-400">22</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LunchMenuTemplate;
