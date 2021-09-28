export interface ChapterInfo {
  title: string;
  choices: string[];
}

export interface Location {
  choices: string[];
}

export interface completedChapters {
  [key: string]: boolean;
}
