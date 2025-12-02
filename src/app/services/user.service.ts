import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { UserModel } from "../models/user.model";
 
@Injectable({
  providedIn: "root",
})
export class UserService {
  saveUser(user:UserModel) {     
    return of({ success: true, user }).pipe(delay(500));
  }
}