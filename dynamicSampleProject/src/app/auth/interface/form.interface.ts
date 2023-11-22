// export interface IForm{
//   formControls : IformControl[]
//   formTitle? : 'string',
//   saveBtnTitle? :'string',
//   resetBtnTitle?:'string',
// }

export interface IForm {
  formControls: IFormControl[];
  formTitle?: string;
  saveBtnTitle?: string;
  resetBtnTitle?: string;
   imageUrl?: string;
}

export interface IFormControl {
  name: string
  label?: string
  value: string
  placeholder: string
  class: string
  type: string
  validators: IValidator[]
}

export interface IValidator {
  validatorName: string
  message?: string
  required?: boolean
}
