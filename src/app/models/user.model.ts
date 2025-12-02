import { CountryModel } from "./country.model";

export class UserModel {
  fullname: string;
  email: string;
  phone_prefix: string;
  phone_number: string;
  date_of_birth: string;
  password: string;
  country: string;
  constructor(data: any) {
    this.fullname = data.fullname;
    this.email = data.email;
    this.phone_prefix = data.phone_prefix;
    this.phone_number = data.phone_number;
    this.date_of_birth = data.date_of_birth;
    this.password = data.password;
    this.country =data.country;
  }
}

/*v*/