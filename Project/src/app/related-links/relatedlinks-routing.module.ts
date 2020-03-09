import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RelatedLinksHomepageComponent } from './related-links-homepage/related-links-homepage.component';

const routes: Routes = [
    { path: '', component: RelatedLinksHomepageComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelatedLinksRoutingModule { }
