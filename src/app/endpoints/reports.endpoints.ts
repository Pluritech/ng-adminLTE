import { environment } from './../../environments/environment';
export class ReportsEndpoints {
    public static getActivePilots(): string {
        return `${environment.url}/report/active-pilot`;
    }

    public static getTotalFlights(): string {
        return `${environment.url}/report/flight-number`;
    }
}
