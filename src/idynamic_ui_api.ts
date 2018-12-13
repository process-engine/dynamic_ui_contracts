import {IIdentity} from '@essential-projects/iam_contracts';

import {DialogForCorrelationMessage} from './messages/index';

export type OnDialogForCorrelationCallback = (dialogForCorrelation: DialogForCorrelationMessage) => void | Promise<void>;

export interface IDynamicUIApi {
  getDialog(sessionId: string, formKey: string, correlationId: string, processInstanceId: string, userTaskId: string): Promise<any>;

  finishDialog(sessionId: string, resultData: any): Promise<any>;

  onDialogForCorrelation(identity: IIdentity, correlationId: string, showDialogCallback: OnDialogForCorrelationCallback): void;
}
