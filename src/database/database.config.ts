import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/users.model';
import { Role } from '../roles/roles.model';
import { UserRole } from '../roles/user-role.model';

export const databaseConfig = (
  configService: ConfigService,
): SequelizeModuleOptions => {
  return {
    dialect: 'postgres',
    host: configService.get<string>('POSTGRES_HOST'),
    port: configService.get<number>('POSTGRES_PORT'),
    username: configService.get<string>('POSTGRES_USER'),
    password: configService.get<string>('POSTGRES_PASSWORD'),
    database: configService.get<string>('POSTGRES_DB'),
    models: [User, Role, UserRole],
    autoLoadModels: true,
  };
};
