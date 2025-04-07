import ActionBtn from "@/components/buttons/ActionBtn";
import { SortBox } from "@/components/SortBox";
import CategoryBox from "@/components/CategoryBox";
import { TaskCard } from "@/components/TaskCard";
import { Link } from "react-router";
import { ArrowRight, Search, Plus, Zap } from "lucide-react";
import InputPill from "@/components/form/InputPill";
import { FadeIn } from "@/components/animations/FadeIn";
import { CircleProgress } from "@/components/progressBars/CircleProgress";
import { useTodo } from "@/context/TodoContext";

type Props = {};

function Home({}: Props) {
  const { todos }: any = useTodo();
  return (
    <section
      className={`home flex flex-col gap-5 relative px-4 py-4.5 ${
        todos.length === 0
          ? `min-h-[90vh] justify-center`
          : `min-h-[100%] justify-start`
      }`}
    >
      {todos.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="searchBox sticky top-5 z-10 ">
            <FadeIn delayNum={0}>
              <InputPill
                leftIcon={
                  <Search className="transition-all duration-200 ease-in-out group-hover/search:text-mid-blue group-focus-within/search:text-mid-blue" />
                }
                htmlFor="searchInput"
                id="searchInput"
                placeHolder={"Search your cards"}
                additionalClassForCirBtn="group-hover/right-btn:bg-mid-blue group-focus-within/right-btn:bg-mid-blue rotate-45 group-hover/right-btn:rotate-0 group-focus-within/right-btn:rotate-0 pointer-events-none"
                rightIcon={<ArrowRight />}
              />
            </FadeIn>
          </div>

          <div className="dropDownBoxes sticky top-24 z-10 flex gap-5 justify-between flex-wrap">
            <FadeIn delayNum={0.1}>
              <SortBox />
            </FadeIn>

            <FadeIn delayNum={0.2}>
              <CategoryBox />
            </FadeIn>
          </div>
        </>
      )}

      <div className="cardBoxes flex flex-col gap-4 overflow-auto pb-3 no-scrollbar">
        <FadeIn delayNum={0.3}>
          <div className="flex flex-col gap-5">
            {todos.map((todo: any) => (
              <TaskCard
                key={todo.id}
                todo={todo}
                CircleProgress={CircleProgress}
                DeleteEditComplete
                Tags
                TaskLink
              />
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="homePageButtons flex flex-col gap-4 ">
        <FadeIn delayNum={todos.length !== 0 ? 0.4 : 0}>
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

        {todos.length <= 1 ? (
          <></>
        ) : (
          <FadeIn delayNum={0.5}>
            <ActionBtn
              btnClass={`hover:bg-mid-blue`}
              icon={
                <Zap className="transition-all duration-500 ease-in-out group-hover:rotate-180 text-white scale-90" />
              }
              text="Power Mode"
            />
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export default Home;
