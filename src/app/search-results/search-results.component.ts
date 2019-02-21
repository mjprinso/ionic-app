import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchResultDetailsComponent } from '../search-result-details/search-result-details.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  @Input() sResult: any = {};

  constructor(public modal: ModalController) { }

  ngOnInit(): void {}

  async testClick(info) {
    console.log('Test clicked', info);
    const modal = await this.modal.create({
      component: SearchResultDetailsComponent,
      componentProps: {info: info}
    });
    return await modal.present();
  }

}
