import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalInfo?: string;
  @Input() modalNo: string;
  @Input() modalYes: string;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  language = '';

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });
  }

  updateLanguage(language) {
    this.language = language;
  }

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }

}
