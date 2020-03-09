import { Component, OnInit } from '@angular/core';
import { VideoService, Video, VideoDisplay } from '../video.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/accounts/models/user.model';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
import { Auth } from 'src/app/accounts/models/auth.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  constructor(private videoSvc: VideoService, 
              private httpClient: HttpClient, 
              private router: Router,
              private _snackBar: MatSnackBar,
              private accountsService: AccountsService) { }
  
  ngOnInit(): void {
    this.videoSvc.getVideoList().subscribe(response => {
      this.videoList = response;
    },
    error => {
      alert("Sorry. There was a problem getting data.")
    });

    this.accountsService.getBehaviorSubject().subscribe((auth: Auth) => {
      // print out user info
      //console.log('Video Component User Info: ' + JSON.stringify(auth.currentUser, null, 2));
      // set currentUser for your component (if needed)
      this.currentUser = auth.currentUser;
    });
  }

  currentUser: User;
  flipped: boolean = false;
  videoList: Video[] = [];
  videoData: VideoDisplay[] = [];
  displayArr: boolean[] = [];
  selectedFile: File;
  videoDataForPost;
  theName;
  theCourse;
  selectedCourse;
  durationInSeconds = 4000;
  fileUrl
  theTitle
  title
  theUrl
  url
  newItemUrl
  submitted: boolean = false;
  showalert: boolean;
  regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

  uploadForm = new FormGroup ({
    theName: new FormControl(''),
    theCourse: new FormControl('', Validators.required),
    theTitle: new FormControl('', Validators.required),
    theUrl: new FormControl('', Validators.compose([
                            Validators.pattern(this.regExp), 
                            Validators.minLength(48)
    ]))
  })
  
  //show videos
  onClick(courseId: number) {
    if (this.displayArr[courseId] === true) {
      this.displayArr = [];
      this.videoList.forEach(a => this.displayArr.push(false));
    } else {
      this.displayArr = [];
      this.videoList.forEach(a => this.displayArr.push(false));
      this.displayArr[courseId] = true;
    }
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    //console.log(this.selectedFile)
  }

  openSnackBar() {
    this._snackBar.open(`Video has been uploaded successfully`, "OK", {
      duration: this.durationInSeconds
    });
  }

  resetForm() {
    this.uploadForm.controls.theCourse.setValue = null;
    this.uploadForm.controls.theName.setValue = null;
  }

  nav(courseName) {
    this.router.navigate(['videoList'], {queryParams:
      {
      course: courseName,
    }});
  } 

  //nav back
  navBack() {
    this.flipped = !this.flipped;
  }
  flipIt() {
    this.flipped = !this.flipped;
    this.uploadForm.reset();
  }

  convertUrl(url) {
    let match = url.match(this.regExp);
    if (match && match[2].length == 11) {
      //console.log("//www.youtube.com/embed/" + match[2]);
      return "//www.youtube.com/embed/" + match[2];
    } else {
      return 'no video found';
    }
  }

  onUpload() {
    this.selectedCourse = this.uploadForm.controls.theCourse.value;
    this.title = this.uploadForm.controls.theTitle.value;
    this.url = this.uploadForm.controls.theUrl.value;

    if(this.selectedCourse == 0) {
      this.videoDataForPost = this.videoList[0]
    } else if(this.selectedCourse == 1) {
      this.videoDataForPost = this.videoList[1]
    } else if (this.selectedCourse == 2) {
      this.videoDataForPost = this.videoList[2]
    }

    if(this.selectedFile != undefined) {
      const uploadData = new FormData();
      uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
      this.fileUrl = window.URL.createObjectURL(this.selectedFile);
      this.newItemUrl = this.fileUrl;
      this.submitted = true;
    } else {
      this.newItemUrl = this.convertUrl(this.url);
      //console.log(this.newItemUrl+this.newItemUrl.length);
      this.submitted = true;
    }
    
    let videoData = this.videoDataForPost.videoData;
    let len = videoData.length;
    
    let newItem = new VideoDisplay;
    newItem.id = len + 1;
    newItem.title = this.title;
    newItem.url = this.newItemUrl;

    videoData.push(newItem);

    this.httpClient.put(`/api/video/${this.selectedCourse}`, this.videoDataForPost).subscribe((data) => {
    //console.log("after::", data);
    this.showalert = !this.showalert
    this.openSnackBar();
    setTimeout (() => { this.flipIt(); }, 800);
    });
  }

}
