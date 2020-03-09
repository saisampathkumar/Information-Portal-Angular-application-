import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleComponent } from "./article/article.component";
import { ArticleHomepageComponent } from "./article-homepage/article-homepage.component";
import { AddArticleComponent } from "./add-article/add-article.component";
import { SubjectBlogpageComponent } from "./article-homepage/subject-blogpage/subject-blogpage.component";

const routes: Routes = [
  { path: "", component: ArticleHomepageComponent },
  { path: "add-article", component: AddArticleComponent },
  { path: ":type", component: SubjectBlogpageComponent },
  { path: ":type/:id", component: ArticleComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
