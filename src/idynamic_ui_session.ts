import {IIdentity} from '@essential-projects/iam_contracts';

export interface IDynamicUISession {
  getIdentityForSessionId(sessionId: string): Promise<IIdentity>;
}
