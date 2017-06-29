import { environment } from './../../environments/environment';
export class AirplanesEndpoints {

    public static airplanes(): string {
        return `${environment.url}/airplane`;
    }

    public static specificAirplane(airPlaneId: number): string {
        return `${environment.url}/airplane/${airPlaneId}`;
    }

    public static statusAirPlane(airPlaneId: number): string {
        return `${environment.url}/airplane/${airPlaneId}/status-active`;
    }

}
