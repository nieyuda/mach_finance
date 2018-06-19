import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { PageContentComponent } from './page-content/page-content.component';
import { MetricsGroupComponent } from './metrics-group/metrics-group.component';
import { ProgressComponent } from './progress/progress.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    PageContentComponent,
    MetricsGroupComponent,
    ProgressComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
