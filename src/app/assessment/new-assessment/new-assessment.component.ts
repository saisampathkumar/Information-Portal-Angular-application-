import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  Assessment,
  AssessmentQuestions,
  Options,
  AssessmentService
} from '../assessment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.scss']
})
export class NewAssessmentComponent implements OnInit {
  constructor(private formB: FormBuilder,
              private router: Router,
              private assSvc: AssessmentService,
              private snackBar: MatSnackBar) { }

  Answers = [ 1, 2, 3, 4];
  courses = ['Angular', 'JavaScript', 'NodeJS'];
  questions: AssessmentQuestions[];
  assessmentForm1: FormGroup = this.formB.group({
    course: ['', [Validators.required]],
  });

  assessmentForm2: FormGroup = this.formB.group({
    ques1: ['', [Validators.required]],
    ques1op1: ['', [Validators.required]],
    ques1op2: ['', [Validators.required]],
    ques1op3: ['', [Validators.required]],
    ques1op4: ['', [Validators.required]],
    ques1Ans: ['', [Validators.required]],
  });

  assessmentForm3: FormGroup = this.formB.group({
    ques2: ['', [Validators.required]],
    ques2op1: ['', [Validators.required]],
    ques2op2: ['', [Validators.required]],
    ques2op3: ['', [Validators.required]],
    ques2op4: ['', [Validators.required]],
    ques2Ans: ['', [Validators.required]],
  });

  assessmentForm4: FormGroup = this.formB.group({
    ques3: ['', [Validators.required]],
    ques3op1: ['', [Validators.required]],
    ques3op2: ['', [Validators.required]],
    ques3op3: ['', [Validators.required]],
    ques3op4: ['', [Validators.required]],
    ques3Ans: ['', [Validators.required]]
  });
  ngOnInit(): void { }
  dataSubmit() {
    const q1ans = [false, false, false, false];
    const q3ans = [false, false, false, false];
    const q2ans = [false, false, false, false];
    this.Answers.forEach(num => {
      if (this.assessmentForm2.value.ques1Ans == num) {
        q1ans[num - 1] = true;
      }
      if (this.assessmentForm3.value.ques2Ans == num) {
        q2ans[num - 1] = true;
      }
      if (this.assessmentForm4.value.ques3Ans == num) {
        q3ans[num - 1] = true;
      }
    });
    const courseNew = {
      courseName: this.assessmentForm1.value.course,
      icon: 'assets/New-Course.jpg',
      courseData: [{
        id: 0,
        q: this.assessmentForm2.value.ques1,
        options: [
          {
            id: 0,
            opt: this.assessmentForm2.value.ques1op1,
            optAns: q1ans[0],
          },
          {
            id: 1,
            opt: this.assessmentForm2.value.ques1op2,
            optAns:  q1ans[1],
          },
          {
            id: 2,
            opt: this.assessmentForm2.value.ques1op3,
            optAns: q1ans[2],
          },
          {
            id: 3,
            opt: this.assessmentForm2.value.ques1op4,
            optAns: q1ans[3],
          }]
      }, {
        id: 1,
        q: this.assessmentForm3.value.ques2,
        options: [
          {
            id: 0,
            opt: this.assessmentForm3.value.ques2op1,
            optAns: q2ans[0],
          },
          {
            id: 1,
            opt: this.assessmentForm3.value.ques2op2,
            optAns: q2ans[1],
          },
          {
            id: 2,
            opt: this.assessmentForm3.value.ques2op3,
            optAns: q2ans[2],
          },
          {
            id: 3,
            opt: this.assessmentForm3.value.ques2op4,
            optAns: q2ans[3],
          }]
      }, {
        id: 2,
        q: this.assessmentForm4.value.ques3,
        options: [
          {
            id: 0,
            opt: this.assessmentForm4.value.ques3op1,
            optAns: q3ans[0],
          },
          {
            id: 1,
            opt: this.assessmentForm4.value.ques3op2,
            optAns: q3ans[1],
          },
          {
            id: 2,
            opt: this.assessmentForm4.value.ques3op3,
            optAns: q3ans[2],
          },
          {
            id: 3,
            opt: this.assessmentForm4.value.ques3op4,
            optAns: q3ans[3],
          }]
      }
      ],
    };
    this.assSvc.postCourse(courseNew).subscribe(data => {
      this.snackBar.open('Successfully saved data', 'Ok', {
        duration: 2000,
      });
    });
    setTimeout(() => {
      this.router.navigate(['/assessment']);
    }, 1000);
  }
}
