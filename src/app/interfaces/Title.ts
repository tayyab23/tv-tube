import { Genre } from "./Genre";
import { Review } from "./Review";

export interface Title {
    id?: number;
    title: string;
    overview?: string;
    tagline?: string;
    backdrop_path?: string;
    poster_path?: string;
    genres?: Genre[];
    reviews?: Review[];
}