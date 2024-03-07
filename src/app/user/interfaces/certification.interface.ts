export interface Certifications {
  msg:           string;
  total:         number;
  certification: Certification[];
}

export interface Certification {
  _id:        string;
  name:       string;
  icon:       string;
  entity:     string;
  url:        string;
  date:       Date;
  __v:        number;
  credential: string;
}
