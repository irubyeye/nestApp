import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  readonly value: string;

  @ApiProperty({
    example: 'Superuser in the system',
    description: 'Description of the role',
  })
  readonly description: string;
}
