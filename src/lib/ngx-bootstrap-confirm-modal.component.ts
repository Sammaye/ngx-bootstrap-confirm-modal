import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'modal-content',
  template: `
      <div class="modal-body text-center">
          <p class="lead mb-5">{{ message }}</p>
          <button type="button" class="btn btn-lg btn-outline-secondary mr-5" (click)="decline()" >{{ btnNoText }}</button>
          <button type="button" class="btn btn-lg btn-success" (click)="confirm()" >{{ btnYesText }}</button>
      </div>
  `
})
export class NgxBootstrapConfirmModalComponent implements OnInit {
  @Output() result = new EventEmitter<boolean>();

  message = 'Are you sure?';
  btnNoText = 'No';
  btnYesText = 'Yes';

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {}

  confirm(): void {
    this.bsModalRef.hide();
    this.result.emit(true);
  }

  decline(): void {
    this.bsModalRef.hide();
    this.result.emit(false);
  }
}
