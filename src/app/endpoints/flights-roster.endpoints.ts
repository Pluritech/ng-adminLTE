import { environment } from './../../environments/environment';


export class FlightsRosterEndpoints {

  public static flightRoster(idPilot: number): string {
    return `${environment.url}/pilot/${idPilot}/flight-roster/`;
  }

  public static postFlightRoster(idPilot: number): string {
    return `${environment.url}/pilot/${idPilot}/flight-roster`;
  }

  public static specificFlightRoster(idPilot: number, idFlightRoster: number): string {
    return `${this.flightRoster(idPilot)}${idFlightRoster}`;
  }

}
