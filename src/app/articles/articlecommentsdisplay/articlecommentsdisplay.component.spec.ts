import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecommentsdisplayComponent } from './articlecommentsdisplay.component';

describe('ArticlecommentsdisplayComponent', () => {
  let component: ArticlecommentsdisplayComponent;
  let fixture: ComponentFixture<ArticlecommentsdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlecommentsdisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlecommentsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
