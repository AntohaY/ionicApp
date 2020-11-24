import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PythonClassifierService {

  constructor(private http: HttpClient,) { }

  private serverAddress = "https://sentiment-analysis-anton.herokuapp.com/";

  getSentiment(text) {
    return this.http.get(`${this.serverAddress}classify`,
        {
          params: {
            message: text.toString()
          }
        })
  }
}
