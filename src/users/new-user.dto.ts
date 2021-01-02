import { ApiProperty } from "@nestjs/swagger";

export class NewUserDto {
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
};
