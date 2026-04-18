import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

//clsx → handles conditional classes
//twMerge → fixes Tailwind conflicts and merge the classes 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
