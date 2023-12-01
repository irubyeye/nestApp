import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@email.com', description: 'New user email' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'New user password' })
  readonly password: string;
}
