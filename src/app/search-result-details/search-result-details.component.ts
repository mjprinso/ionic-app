import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-search-result-details',
  templateUrl: './search-result-details.component.html',
  styleUrls: ['./search-result-details.component.scss'],
})
export class SearchResultDetailsComponent implements OnInit {
  @Input() info: any = {};
  constructor(private modal: ModalController) { }

  ngOnInit() {
    console.log(this.info);
  }

  closeModal() {
    this.modal.dismiss();
  }

}
