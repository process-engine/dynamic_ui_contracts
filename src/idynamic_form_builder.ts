import {UserTask} from './data_models/user_task';

export interface IDynamicFormBuilder {
  buildFormFor(userTask: UserTask): any;
}
