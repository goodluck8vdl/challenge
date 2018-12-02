import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LessonsService } from './lessons.service';
import { Lessons } from './models/lessons';
import { Pipe, PipeTransform } from '@angular/core';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

@Pipe({name: 'groupByDate'})
export class GroupByPipe implements PipeTransform {
    transform(collection: Array<any>, property: string = 'time'): Array<any> {
        if(!collection) {
            return null;
        }
        const groupedCollection = collection.reduce((previous, current)=> {
            if(!previous[current[property]]) {
                previous[current[property]] = [current];
            } else {
                previous[current[property]].push(current);
            }
            return previous;
        }, {});
        console.log(groupedCollection)
        return Object.keys(groupedCollection).map(time => ({ time: (new Date(time).toDateString()), value: groupedCollection[time] }));
        // toLocaleDateString()
        // Here I'm stuck on how to group by date only and ignore the time, so in order to display UI I manually changed the json file to the same time  on each date...
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    lessons =[]

    constructor(private _lessonsService: LessonsService) { }

    ngOnInit() {
        this.getFoods();  
    }  

    getFoods() {
        this._lessonsService.getLessons()
        .subscribe(data => this.lessons = data)
        //  .subscribe(resLessonData => this.lessons = resLessonData);
        //       data => { this.lessons = data}, 
        //       err => console.error(err),
        //       () => console.log('done loading foods')
        //     );            
    }
}


