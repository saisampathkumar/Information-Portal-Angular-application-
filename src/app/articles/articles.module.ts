import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article/article.component";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { MaterialModule } from "../material/material.module";
import { MatCardModule } from "@angular/material/card";
import { MarkdownModule } from "ngx-markdown";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { ArticleHomepageComponent } from "./article-homepage/article-homepage.component";
import { ArticlescommentsComponent } from "./articlescomments/articlescomments.component";
import { MatInputModule } from "@angular/material/input";
import { ArticlecommentsdisplayComponent } from "./articlecommentsdisplay/articlecommentsdisplay.component";
import { AddArticleComponent } from "./add-article/add-article.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SubjectBlogpageComponent } from "./article-homepage/subject-blogpage/subject-blogpage.component";
import { SpliterPipe } from "./pipe/spliter.pipe";

@NgModule({
  declarations: [
    ArticleHomepageComponent,
    ArticlescommentsComponent,
    ArticlecommentsdisplayComponent,
    ArticleComponent,
    AddArticleComponent,
    SubjectBlogpageComponent,
    SpliterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ArticlesRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MarkdownModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule {}
