import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBlogpageComponent } from './subject-blogpage.component';

describe('SubjectBlogpageComponent', () => {
  let component: SubjectBlogpageComponent;
  let fixture: ComponentFixture<SubjectBlogpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectBlogpageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBlogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
