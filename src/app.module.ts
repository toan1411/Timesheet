import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { ClientModule } from './clients/client.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from "@nestjs/config";
import { dataSourceOptions } from "db/data-source";
import { TimesheetModule } from './timesheet/timesheet.module';
import { UserProjectModule } from './user-project/userProject.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
        AuthModule, UserModule, ClientModule, TaskModule, ProjectModule, TimesheetModule, UserProjectModule],
    controllers: [],
    providers: [],
})
export class AppModule { }