export type IAddress = {
  street: string;
  city: string;
  zipcode: string;
};

export type IUser = {
  id: number;
  name: string;
  email: string;
  address: IAddress;
};

export type ITodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
