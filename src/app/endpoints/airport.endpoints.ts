import { environment } from './../../environments/environment';


export class AirportEndpoints {
  public static getBaseAirport(): string {
    return `${environment.url}/airport`;
  }
}
