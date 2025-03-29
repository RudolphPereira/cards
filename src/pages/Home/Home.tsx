import ActionBtn from "@/components/ActionBtn";
import { SortBox } from "@/components/SortBox";
import { CategoryBox } from "@/components/CategoryBox";
import { TaskCard } from "@/components/TaskCard";
import { Link } from "react-router";
import { ArrowRight, Search, Plus, Zap } from "lucide-react";
import InputPill from "@/components/InputPill";
import { FadeIn } from "@/components/FadeIn";
import { DelelteEditComplete } from "@/components/DelelteEditComplete";
import { CircleProgress } from "@/components/CircleProgress";
import { Tags } from "@/components/Tags";

type Props = {};

function Home({}: Props) {
  return (
    <section className="home flex flex-col gap-5">
      <div className="seachBox">
        <FadeIn delayNum={0}>
          <InputPill
            leftIcon={
              <Search className="transition-all duration-200 ease-in-out group-hover/search:text-mid-blue group-focus-within/search:text-mid-blue" />
            }
            htmlFor="searchInput"
            id="searchInput"
            placeHolder="Search your cards"
            additionalClassForCirBtn="hover:bg-mid-blue"
            rightIcon={<ArrowRight />}
          />
        </FadeIn>
      </div>

      <div className="dropDownBoxes flex gap-5 justify-between flex-wrap">
        <FadeIn delayNum={0.1}>
          <SortBox />
        </FadeIn>

        <FadeIn delayNum={0.2}>
          <CategoryBox />
        </FadeIn>
      </div>

      <div className="cardBoxes flex flex-col gap-4 max-h-[70vh] overflow-auto pb-3 no-scrollbar">
        <FadeIn delayNum={0.3}>
          <TaskCard
            DelelteEditComplete={<DelelteEditComplete />}
            CircleProgress={CircleProgress}
            Tags={<Tags />}
            TaskLink={true}
          />
        </FadeIn>
      </div>

      <div className="homePageButtons flex flex-col gap-4">
        <FadeIn delayNum={0.4}>
          <Link to={"/NewTask"}>
            <ActionBtn
              btnClass={`hover:bg-mid-blue`}
              icon={
                <Plus className="transition-all duration-300 ease-in-out group-hover:rotate-90 text-white" />
              }
              text="Add New Card"
            />
          </Link>
        </FadeIn>
        <FadeIn delayNum={0.5}>
          <ActionBtn
            btnClass={`hover:bg-mid-blue`}
            icon={
              <Zap className="transition-all duration-500 ease-in-out group-hover:rotate-180 text-white scale-90" />
            }
            text="Power Mode"
          />
        </FadeIn>
      </div>
    </section>
  );
}

export default Home;
