import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedLinksHomepageComponent } from './related-links-homepage/related-links-homepage.component';
import { MaterialModule } from '../material/material.module';
import { RelatedLinksRoutingModule } from './relatedlinks-routing.module';

@NgModule({
  declarations: [RelatedLinksHomepageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RelatedLinksRoutingModule
  ]
})
export class RelatedLinksModule { }
