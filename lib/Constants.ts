// Key value should be the same here
export enum ProjectType {
  reactNative = 'reactNative',
  browser = 'browser',
  node = 'node'
}

export interface IArgs {
  url: string;
  debug: boolean;
  uninstall: boolean;
  type: ProjectType;
}

export enum WizardProperties {}