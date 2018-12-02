import { LessonsService } from './lessons.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GroupByPipe } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
