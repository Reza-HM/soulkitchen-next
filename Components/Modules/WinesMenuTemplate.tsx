const WinesMenuTemplate = () => {
  return (
    <div className="w-full md:container px-0">
      <div className="p-4 md:p-20 bg-black text-white dark:bg-zinc-700 grid grid-cols-12 items-center gap-2 md:gap-12">
        <div className="col-span-12 xl:col-span-6">
          <div className="p-12 border-2 rounded-xl text-start border-zinc-700 dark:!border-white">
            <div className="flex justify-between gap-2">
              <h2 className="text-3xl font-PlayfairDisplay md:text-5xl tracking-widest">
                RED WINES
              </h2>
              <div className="flex items-center gap-8">
                <span className="text-2xl">glass</span>
                <span className="text-2xl">bottle</span>
              </div>
            </div>

            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  2012 Red Hills Vineyard. Derenoncourt. Napa Valley
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">12</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">64</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  Merlot St. Francis, Sonoma County, California, 2016
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">14</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">63</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Antinori Tignanello</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">7</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">49</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  La Rioja Alta Gran Reserva 904 Tinto 2011
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">4</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">43</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  Bodegas Vega Sicilia Unico Tinto 2010
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">8</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">54</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Chateau La Mission Haut Brion 2015</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">9</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">65</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="!mt-32 p-12 text-start">
            <h2 className="text-3xl font-PlayfairDisplay md:text-5xl tracking-widest">
              SAKE
            </h2>
            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between">
                <div className="">
                  <p className="text-xl md:text-3xl">Forgotten Fortuna</p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Scrumptious layers of Umami, malty-rice with a citrus and
                    quince finish.
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">79</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <div className=""></div>
                  <p className="text-xl md:text-3xl">Pacific Ocean</p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Bright and lively with fruit and a great Riesling -like
                    nose.
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">80</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <div className=""></div>
                  <p className="text-xl md:text-3xl">Well of Wisdom</p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Light, clean mouthfeel with subdued notes of stone-fruit.
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">52</span>
              </li>
              <li className="flex justify-between">
                <div className="">
                  <div className=""></div>
                  <p className="text-xl md:text-3xl">Beautiful Liliy</p>
                  <span className="text-zinc-400 text-xl md:text-2xl">
                    Round, dry notes with an aromatic nose of fruit and
                    blossoms.
                  </span>
                </div>
                <span className="text-zinc-400 text-xl md:text-2xl">51</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 flex flex-col justify-center">
          <div className="p-12 text-start">
            <div className="flex justify-between gap-2">
              <h2 className="text-3xl font-PlayfairDisplay md:text-5xl tracking-widest">
                WHITE WINES
              </h2>
              <div className="flex items-center gap-8">
                <span className="text-2xl">glass</span>
                <span className="text-2xl">bottle</span>
              </div>
            </div>

            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  glass bottle 2020 Bourgogne. Domaine Bernard Moreau
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">7</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">56</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  Pinot Grigio Bollini, Trentino, Italy, 2018
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">7</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">54</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Chardonnay Laguna, California 2017</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">7</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">52</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Alpha Omega Chardonnay 2017</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">5</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">42</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Ponzi Vineyards Pinot Gris 2018</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">6</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">47</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Kim Crawford Sauvignon Blank</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">6</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">42</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  Domaine du Salvard Cheverny Blank 2018
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">6</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">45</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="!mt-20 p-12 text-start rounded-xl bg-zinc-800 dark:bg-zinc-900 text-white">
            <div className="flex justify-between gap-2">
              <h2 className="text-3xl font-PlayfairDisplay md:text-5xl tracking-widest">
                SPARKLING WINES
              </h2>
              <div className="flex items-center gap-8">
                <span className="text-2xl">glass</span>
                <span className="text-2xl">bottle</span>
              </div>
            </div>

            <ul className="flex flex-col gap-12 mt-20">
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Castello del Poggio Moscato d’Asti</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">7</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">57</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Compo Viejo Cava, Rose</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">9</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">54</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  Veuve Clicquot Brut Yellow Label Champagne
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">7</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">48</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Domaine Carneros Brut</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">11</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">48</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">Villa Sandi Prosecco Doc Rosé</p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">6</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">58</span>
                </div>
              </li>
              <li className="flex justify-between gap-4">
                <p className="text-xl md:text-3xl">
                  Champagne Nicolas Feuillatte Brut Reserve Exclusive
                </p>

                <div className="flex items-center gap-20 mr-4">
                  <span className="text-zinc-400 text-xl md:text-2xl">7</span>
                  <span className="text-zinc-400 text-xl md:text-2xl">65</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WinesMenuTemplate;
