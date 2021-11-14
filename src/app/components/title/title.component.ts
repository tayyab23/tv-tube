import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../../interfaces/Title';
import { BACKDROP_ROOT } from 'src/app/services/CONSTANTS'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title?: Title;
  name?: string;
  overview?: string;
  poster?; string;
  backdrop?: string;
  imgInView?: string;

  constructor() { }

  ngOnInit(): void { 
    this.name = this.title?.title
    this.overview = this.title?.overview

    this.poster = BACKDROP_ROOT + this.title?.poster_path
    this.backdrop = BACKDROP_ROOT + this.title?.backdrop_path
    this.imgInView = this.poster
   }

   // TODO debounce this to improve experience
   onMouseOver() {
     this.imgInView = this.backdrop
   }

   onMouseOut() {
     this.imgInView = this.poster
   }
}
