import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Review } from '../interfaces/Review';
import { Observable } from 'rxjs';
import { tmdb } from './CONSTANTS'
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private api_key = environment.api_key;

  constructor(private api: HttpClient) { }

  getTitle(endpoint: string) : Observable<Response> {
    return this.api.get<Response>(`${tmdb}${endpoint}`, {
      params: {
        api_key: this.api_key
      }
    })
  }

  getReview(endpoint: string) : Observable<Review[]> {
    return this.api.get<Review[]>(`${tmdb}`)
  }
}
