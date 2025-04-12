import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { v4 as uid } from "uuid";

export const TodoContext = createContext({});

export function useTodo() {
  const value: object = useContext(TodoContext);
  return value;
}

type Props = {
  children: any;
};

interface Card {
  id: string;
  title: string;
  priority: number;
  complexity: number;
  dateSelected: any;
  timeSelected: string;
  subTasks: Array<SubTasks>;
  tags: Array<Tags>;
  completed: boolean;
  tagsString: string;
  power: number;
}

interface SubTasks {
  id: string;
  title: string;
  completed?: boolean;
}

interface Tags {}

export function TodoProvider({ children }: Props) {
  const storedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");
  const [todos, setTodos] = useState<Card[]>(storedTodos);
  const [sortValue, setSortValue] = useState<string>("Default");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [powerMode, setPowerMode] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const sortedTodos = [...todos];

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const navigate = useNavigate();

  const addTodo = (
    title: string,
    priority: number,
    complexity: number,
    dateSelected: any,
    timeSelected: string,
    subTasks: [],
    tags: [],
    tagsString: string
  ) => {
    const todoId = uid();
    const newTodoItem: Card = {
      id: todoId,
      completed: false,
      title: title,
      priority: priority,
      complexity: complexity,
      dateSelected: dateSelected.toDateString(),
      timeSelected: timeSelected,
      subTasks: subTasks,
      tags: tags,
      tagsString: tagsString,
      power: priority + complexity,
    };
    setTodos([...todos, newTodoItem]);
    navigate("/");
  };

  const editTodo = (
    id: string,
    title: string,
    priority: number,
    complexity: number,
    dateSelected: Date,
    timeSelected: string,
    subTasks: [],
    tags: [],
    tagsString: string
  ) => {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: title,
          priority: priority,
          complexity: complexity,
          dateSelected: dateSelected,
          timeSelected: timeSelected,
          subTasks: subTasks,
          tags: tags,
          tagsString: tagsString,
          power: priority + complexity,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    navigate("/");
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
          const dateSelected = new Date(todo.dateSelected);

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

  const searchText = (value: string) => {
    const searchText = value.trim().toLowerCase();
    setSearchValue(searchText);
    if (searchText === "") {
      setSearchValue("");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        sortValue,
        setSortValue,
        sortedTodos,
        selectedTags,
        setSelectedTags,
        powerMode,
        setPowerMode,
        searchValue,
        setSearchValue,
        handleBack,
        getTodo,
        deleteTodo,
        completeTodo,
        handleCompleteSubTask,
        handleRepeatSubTask,
        handleDeleteSavedSubTask,
        getProgress,
        getCardColor,
        searchText,
        editTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
