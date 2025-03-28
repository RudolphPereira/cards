import addIcon from "../../assets/add.svg";
import powerIcon from "../../assets/power.svg";
import { motion } from "motion/react";
import ActionBtn from "@/components/ActionBtn";
import { SortBox } from "@/components/SortBox";
import { CategoryBox } from "@/components/CategoryBox";
import { TaskCard } from "@/components/TaskCard";

type Props = {};

function Home({}: Props) {
  return (
    <section className="home flex flex-col gap-5">
      <motion.div
        className="searchBox"
        initial={{ transform: "translateY(-2rem)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 2.3,
        }}
      >
        <form className="flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm h-14 group/search  group-focus/search">
          <label
            htmlFor="searchInput"
            className="flex items-center justify-center flex-1 rounded-full h-14 aspect-square "
          >
            <svg
              width="24"
              height="24"
              fill="none"
              className="transition-all duration-200 ease-in-out group-hover/search:text-mid-blue group-focus-within/search:text-mid-blue"
            >
              <g>
                <path
                  d="M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z"
                  fill="#1d2633"
                  className="fill-current"
                />
              </g>
            </svg>
          </label>
          <input
            type="text"
            className="searchInput w-100 h-14 outline-0 flex-8"
            id="searchInput"
            placeholder="Search your cards"
          />
          <button className="flex items-center justify-center flex-1 mr-1 transition-all duration-200 ease-in-out scale-90 rounded-full cursor-pointer searchSubmit aspect-square bg-dark-blue hover:bg-mid-blue active:scale-75 hover:shadow-lg hover:text-white text-white group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-all duration-400 ease-in-out rotate-50 group-hover:rotate-0"
            >
              <path
                d="M5 12H19"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current"
              />
            </svg>
          </button>
        </form>
      </motion.div>

      <div className="dropDownBoxes flex gap-5">
        <motion.div
          className="sortBox flex-1 "
          initial={{ transform: "translateY(-2rem)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 2.6,
          }}
        >
          <SortBox />
        </motion.div>
        <motion.div
          className="categoryBox flex-1"
          initial={{ transform: "translateY(-2rem)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 2.8,
          }}
        >
          <CategoryBox />
        </motion.div>
      </div>

      <div className="cardBoxes">
        <TaskCard />
      </div>

      <div className="homePageButtons">
        <ActionBtn icon={addIcon} text="Add New Card" />
        {/* <ActionBtn icon={powerIcon} text="Power Mode" /> */}
      </div>
    </section>
  );
}

export default Home;
