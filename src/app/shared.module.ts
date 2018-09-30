import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RestService } from './rate.service';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BanerComponent } from './baner/baner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  	FooterComponent,
    HeaderComponent,
    CardComponent,
    BanerComponent
  ],
  exports: [
  	FooterComponent,
    HeaderComponent,
    CardComponent,
    BanerComponent
  ]
})
export class SharedModule { }
