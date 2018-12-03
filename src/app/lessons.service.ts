import { Lessons } from './models/lessons';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class LessonsService {
    public _url: string = "/assets/data/channel.json";

    constructor(private http:HttpClient) {}
 
    getLessons(){  
        return this.http.get<Lessons[]>(this._url)
    }

}
