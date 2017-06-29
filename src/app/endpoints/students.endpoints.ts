import { environment } from './../../environments/environment';

export class StudentsEndpoints {

    public static students(): string {
        return `${environment.url}/pilot`;
    }

    public static specificStudentStatus(idStudent: number): string {
        return `${environment.url}/user/${idStudent}/status-active`;
    }

    public static specificStudent(idStudent: number): string {
        return `${this.students()}/${idStudent}`;
    }
}
