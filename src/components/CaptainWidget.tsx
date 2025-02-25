import treasureChest from "../assets/treasure_chest.svg";
import pirateCat from "../assets/pirate_cat.svg";
import shinyTilted1 from "../assets/shiny_tilted_1.svg";
import shinyTilted2 from "../assets/shiny_tilted_2.svg";

export const CaptainWidget = () => {
  return (
    <section className="flex items-center justify-center bg-white pb-16">
      <div className="h-[492px] relative max-w-5xl w-full grid grid-cols-2 gap-8">
        {/* Left Side - Pirate Cat (Relative for Positioning) */}
        <div className="relative flex justify-center w-[320px] h-[296h]">
          <img
            src={pirateCat}
            alt="Pirate Cat"
            className="mt-[180px] ml-[182px] z-50"
          />
          <img
            src={shinyTilted1}
            alt="Pirate Cat shiny"
            className="absolute top-[104px] right-0 mr-[136px] "
          />
          <img
            src={shinyTilted2}
            alt="Pirate cat shiny 2"
            className="absolute top-[252px] right-0 mr-[140px] "
          />
        </div>

        {/* Right Side - Text & Treasure Chest */}
        <div className="relative flex flex-col">
          {/* Treasure Chest Positioned Absolutely Inside Relative Parent */}
          <img
            src={treasureChest}
            alt="Treasure Chest"
            className="absolute right-0 mr-[100px] "
          />
          <img
            src={shinyTilted2}
            alt="Treasure Chest shiny"
            className="absolute top-[96px] right-0 mr-[104px] "
          />

          {/* Main Text */}
          <div className="text-8xl font-bold mt-4">
            <h1 className="ml-[-270px]"> Captain, </h1>
            <h1 className="ml-[-380px] text-purple">Portfolio</h1>
            <h1 className="ml-[-60px]">on sight!</h1>
            <div className="ml-[-56px] w-[392px]">
              <p className="text-[32px] leading-11 font-normal mt-4 max-w-md">
                Ahoy, I’m Carol! This is a record of my adventures in Design
                world
                <span className="inline-block pl-8">
                  <img src={shinyTilted1} alt="Treasure Chest shiny" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
