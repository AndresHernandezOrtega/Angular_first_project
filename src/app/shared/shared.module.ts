import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


// Material
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HighlightDirective,
    ExponentialPipe,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HighlightDirective,
    ExponentialPipe,
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
