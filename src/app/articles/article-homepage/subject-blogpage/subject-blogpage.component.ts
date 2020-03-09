import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../service/articles.service";
import { Article } from "../../model/article";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject-blogpage",
  templateUrl: "./subject-blogpage.component.html",
  styleUrls: ["./subject-blogpage.component.scss"]
})
export class SubjectBlogpageComponent implements OnInit {
  searchInput: string;
  headerTitle: string;
  articles: Article[] = [];
  displayList: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.filteredArticles = [];
    this.route.params.subscribe(param => {
      this.headerTitle = param.type;

      this.articlesService
        .get("api/articles", { params: { subject: param.type } })
        .subscribe((data: Article[]) => {
          this.articles = this.displayList = data;
        });
    });
  }

  clearSearch() {
    this.searchInput = "";
  }

  searchArticle() {
    this.displayList = this.articles.filter(itm => {
      for (let i = 0; i < itm.tags.length; i++) {
        if (itm.tags[i].includes(this.searchInput)) {
          return true;
        }
      }
      return false;
    });
  }
}
