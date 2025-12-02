export class CountryModel {
    name: string;
    phone_prefix: string;
    constructor(data: any) {
        this.name = data.name;
        this.phone_prefix = data.phone_prefix;
    }
}