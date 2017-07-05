export class Utils {

 /** This method is used to repĺace all '_' to '-' in names key of params url */
  public static standardizePropFilter(params: any): any {
    let paramsResult = {};
    for(let key in params) {
      if(params[key]) {
        paramsResult[key.replace(new RegExp(/_/, 'g'), '-')] = params[key];
      }
    }
    return paramsResult;
  }

 /** This method is used to transform date Date to string time on format HH:mm */
  public static dateToTime(date: Date): string {
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    return `${hours}:${minutes}`;
  }

 /** This method is used to transform date Date to string on format dd/mm/aaaa */
  public static dateToString(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

 /** This method is used to transform string aaaa-mm-dd to object Date */
  public static transformStringToDate(date: string): Date {
    const dateSplit = date.split('-').map((value, idx) => Number.parseInt(value) - (idx % 2));
    return new Date(dateSplit[0], dateSplit[1], dateSplit[2]);
  }

 /** This method is used to transform string aaaa-mm-dd to dd/mm/aaaa */
  public static formatDate(date: string): string {
    return date.split('-').reverse().join('/');
  }

  public static convertTimestampToDate(timeStamp: number): Date {
    return new Date(timeStamp * 1000);
  }

}
