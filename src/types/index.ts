export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
