import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../service/articles.service";
import { Article } from "../model/article";
import { count, flatMap, catchError } from "rxjs/operators";
import { Subject } from "../model/subject";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../accounts/models/user.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { throwError, Subscription } from "rxjs";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.scss"]
})
export class AddArticleComponent implements OnInit {
  constructor(
    private articlesService: ArticlesService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  private subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscription = this.articlesService
      .getCurrentUser()
      .subscribe((user: User) => {
        console.log(user);
        if (user == undefined || user.userType != "content provider") {
          this.router.navigateByUrl(`/articles`);
        } else {
          this.user = user;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  mdText: string;
  user: User = {
    id: 1,
    userName: "username",
    passWord: "123",
    email: "123@qq.com",
    firstName: "Eason",
    lastName: "Liu",
    userType: "content provider"
  };
  snackBarTimeOut = 3000;
  submitted = false;
  subjects: Subject[] = [Subject.Angular, Subject.JavaScript, Subject.NodeJS];
  articleForm: FormGroup = this.fb.group({
    subject: [, [Validators.required]],
    title: [, [Validators.required]],
    image: [, []],
    imageURL: [, []],
    timeToRead: [
      ,
      [Validators.required, Validators.min(1), Validators.max(100)]
    ],
    tags: [, [Validators.required]],
    mdText: [, [Validators.required]]
  });

  submit() {
    console.log(this.articleForm);
    this.submitted = true;
    // retrieve the length of articles, +1 as id
    this.articlesService
      .get("api/articles")
      .pipe(
        catchError(err => throwError(err)),
        flatMap(a => a),
        count()
      )
      .subscribe(
        num => {
          let newArticle = this.constructANewArticle(num);
          //console.log("newArticle:: ", newArticle)
          this.articlesService.post("api/articles", newArticle).subscribe(
            response => {
              console.log(response);
              this._snackBar.open(
                `Your article has been published!\nRedirecting in ${this
                  .snackBarTimeOut / 1000} seconds`,
                "OK",
                {
                  duration: this.snackBarTimeOut
                }
              );
              setTimeout(() => {
                this.router.navigateByUrl(
                  `/articles/${this.articleForm.value.subject}/${num + 1}`
                );
              }, this.snackBarTimeOut);
            },
            err => {
              console.error(`Got an error: ${err}`);
              this.showErrorSnackBar();
            }
          );
        },
        err => {
          console.error(`Got an error: ${JSON.stringify(err)}`);
          this.showErrorSnackBar();
        }
      );
  }

  constructANewArticle(num: number): Article {
    let article: Article = {
      id: num + 1,
      subject: this.articleForm.value.subject,
      title: this.articleForm.value.title,
      image:
        this.articleForm.value.image == null
          ? this.getDefaultImage(this.articleForm.value.subject)
          : this.articleForm.value.image,
      author: {
        userId: this.user.id,
        name: `${this.user.firstName} ${this.user.lastName}`,
        avatar: "assets/default_avatar.png"
      },
      publish_date: new Date(),
      content: btoa(
        unescape(encodeURIComponent(this.articleForm.value.mdText))
      ),
      timeToRead: this.articleForm.value.timeToRead,
      tags: this.getTags(this.articleForm.value.tags),
      likes: 0,
      comments: [],
      assessmentURL: ""
    };
    return article;
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.articleForm.controls.image.setValue(
      "data:image/png;base64," + btoa(e.target.result)
    );
  }

  getTags(tags: string): string[] {
    let values = tags.split(",");
    let res = [];
    values.forEach(val => {
      let v = val.trim();
      if (v.length > 0) {
        // avoid last empty string for "Angular, Routing, "
        // remove extra space
        v = v.replace(/\s+/gi, " ");
        res.push(v);
      }
    });
    return res;
  }

  showErrorSnackBar() {
    this._snackBar.open("Something went wrong, try again!", "OK", {
      duration: this.snackBarTimeOut
    });
    this.submitted = false; // reset submitted, so the submit button is enabled again
  }

  getDefaultImage(subject: Subject) {
    if (subject == Subject.Angular) {
      return "assets/angular_default.png";
    } else if (subject == Subject.JavaScript) {
      return "assets/js_default.png";
    } else if (subject == Subject.NodeJS) {
      return "assets/nodejs_default.png";
    }
  }
}
