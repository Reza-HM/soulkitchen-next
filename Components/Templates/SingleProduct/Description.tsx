import { FC } from "react";

interface HeaderProps {
  description: string;
}

const Description: FC<HeaderProps> = ({ description }) => {
  return (
    <div className="mt-40">
      <h2 className="underline underline-offset-8 text-2xl font-bold tracking-widest text-center">
        DESCRIPTION
      </h2>
      <span className="block h-px w-full bg-zinc-400/50 mt-12"></span>
      <div className="mt-40 flex flex-col gap-12 px-20">
        <p className="tracking-wider text-justify">{description}</p>
        <p className="tracking-wider text-justify">{description}</p>
        <ul className="list-disc ml-6">
          <li className="tracking-wider">shiitake frosted gingerbread bites</li>
          <li className="tracking-wider">miso turmeric glazed</li>
          <li className="tracking-wider">aubergine salted crumbled lentils</li>
          <li className="tracking-wider">cashew sweet potato</li>
          <li className="tracking-wider">mushroom tart cremini mushrooms</li>
        </ul>
      </div>
    </div>
  );
};
export default Description;
