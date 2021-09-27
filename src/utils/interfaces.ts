// export interface userSelection {
//   chapter: string,
//   choice: string
// }

export interface allUserSelections {
  [key: string]: boolean
}

export interface ChapterInfo {
  title: string,
  choices: string[]
}

export interface Location {
  title: string,
   choices: string[]
} 
