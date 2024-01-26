import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const Description = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-12 justify-center items-center text-zinc-700 dark:text-zinc-200 !max-w-screen-md mx-auto">
        <h3 className="text-4xl text-justify leading-loose line-clamp-[7]">
          Served both Saturday and Sunday, our brunch is a culinary delight
          featuring dishes from around the world to choose from. Whether it’s a
          special occasion, an opportunity for friends to catch up, or a
          pleasant start to a lazy weekend day, brunch is a meal for relaxation
          and good company.
        </h3>
        <p className="leading-loose text-justify text-2xl">
          Salad entree peanut butter avocado dressing drizzle picnic salad
          pineapple salsa naga viper tomato and basil black bean wraps pinch of
          yum cocoa mediterranean pumpkin scotch bonnet pepper crunchy seaweed
          red pepper lemonade zest elderberry tabasco pepper. Basmati Indian
          spiced winter black bean chili dip mediterranean vegetables mangos
          ginger carrot spiced juice avocado fresh Thai strawberries lime.
        </p>
        <blockquote className="p-12">
          <div className="flex gap-8">
            <FaQuoteLeft className="text-zinc-500 text-7xl" />
            <p className="mb-6 font-PlayfairDisplay leading-relaxed italic text-5xl">
              Thai dragon pepper enchiladas cilantro lime vinaigrette seasonal
              red curry tofu noodles
            </p>
          </div>

          <cite className="text-xl">CHEF MILO FERNANDEZ</cite>
        </blockquote>
        <p className="leading-loose text-justify text-2xl">
          Seitan frosted gingerbread bites balsamic vinaigrette creamy
          cauliflower alfredo sauce tahini drizzle Bulgarian carrot cookies
          lemon red lentil soup falafel bites Sicilian pistachio pesto
          grapefruit blueberry chia seed jam ghost pepper cauliflower portobello
          mushrooms edamame ultra creamy avocado pesto almond milk hemp seeds
          green tea lime garlic sriracha noodles Bolivian rainbow pepper
          shiitake mushrooms chickpea crust pizza.
        </p>
        <Image
          alt="food's description"
          src="/img/articles-desc.jpg"
          width={1000}
          height={600}
          className="!max-w-screen-lg rounded-2xl"
        />
        <h3 className="font-PlayfairDisplay text-4xl font-semibold leading-relaxed">
          Shallots salty coconut Thai curry overflowing berries hearts of palm
          apple vinaigrette{" "}
        </h3>
        <ul className="list-disc flex flex-col gap-4 text-2xl w-full px-6">
          <li>Cool cucumbers banana bread casserole plums</li>
          <li>Thai dragon pepper enchiladas cilantro lime vinaigrette</li>
          <li>
            Seasonal red curry tofu noodles red grapes maple orange tempeh
          </li>
        </ul>
        <p>
          cumin roasted brussel sprouts. Figs guacamole delightful blueberry
          scones kale chocolate cookie candy cane winter miso turmeric glazed
          aubergine dragon fruit artichoke hearts ginger tofu eating together
          cool off peppermint strawberry spinach salad golden cayenne pepper
          butternut mix bento box main course.
        </p>
        <p>
          Cup white, sit percolator froth turkish, crema wings at carajillo
          mazagran. Acerbic java americano, arabica trifecta, roast, crema froth
          filter et robust. Est, turkish french press percolator cream lungo
          milk acerbic. Latte cup, espresso carajillo cinnamon breve
          frappuccino. Siphon est, so mug cappuccino fair trade sweet.
        </p>
        <p>
          Trifecta, organic, irish grinder foam roast cup extra. Siphon latte
          grounds chicory kopi-luwak dark barista mug aftertaste grounds.
          Acerbic brewed at, mug cultivar mocha aftertaste shop. Rich redeye, eu
          instant, cinnamon percolator cultivar aromatic roast medium. French
          press aroma beans flavour organic blue mountain as flavour.
        </p>
        <h3 className="font-PlayfairDisplay text-4xl font-semibold leading-relaxed w-full">
          Bolivian rainbow pepper shiitake mushrooms chickpea
        </h3>
        <ul className="list-disc flex flex-col gap-4 text-2xl w-full px-6">
          <li>Shaved almonds</li>
          <li>Red lentil curry</li>
          <li>Soy milk</li>
          <li>Coconut sugar</li>
          <li>cinnamon</li>
          <li>Potato</li>
          <li>Leek</li>
        </ul>
        <p>
          Creamy cauliflower alfredo sauce tahini drizzle Bulgarian carrot
          cookies lemon red lentil soup falafel bites Sicilian pistachio pesto
          grapefruit blueberry chia seed jam ghost pepper cauliflower portobello
          mushrooms edamame ultra creamy avocado pesto almond milk hemp seeds
          green tea lime garlic sriracha noodles Bolivian rainbow pepper
          shiitake mushrooms chickpea crust pizza.
        </p>
        <div className="flex justify-start w-full items-center gap-8 my-20">
          <div className="p-2 bg-black dark:bg-zinc-700 text-white rounded-lg w-32 flex justify-center items-center text-xl italic">
            #brunch
          </div>
          <div className="p-2 bg-black dark:bg-zinc-700 text-white rounded-lg w-32 flex justify-center items-center text-xl italic">
            #event
          </div>
          <div className="p-2 bg-black dark:bg-zinc-700 text-white rounded-lg w-32 flex justify-center items-center text-xl italic">
            #food
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-700 rounded-xl">
        <div className="rounded-xl p-8 flex flex-wrap justify-between items-center gap-16">
          <Image
            alt="article recommendation"
            src="/img/articlesRec3.jpg"
            width={400}
            height={400}
            className="rounded-xl flex-1"
          />
          <Image
            alt="article recommendation"
            src="/img/articlesRec2.jpg"
            width={400}
            height={400}
            className="rounded-xl flex-1"
          />
          <Image
            alt="article recommendation"
            src="/img/articlesRec.jpg"
            width={400}
            height={400}
            className="rounded-xl flex-1"
          />
        </div>
        <div className="flex justify-between items-center p-8">
          <div className="text-start flex-1">
            <h3 className="text-4xl font-PlayfairDisplay">New Summer Menu</h3>
            <span className="text-xl">JUNE 2, 2022</span>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-3xl font-PlayfairDisplay">Spring Salad</h3>
            <span className="text-xl">FEBRUARY 13, 2020</span>
          </div>
          <div className="text-end flex-1">
            <h3 className="text-3xl font-PlayfairDisplay">
              Valentines Day at Soul Kitchen
            </h3>
            <span className="text-xl">FEBRUARY 10, 2023</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-8 my-20 rounded-xl">
        <div className="w-full md:flex-1 md:flex-1/2 bg-white dark:bg-zinc-700 rounded-xl p-8">
          <h3 className="text-zinc-400 font-semibold tracking-widest text-2xl">
            PREVIOUS POST
          </h3>
          <div className="flex gap-8 mt-4">
            <Image
              alt="prev post"
              src={"/img/articlesRec2.jpg"}
              width={200}
              height={200}
              className="w-40 h-40 rounded-lg"
            />
            <p className="font-PlayfairDisplay text-3xl font-semibold">
              New Summer Menu
            </p>
          </div>
        </div>
        <div className="w-full md:flex-1 md:flex-1/2 bg-white dark:bg-zinc-700 rounded-xl p-8">
          <h3 className="text-end text-zinc-400 font-semibold tracking-widest text-2xl">
            NEXT POST
          </h3>
          <div className="flex gap-8 justify-end mt-4">
            <p className="font-PlayfairDisplay text-3xl font-semibold">
              Chef Milo’s Seabass
            </p>
            <Image
              alt="next post"
              src={"/img/articlesRec3.jpg"}
              width={200}
              height={200}
              className="w-40 h-40 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Description;
