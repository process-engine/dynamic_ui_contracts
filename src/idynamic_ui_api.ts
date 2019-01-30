export interface IDynamicUIApi {
  readonly assetsPath: string;

  getIndex(): Promise<any>;

  getWebcomponent(formKey: string): Promise<any>;
}
