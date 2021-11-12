import { Title } from "./Title";

export interface Response {
    results: Title[];
    page: number;
    total_results: number;
    total_pages: number;
  }