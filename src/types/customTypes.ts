export type User = {
  _id: string;
  name: string;
};

export type CustomEvent = {
  title: string;
  start: Date;
  end: Date;
  notes?: string;
  bgColor?: string;
  user?: User;
};
