import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (time: string) => {
  let hours: string | number = Number(time.split(":")[0]);
  let minutes: string | number = Number(time.split(":")[1]);
  let suffix = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const displayTime = hours + ":" + minutes + " " + suffix;
  return displayTime;
};

export const createCleanArr = (value: string) => {
  const arr = value
    .replace(/ +/g, "")
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");

  const uniArr = [...new Set(arr)];
  return uniArr;
};

export const generateTagBgColor = () => {
  const colors = ["bg-golden-rod/45", "bg-dark-red/45", "bg-mid-blue/45"];
  const randomNumber = Math.floor(Math.random() * colors.length);
  const bgColor = colors[randomNumber];
  return bgColor;
};

export const setIntensity = (value: number) => {
  if (value <= 4) {
    return "Low";
  } else if (value <= 7) {
    return "Medium";
  } else if (value <= 10) {
    return "High";
  }
};
