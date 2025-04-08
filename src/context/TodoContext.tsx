import { v4 as uid } from "uuid";
import {
  useState,
  useEffect,
  FormEvent,
  createContext,
  useContext,
} from "react";
import { formatTime, createCleanArr, generateTagBgColor } from "@/lib/utils";
import { useNavigate } from "react-router";

export const TodoContext = createContext({});

export function useTodo() {
  const value: object = useContext(TodoContext);
  return value;
}

type Props = {
  children: any;
};

interface LevelOptions {
  value: string;
}

interface Card {
  id: string;
  title: string;
  priority: number;
  complexity: number;
  dateSelected: Date | undefined;
  timeSelected: string;
  subTasks: Array<SubTasks>;
  tags: Array<Tags>;
  completed: boolean;
  power: number;
}

interface SubTasks {
  id: string;
  title: string;
  completed?: boolean;
}

interface Tags {}

export function TodoProvider({ children }: Props) {
  const [todos, setTodos] = useState<Card[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [priority, setPriority] = useState<number>(1);
  const [complexity, setComplexity] = useState<number>(1);
  const [calendarDate, setCalendarDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [subTasks, setSubTasks] = useState<SubTasks[]>([]);
  const [newSubTask, setNewSubTask] = useState<string>("");
  const [tagList, setTagList] = useState<Tags[]>([]);
  const [newTag, setNewTag] = useState<string>("");
  const [sortValue, setSortValue] = useState("Default");
  const sortedTodos = [...todos];

  const navigate = useNavigate();

  const optionsLevel: LevelOptions[] = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
  ];

  // Set Tag colors
  const tagArr = createCleanArr(newTag);

  const colorsTagArr = tagArr.map(() => {
    const colors = generateTagBgColor();
    return colors;
  });

  const tagsWithColorsArr = tagArr.map((tag, index) => {
    return [tag, colorsTagArr[index]];
  });

  useEffect(() => {
    setTagList(tagsWithColorsArr);
  }, [newTag]);

  useEffect(() => {
    if (tagList.length === 0) {
      const unTaggedItem: string[] = ["untagged", "bg-dark-blue/25"];
      setTagList([...tagList, unTaggedItem]);
    }
  }, [tagList]);

  const addTodo = () => {
    if (newTodo !== "") {
      const todoId = uid();
      const newTodoItem: Card = {
        id: todoId,
        title: newTodo,
        priority: priority,
        complexity: complexity,
        dateSelected: calendarDate,
        timeSelected: formatTime(time),
        subTasks: subTasks,
        tags: tagList,
        completed: false,
        power: priority + complexity,
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo("");
      setPriority(1);
      setComplexity(1);
      setCalendarDate(undefined);
      setTime("");
      setNewSubTask("");
      setSubTasks([]);
      setNewTag("");
      setTagList([]);
    }
  };

  const addSubTask = () => {
    if (newSubTask !== "") {
      const subTaskId = uid();
      const newSubTaskItem: SubTasks = {
        id: subTaskId,
        title: newSubTask,
        completed: false,
      };
      setSubTasks([...subTasks, newSubTaskItem]);
      setNewSubTask("");
    }
  };

  const getTodo = (id: string) => {
    return todos.find((todo) => todo.id === id);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        if (todo.completed) {
          todo.subTasks.map((subTask) => {
            subTask.completed = true;
          });
        } else {
          todo.subTasks.map((subTask) => {
            subTask.completed = false;
          });
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo();
    navigate("/");
  };

  const handleDeleteSubTask = (id: string) => {
    const updatedSubTasks = subTasks.filter((subTask) => subTask.id !== id);
    setSubTasks(updatedSubTasks);
  };

  const handleCompleteSubTask = (todoId: string, id: string) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === todoId) {
        todo.subTasks.map((subTask) => {
          if (subTask.id === id) {
            subTask.completed = !subTask.completed;
            if (!subTask.completed) {
              todo.completed = false;
            }
          }
          return subTask;
        });

        const allSubTasksCompletedValue = todo.subTasks.every((subTask) => {
          return subTask.completed;
        });

        if (allSubTasksCompletedValue) {
          todo.completed = true;
        } else {
          todo.completed = false;
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRepeatSubTask = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = false;
        todo.subTasks.map((subTask) => {
          subTask.completed = false;
        });
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteSavedSubTask = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.subTasks.pop();

        const allSubTasksCompletedValue = todo.subTasks.every((subTask) => {
          return subTask.completed;
        });

        if (allSubTasksCompletedValue) {
          todo.completed = true;
        } else {
          todo.completed = false;
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const getProgress = (id: string) => {
    const percentageValue = [...todos]
      .map((todo) => {
        if (todo.id === id) {
          const subTasksLength = todo.subTasks.length;

          const completedSubTaskNo = todo.subTasks.filter(
            (subTask) => subTask.completed
          ).length;

          let percentage: number = 0;

          if (subTasksLength < 1) {
            percentage = 0;
          } else {
            percentage = Math.round(100 / subTasksLength) * completedSubTaskNo;
          }

          return Number(percentage);
        }
      })
      .filter((e: any) => e !== undefined)
      .toString();
    return percentageValue;
  };

  const getCardColor = (id: string) => {
    const cardColor = todos
      .map((todo) => {
        if (todo.id === id) {
          const dateSelected = todo.dateSelected;

          if (dateSelected !== undefined) {
            const dueDateInThreeDays = new Date();
            const dueDateToday = new Date();

            const findDueDayInThreeDays = new Date(
              dueDateInThreeDays.setDate(dueDateToday.getDate() + 3)
            );

            const dueDateTodayString = dueDateToday.toDateString();
            const dateSelectedString = dateSelected.toDateString();

            if (dueDateTodayString === dateSelectedString) {
              return "bg-dark-red";
            }

            if (dateSelected < dueDateToday) {
              return "bg-dark-red";
            }

            if (dateSelected <= findDueDayInThreeDays) {
              return "bg-golden-rod";
            } else {
              return "bg-mid-blue";
            }
          } else {
            return "bg-mid-blue";
          }
        }
      })
      .toString()
      .replace(/,/g, "");
    return cardColor;
  };

  const handleBack = () => {
    setNewTodo("");
    setPriority(1);
    setComplexity(1);
    setCalendarDate(undefined);
    setTime("");
    setNewSubTask("");
    setSubTasks([]);
    setNewTag("");
    setTagList([]);
    navigate("/");
  };

  console.log(todos);

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        setNewTodo,
        priority,
        setPriority,
        complexity,
        setComplexity,
        calendarDate,
        setCalendarDate,
        time,
        setTime,
        subTasks,
        newSubTask,
        setNewSubTask,
        newTag,
        setNewTag,
        optionsLevel,
        sortValue,
        setSortValue,
        sortedTodos,
        getTodo,
        deleteTodo,
        completeTodo,
        handleOnSubmit,
        handleDeleteSubTask,
        handleCompleteSubTask,
        handleRepeatSubTask,
        handleDeleteSavedSubTask,
        getProgress,
        addSubTask,
        handleBack,
        getCardColor,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
