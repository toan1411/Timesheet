import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timesheet } from './timesheet.entity';
import { TimesheetController } from './timesheet.controller';
import { TimesheetService } from './timesheet.service';
import { Project } from 'src/project/project.entity';
import { User } from 'src/user/entities/user.entity';
import { UserProject } from 'src/user-project/userProject.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Timesheet, Project, User, User,UserProject])],
    controllers: [TimesheetController],
    providers: [TimesheetService],
})
export class TimesheetModule { }
