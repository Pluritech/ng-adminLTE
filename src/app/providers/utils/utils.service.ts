import { ServerService } from '@pluritech/server-service';
import { Injectable } from '@angular/core';

import { ToasterService } from 'angular2-toaster';
import { environment } from './../../../environments/environment.prod';
import { configuration } from './../../configuration';
import { ErrorMessages } from './error-messages';

@Injectable()
export class UtilsService {

  constructor(
    private toasterService: ToasterService,
    private serverService: ServerService,
  ) { }

  /**
   * This method is used to handle every error that occur on the application.
   * @param {any} error - The error to be handled
   */
  public handleError(error: any) {
    if (error && error.status) {
      console.error('Server error ->', error.status);
      this.showToast(error.status);
      return;
    }

    this.handleApplicationError(error);
  }

  /**
   * This method is used to handle an error of the application, that is not an HTTP error.
   * @param {any} error - The error to be handled
   */
  private handleApplicationError(error: any): void {
    const {message, stack} = error;
    this.sendLocalErrorToServer({message, stack});
  }

  /**
   * This method is used to show a toast message to the user when an error is handled.
   * @param {string} errorStatus - An error string that has to be writed in error-messages.ts file
   */
  private showToast(errorStatus: string): void {
    const errorMessage = ErrorMessages[errorStatus] ? ErrorMessages[errorStatus] : ErrorMessages['Unexpected'];
    this.toasterService.pop('error', errorMessage);
  }

  /**
   * This method is used to send the application error (that is not an HTTP error) to the server, for easily debug.
   * You have to set the serverErrorEndpoint in configuration file.
   * @param {message: string, stack: string} errorObject - The local application error.
   */
  private async sendLocalErrorToServer(errorObject: {message: string, stack: string}): Promise<void> {
    console.error('JavaScritp error ->', errorObject.message, errorObject.stack);

    if (!configuration.serverErrorEndpoint) { return; }

    try {
      await this.serverService.post(`${environment.url}/${configuration.serverErrorEndpoint}`, errorObject);
      console.log('An error was sent to server.');
    } catch (e) {
      console.error('An error occured while registering an error on the server.', e);
    }
  }

}
