/* eslint-disable @typescript-eslint/no-inferrable-types */
import { required, minLength } from "@rxweb/reactive-forms";

export class User {
  private _fullName: string = "";
   private _dateOfIncorporation!:Date
   private _email!:string
   private _password!:string
   private _confirmPassword!:string
  @required()
  set fullName(value: string) {
    this._fullName = value;   
  }
  get fullName(): string {
    return this._fullName
  }

  @required()
  set dateOfIncorporation(value: Date) {
    this._dateOfIncorporation = value;   
  }
  get dateOfIncorporation(): Date {
    return this._dateOfIncorporation
  }
  @required()
  set email(value: string) {
    this._email = value;   
  }
  get email(): string {
    return this._email
  }
 
  @required()
  set password(value: string) {
    this._password = value;   
  }
  get password(): string {
    return this._password
  }

  @required()
  set confirmPassword(value: string) {
    this._confirmPassword = value;   
  }
  get confirmPassword(): string {
    return this._confirmPassword
  }
   

  
}
