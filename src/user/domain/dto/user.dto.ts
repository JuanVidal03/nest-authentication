import { IsEmail, IsString, MinLength, IsNotEmpty } from "class-validator";

export class UserDto {
  @IsEmail()
  @IsNotEmpty({ message: "Email is required" })
  email: string;

  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @IsNotEmpty({ message: "Password is required" })
  password: string;

  @IsString()
  @IsNotEmpty({ message: "Username is required" })
  username: string;
}
