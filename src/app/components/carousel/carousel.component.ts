import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../../interfaces/Title';
import {Subscription, Observable} from 'rxjs';
import { TitleService } from 'src/app/services/title.service';
import { TITLE_ENDPOINTS, BACKDROP_ROOT } from 'src/app/services/CONSTANTS'
import { Response } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() type: string = '';
  subs: Subscription[] = [];
  titlesBG: any[] = [];
  response?: Response;
  titles?: Title[];
  hiddenScrollbars?: boolean = true;

  constructor(private titleSrv: TitleService) { }

  ngOnInit(): void {
    this.subs.push(this.titleSrv.getTitle(TITLE_ENDPOINTS[this.type]).subscribe(data => {
      this.response = data
      this.titles = data.results
      this.titles.forEach(title => {
        this.titlesBG.push(BACKDROP_ROOT + title.backdrop_path);
      });
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  getUrl(title: Title) : string {
    return BACKDROP_ROOT + title.poster_path
  }
}
