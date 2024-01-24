import About from "@/Components/Templates/Index/About";
import Board from "@/Components/Templates/Index/Board";
import DrinksMenu from "@/Components/Templates/Index/DrinksMenu";
import Events from "@/Components/Templates/Index/Events";
import Gallery from "@/Components/Templates/Index/Gallery";
import Header from "@/Components/Templates/Index/Header";
import Menu from "@/Components/Templates/Index/Menu";
import Press from "@/Components/Templates/Index/Press";
import SignUp from "@/Components/Templates/Index/SignUp";
import Team from "@/Components/Templates/Index/Team";
import Visit from "@/Components/Templates/Index/Visit";
import Head from "next/head";

const Home = () => {
  return (
    <div className="">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/img/icon.png" type="image/x-icon" />
        <title>Soul Kitchen</title>
      </Head>
      <Header />
      <About />
      <Team />
      <Menu />
      <Gallery />
      <DrinksMenu />
      <Events />
      <SignUp />
      <Board />
      <Press />
      <Visit />
    </div>
  );
};
export default Home;
