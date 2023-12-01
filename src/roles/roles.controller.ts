import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users/users.model';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleServise: RolesService) {}

  @ApiOperation({ summary: 'Role creation' })
  @ApiResponse({ status: 201, type: Role })
  @Post()
  create(@Body() roleDto: CreateRoleDto): Promise<Role> {
    return this.roleServise.createRole(roleDto);
  }

  @ApiOperation({ summary: 'Receiving certain role' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getRole(@Param('value') value: string): Promise<Role> {
    return this.roleServise.getRoleByValue(value);
  }
}
