import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../../interfaces/Title';
import { Subscription } from 'rxjs';
import { TitleService } from 'src/app/services/title.service';
import { TITLE_ENDPOINTS } from 'src/app/services/CONSTANTS'
import { Response } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() type: string = '';
  subs: Subscription[] = [];
  response?: Response;
  titles?: Title[];
  hiddenScrollbars?: boolean = true;

  constructor(private titleSrv: TitleService) { }

  ngOnInit(): void {
    this.subs.push(this.titleSrv.getTitle(TITLE_ENDPOINTS[this.type]).subscribe(data => {
      this.response = data
      this.titles = data.results
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }
}
