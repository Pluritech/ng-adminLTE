import { environment } from './../../environments/environment';

export class FlightsEndpoints {

  public static getAllFlights() {
    return `${environment.url}/flight`;
  }

  public static getUniqueFlight(idFlight: number): string  {
    return `${this.getAllFlights()}/${idFlight}`;
  }

  public static getFileFlight(idFlight: number): string {
    return `${this.getUniqueFlight(idFlight)}/file`
  }

  public static removeFlight(idFlight: number): string  {
    return `${this.getAllFlights()}/${idFlight}`;
  }

  public static removeFlightFile(idFlight: number, idFlightFile: number): string  {
    return `${this.getFileFlight(idFlight)}/${idFlightFile}`;
  }
}
