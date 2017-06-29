import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
export interface ConfirmModel {
  title: string;
  message: string;
  btnYes: string;
  btnNo: string;
}
@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './confirm.component.html'
})

export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  btnYes: string;
  btnNo: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm(res: boolean) {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = res;
    this.close();
  }
}
