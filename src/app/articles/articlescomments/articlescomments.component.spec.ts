import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlescommentsComponent } from './articlescomments.component';



import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ArticlesService } from '../service/articles.service';
import { AccountsService } from 'src/app/accounts/services/accounts.service';


describe('ArticlescommentsComponent', () => {
  let component: ArticlescommentsComponent;
  let fixture: ComponentFixture<ArticlescommentsComponent>;

  // this is the code for http testing

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ArticlesService, AccountsService],
      declarations: [ ArticlescommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlescommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // it('should run the submit button functionality', (done) => {
  //   AccountsService
    
  // });


  // it('should create', () => {
  //   fixture = TestBed.createComponent(ArticlescommentsComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement
  //   expect(compiled)
  //   expect(component).toBeTruthy();
  // });
});
