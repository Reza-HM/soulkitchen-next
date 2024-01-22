import { FaLeaf } from "react-icons/fa";

const LunchMenuTemplate = () => {
  return (
    <div className="container px-0">
      <div className="p-20 bg-black text-white dark:bg-zinc-700 flex flex-col justify-center items-center gap-12">
        <h2 className="font-PlayfairDisplay text-5xl tracking-widest">
          LUNCH MENU
        </h2>
        <p className="text-zinc-400 text-2xl mt-4">11:30 am – 3:00 pm</p>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">Lobster Tacos</p>
          <span className="text-zinc-400">Mango Salsa, Yuzu Guacamole</span>
          <span className="text-zinc-400">18</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">
            Blackened Fish Sandwich <FaLeaf />
          </p>
          <span className="text-zinc-400">
            Crunchy cabbage, wild baby arugula, tomato, house made tartar sauce,
            on a brioche bun
          </span>
          <span className="text-zinc-400">9</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">
            Chili & black pepper spiced duck
          </p>
          <span className="text-zinc-400">
            Green beans, shiitakes, broccoli, carrots, plum & ginger dressing
          </span>
          <span className="text-zinc-400">26</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">Free-Range Chicken Breast</p>
          <span className="text-zinc-400">
            Ichimi glaze, shishito potato mash, green onion, garlic
          </span>
          <span className="text-zinc-400">16</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">
            Hanoi Style Whole Market Fish
          </p>
          <span className="text-zinc-400">
            Whole fish, sweet chilli sauce, Vietnamese herbs and spices, roasted
            cashews
          </span>
          <span className="text-zinc-400">22</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">Wagyu ribeye teppanyaki</p>
          <span className="text-zinc-400">Snow peas, shimeji mushrooms</span>
          <span className="text-zinc-400">28</span>
        </div>
      </div>
    </div>
  );
};
export default LunchMenuTemplate;
