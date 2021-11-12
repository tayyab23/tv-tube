import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Genre } from '../interfaces/Genre';
import { Review } from '../interfaces/Review';
import { Title } from '../interfaces/Title';
import { Observable } from 'rxjs';
import { DB } from './CONSTANTS'

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private api_key = environment.api_key;

  constructor(private api: HttpClient) { }

  getTitle(endpoint: string) : Observable<Title[]> {
    return this.api.get<Title[]>(`${DB}${endpoint}`, {
      params: {
        api_key: this.api_key
      }
    })
  }

  getReview(endpoint: string) : Observable<Review[]> {
    return this.api.get<Review[]>(`${DB}`)
  }
}
