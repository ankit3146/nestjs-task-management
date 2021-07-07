import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateStatusTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
