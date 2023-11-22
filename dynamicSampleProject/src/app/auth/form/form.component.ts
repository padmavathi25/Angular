import { IForm } from "../interface/form.interface";

export const loginFormConfig : IForm ={
  formTitle : 'Dynamic Login Form',
  saveBtnTitle :'Submit',
  resetBtnTitle:'Reset',
  imageUrl: '../../../assets/Images/login-BG.jpg',
  formControls : [
    {
      "name" :"username",
      "label" : "Email ",
      "value": "",
      "placeholder": "",
      "class":"col-lg-10;email",
      "type":"text",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Email is required"
        }
      ]
    },
    {
      "name" :"password",
      "label" : "Password ",
      "value": "",
      "placeholder": "",
      "class":"col-lg-10;password",
      "type":"text",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Password is required"
        }
      ]
    }
  ]
}
