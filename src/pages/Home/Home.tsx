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
import { useEffect, useState } from "react";
import SortableList, { SortableItem, SortableKnob } from "react-easy-sort";
import arrayMove from "array-move";
import AlertInfo from "@/components/alert/Alert";
import NoData from "@/components/alert/NoData";

type Props = {};

function Home({}: Props) {
  const {
    todos,
    sortedTodos,
    sortValue,
    selectedTags,
    powerMode,
    setPowerMode,
    searchText,
    searchValue,
  }: any = useTodo();

  const [dragTodos, setDragTodos] = useState<any>(sortedTodos);
  const [noData, setNoData] = useState<boolean>(true);

  if (sortValue === "Ascending Priority") {
    sortedTodos.sort((a: any, b: any) => a.priority - b.priority);
  } else if (sortValue === "Descending Priority") {
    sortedTodos.sort((a: any, b: any) => b.priority - a.priority);
  } else if (sortValue === "Ascending Complexity") {
    sortedTodos.sort((a: any, b: any) => a.complexity - b.complexity);
  } else if (sortValue === "Descending Complexity") {
    sortedTodos.sort((a: any, b: any) => b.complexity - a.complexity);
  } else if (sortValue === "Ascending Date") {
    sortedTodos.sort(
      (a: any, b: any) => +new Date(a.dateSelected) - +new Date(b.dateSelected)
    );
  } else if (sortValue === "Descending Date") {
    sortedTodos.sort(
      (a: any, b: any) => +new Date(b.dateSelected) - +new Date(a.dateSelected)
    );
  }

  sortedTodos.reverse();

  useEffect(() => {
    setDragTodos(sortedTodos);
  }, [sortedTodos.length, selectedTags, searchValue]);

  let filteredTodos = sortedTodos.filter((todo: any) => {
    if (selectedTags.length > 0) {
      return selectedTags.some((selectedTag: any) => {
        return todo.tags.map((tag: any) => tag[0]).includes(selectedTag);
      });
    }
  });

  let filteredDragTodos = dragTodos.filter((todo: any) => {
    if (selectedTags.length > 0) {
      return selectedTags.some((selectedTag: any) => {
        return todo.tags.map((tag: any) => tag[0]).includes(selectedTag);
      });
    }
  });

  let filterSearchTodos = sortedTodos.filter((todo: any) => {
    if (searchValue !== "") {
      return todo.title.toLowerCase().includes(searchValue);
    }
  });

  let filterSearchDragTodos = dragTodos.filter((todo: any) => {
    if (searchValue !== "") {
      return todo.title.toLowerCase().includes(searchValue);
    }
  });

  let todosToRender = sortedTodos;
  let dragTodosToRender = dragTodos;

  if (filteredTodos.length > 0) {
    todosToRender = filteredTodos;
  } else {
    todosToRender = sortedTodos;
  }

  if (filteredDragTodos.length > 0) {
    dragTodosToRender = filteredDragTodos;
  }

  if (filterSearchTodos.length > 0) {
    todosToRender = filterSearchTodos;
  } else if (searchValue !== "" && filterSearchTodos.length === 0) {
    todosToRender = [];
  }

  if (filterSearchDragTodos.length > 0) {
    dragTodosToRender = filterSearchDragTodos;
  } else if (searchValue !== "" && filterSearchDragTodos.length === 0) {
    dragTodosToRender = [];
  }

  useEffect(() => {
    if (
      (searchValue !== "" && filterSearchDragTodos.length === 0) ||
      (searchValue !== "" && filterSearchTodos.length === 0)
    ) {
      setNoData(true);
    } else {
      setNoData(false);
    }
  }, [filterSearchTodos, filterSearchDragTodos]);

  // Power Mode
  const powerCard = [...sortedTodos]
    .sort((a: any, b: any) => b.power - a.power)
    .find((todo: any) => !todo.completed);

  // Drag Cards
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setDragTodos((array: any) => arrayMove(array, oldIndex, newIndex));

    if (filteredDragTodos.length > 0) {
      setDragTodos((array: any) =>
        arrayMove(filteredDragTodos, oldIndex, newIndex)
      );
    }

    if (filterSearchDragTodos.length > 0) {
      setDragTodos((array: any) =>
        arrayMove(filterSearchDragTodos, oldIndex, newIndex)
      );
    }
  };

  return (
    <section
      className={`home flex flex-col gap-5 relative px-4 py-4.5 ${
        todos.length === 0
          ? `min-h-[90vh] justify-center`
          : `min-h-[100%] justify-start`
      }`}
    >
      {todos.length !== 0 && (
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
                additionalClassForCirBtn={`group-hover/right-btn:bg-mid-blue group-focus-within/right-btn:bg-mid-blue rotate-45 group-hover/right-btn:rotate-0 group-focus-within/right-btn:rotate-0 pointer-events-none`}
                rightIcon={<ArrowRight />}
                handleGetValue={(e) => searchText(e.target.value)}
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

      <div className="cardBoxes flex flex-col gap-4 overflow-visible pb-3 no-scrollbar">
        <FadeIn delayNum={0.3}>
          <div className="flex flex-col-reverse gap-5 items-center w-[100%]">
            {powerMode && powerCard !== undefined ? (
              <TaskCard
                key={powerCard.id}
                todo={powerCard}
                CircleProgress={CircleProgress}
                DeleteEditComplete
                Tags
                TaskLink
              />
            ) : (
              <>
                {sortValue === "Custom" ? (
                  <SortableList
                    onSortEnd={onSortEnd}
                    className="list  flex flex-col-reverse gap-5 w-[100%]"
                    draggedItemClassName="dragged rounded-xl bg-whitesmoke"
                  >
                    {dragTodosToRender.map((todo: any) => (
                      <SortableItem key={todo.id}>
                        <div className="item relative flex flex-col sm:items-center">
                          <SortableKnob>
                            <div className="sm:-mb-5 mb-2 w-[fit-content] px-3 py-1.5 rounded-sm bg-white border sm:border-0 sm:bg-white/80 z-20 font-medium text-mid-blue text-sm hover:shadow-sm hover:border-mid-blue transition duration-200 ease-in-out hover:bg-mid-blue hover:text-white ">
                              Drag Me
                            </div>
                          </SortableKnob>
                          <TaskCard
                            key={todo.id}
                            todo={todo}
                            CircleProgress={CircleProgress}
                            DeleteEditComplete
                            Tags
                            TaskLink
                          />
                        </div>
                      </SortableItem>
                    ))}
                  </SortableList>
                ) : (
                  <>
                    {todosToRender.map((todo: any) => (
                      <TaskCard
                        key={todo.id}
                        todo={todo}
                        CircleProgress={CircleProgress}
                        DeleteEditComplete
                        Tags
                        TaskLink
                      />
                    ))}
                  </>
                )}
              </>
            )}
            {noData && !powerMode && <NoData />}
          </div>
        </FadeIn>
      </div>

      <div className="homePageButtons flex flex-col gap-4">
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

        {todos.length >= 2 && (
          <>
            {powerCard !== undefined && (
              <FadeIn delayNum={0.5}>
                <ActionBtn
                  handleClickEvent={() => setPowerMode(!powerMode)}
                  btnClass={`hover:bg-mid-blue ${
                    powerMode ? `bg-mid-blue` : ""
                  }`}
                  icon={
                    <Zap className="transition-all duration-500 ease-in-out group-hover:rotate-180 text-white scale-90" />
                  }
                  text="Power Mode"
                />
              </FadeIn>
            )}
          </>
        )}
      </div>

      {powerMode && <AlertInfo />}
    </section>
  );
}

export default Home;
