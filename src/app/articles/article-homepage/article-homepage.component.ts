import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article-homepage",
  templateUrl: "./article-homepage.component.html",
  styleUrls: ["./article-homepage.component.scss"]
})
export class ArticleHomepageComponent implements OnInit {
  subjects = [
    { name: "Angular", imagePath: "/assets/img/angular.jpg" },
    { name: "JavaScript", imagePath: "/assets/img/js.jpg" },
    { name: "NodeJS", imagePath: "/assets/img/nodejs.jpg" }
  ];

  constructor() {}

  ngOnInit(): void {}

  // subjectClick(subjectTitle) {
  //   console.log(event);
  // }
}
