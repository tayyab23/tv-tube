import { Component, OnInit } from '@angular/core';
import { Title } from '../../interfaces/Title';
import {Subscription} from 'rxjs';
import { TitleService } from 'src/app/services/title.service';
import { TITLE_ENDPOINTS, BACKDROP_ROOT } from 'src/app/services/CONSTANTS'
import { Response } from 'src/app/interfaces/Response';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  subs: Subscription[] = [];
  trending?: Response;
  bannerTitle?: Title;
  bannerBG?: string;

  constructor(private titleSrv: TitleService) { }

  ngOnInit(): void {
    this.subs.push(this.titleSrv.getTitle(TITLE_ENDPOINTS.trending).subscribe(data => {
      this.trending = data
      this.bannerTitle = data.results[0]
      this.bannerBG = BACKDROP_ROOT + this.bannerTitle.backdrop_path;
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }
}
