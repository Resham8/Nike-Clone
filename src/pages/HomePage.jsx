import { Link } from "react-router-dom";
import PromoSection from "../components/PromoSection";
import ShoesSlider from "../components/ShoesSlider";

const HomePage = () => {  
  const sections = [
    {
      videoSrc: "/videos/HeroVideo.mp4",
      label: "Nike By You",
      heading: "What If You Were a Shoe?",
      description:
        "Let's find out! Be just who you are by putting more youness in your shoeness with Nike By You, Nike's co-creation service for Members. A little more of this, a little less of that—just have fun customising a shoe that feels more like you.",
      buttonText: "Shop",
    },
    {
      videoSrc: "/videos/shoesVideo.mp4",
      label: "Customize It",
      heading: "Choose a So-You Shoe",
      description:
        "Whether you're remixing a classic into something never seen before or simplifying the latest drop into a totally neutral palette, your customisation journey starts with choosing a shoe. Luckily, we're always adding newness so you can find the just-right way to express your style.",
      buttonText: "Start Designing",
    },
    {
      videoSrc: "/videos/lastOne.mp4",
      label: "Built for You",
      heading: "What's Your PiD?",
      description:
        "Like your shoe signature, your Personal iD is any combo of letters and numbers that rep you. Maybe it's a nickname, a mantra or your computer password (wait, probably not a good idea). It can be almost anything! Pick your PiD, and show the world who this signature shoe belongs to.",
      buttonText: "Create Now",
    },
  ];

  return (
    <div className="w-full">
      <div className="border-t border-gray-200 dark:border-gray-700 py-4 px-6 flex justify-between items-center">
        <h2 className="text-xl font-medium">Nike Membership</h2>
        <Link
          to="/membership/sign-up"
          className="px-4 py-1 border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Sign Up
        </Link>
      </div>

      <PromoSection {...sections[0]} />
     
      <ShoesSlider />

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Choose a So-You Shoe</h2>
        <p className="max-w-xl mx-auto text-lg dark:text-gray-400 mb-8">
          Whether you're remixing a classic into something never seen before or
          simplifying the latest drop into a totally neutral palette, your
          customisation journey starts with choosing a shoe. Luckily, we're
          always adding newness so you can find the just-right way to express
          your style.
        </p>
        <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          Start Customising
        </button>
      </section>

      <PromoSection {...sections[1]} />

      <PromoSection {...sections[2]} />

      <div className=" text-white  flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1901,c_limit/9946effb-0dfe-41c6-8b53-c4575250cd30/nike-by-you-custom-shoes.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
