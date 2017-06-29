import { environment } from './../../environments/environment';
export class AdminsEndpoints {

    public static admin(): string {
        return `${environment.url}/admin`;
    }

    public static specifcAdmin(id: number): string {
        return `${environment.url}/admin/${id}`;
    }

    public static specifcAdminStatus(idAdmin: number): string {
        return `${environment.url}/user/${idAdmin}/status-active`;
    }

}
