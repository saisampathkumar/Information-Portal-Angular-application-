import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../service/articles.service";
import { Article } from "../model/article";
import { User } from "src/app/accounts/models/user.model";

@Component({
  selector: "app-articlecommentsdisplay",
  templateUrl: "./articlecommentsdisplay.component.html",
  styleUrls: ["./articlecommentsdisplay.component.scss"]
})
export class ArticlecommentsdisplayComponent implements OnInit {
  apple = false;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.articleSubject.subscribe((article: Article) => {
      //console.log("ArticlecommentsdisplayComponent:: ", article);
      this.article = article;
    });
  }
  liked = false;
  article: Article;

  like() {
    setTimeout(() => {
      if (this.liked) {
        this.article.likes -= 1;
      } else {
        this.article.likes += 1;
      }
      this.liked = !this.liked;
    }, 400);
  }
}
