import { Injectable } from '@angular/core';

import { ToasterService } from 'angular2-toaster';
import { ErrorMessages } from './error-messages';

@Injectable()
export class UtilsService {

  constructor(
    private toasterService: ToasterService,
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
  }

  /**
   * This method is used to show a toast message to the user when an error is handled.
   * @param {string} errorStatus - An error string that has to be writed in error-messages.ts file
   */
  private showToast(errorStatus: string): void {
    const errorMessage = ErrorMessages[errorStatus] ? ErrorMessages[errorStatus] : ErrorMessages['Unexpected'];
    this.toasterService.pop('error', errorMessage);
  }

}
