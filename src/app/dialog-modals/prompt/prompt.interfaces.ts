import { Validators } from '@angular/forms';
export interface PromptModel {
  title: string;
  fields: FieldModel[];
  btnYes: string;
  btnNo: string;
}

export interface FieldModel {
  idField: string;
  valueDefault: string;
  type: string;
  label: string;
  validators: Validators[];
  placeholder?: string;
}
