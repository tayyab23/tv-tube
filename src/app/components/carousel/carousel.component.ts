import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { Title } from '../../interfaces/Title';
import { Subscription } from 'rxjs';
import { TitleService } from 'src/app/services/title.service';
import { TITLE_ENDPOINTS, ENDPOINT_NAMES } from 'src/app/services/CONSTANTS'
import { Response } from 'src/app/interfaces/Response';
import { DragScrollComponent } from 'ngx-drag-scroll'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input('type') type;
  ds?: DragScrollComponent;
  name?: string;
  subs: Subscription[] = [];
  response?: Response;
  titles?: Title[];
  hiddenScrollbars?: boolean = true;

  constructor(private titleSrv: TitleService) { }

  ngOnInit(): void {
    this.name = ENDPOINT_NAMES[this.type]
    this.subs.push(this.titleSrv.getTitle(TITLE_ENDPOINTS[this.type]).subscribe(data => {
      this.response = data
      this.titles = data.results
    }));
  }

  ngAfterViewInit() { 
    this.ds = ViewChild(this.type, {read: DragScrollComponent})
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  scrollRight() {
    // TODO
    console.log(this.ds)
    this.ds?.moveRight();
  }

  scrollLeft() {
    // TODO
    // console.log(this.ds)
    // this.ds?.moveLeft();
  }
}
