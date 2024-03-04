export interface Projects {
  msg:      string;
  total:    number;
  projects: Project[];
}

export interface Project {
  _id:          string;
  name:         string;
  technologies: string[];
  img:          string;
  __v?:         number;
  url:          string
}
