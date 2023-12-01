import {
  Model,
  Column,
  DataType,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRole } from '../roles/user-role.model';

interface userCreationAttrs {
  email: string;
  password: string;
}
@Table({ tableName: 'users' })
export class User extends Model<User, userCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'example@emai.com', description: 'User Email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '12345', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'Is banned' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: string;

  @ApiProperty({
    example: 'russia(terrorist state) patriot',
    description: 'Ban reason',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: User[];
}
