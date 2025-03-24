import searchIcon from "../../assets/search.svg";
import rightArrowIcon from "../../assets/rightArrow.svg";
import addIcon from "../../assets/add.svg";
import powerIcon from "../../assets/power.svg";
import { motion } from "motion/react";
import ActionBtn from "@/components/ActionBtn";

type Props = {};

function Home({}: Props) {
  return (
    <div className="home ">
      <motion.div
        className="searchBox"
        initial={{ transform: "translateY(-2rem)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 2.5,
        }}
      >
        <form className="flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm h-14 ">
          <label
            htmlFor="searchInput"
            className="flex items-center justify-center flex-1 rounded-full h-14 aspect-square"
          >
            <img src={searchIcon} alt="" className="searchIcon" />
          </label>
          <input
            type="text"
            className="searchInput w-100 h-14 outline-0 flex-8"
            id="searchInput"
            placeholder="Search your cards"
          />
          <button className="flex items-center justify-center flex-1 mr-1 transition-all duration-200 ease-in-out scale-90 rounded-full cursor-pointer searchSubmit aspect-square bg-sky-100 hover:bg-blue-400 active:scale-75 hover:shadow-lg">
            <img src={rightArrowIcon} alt="" className="searchSubmitIcon" />
          </button>
        </form>
      </motion.div>

      <div className="dropDownBoxes flex gap-5">
        <div className="sortBox"></div>
        <div className="categoryBox"></div>
      </div>

      <div className="homePageButtons">
        <ActionBtn icon={addIcon} text="Add New Card" />
        {/* <ActionBtn icon={powerIcon} text="Power Mode" /> */}
      </div>
    </div>
  );
}

export default Home;
