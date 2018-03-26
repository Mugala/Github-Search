import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GitsearchService } from './services/gitsearch.service';



import { AppComponent } from './app.component';
import { GitsearchComponent } from './components/gitsearch/gitsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
