export interface User {
  id: number;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse {
  statusCode: number;
  message: string;
  data?: User | User[];
}
