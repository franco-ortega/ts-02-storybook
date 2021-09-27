export interface ChapterInfo {
  title: string;
  choices: string[];
}

export interface Location {
  title: string;
  choices: string[];
}

export interface completedChapters {
  [key: string]: boolean;
}
