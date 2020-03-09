// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { AddcardComponent } from './addcard.component';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import {HttpClientModule} from '@angular/common/http';
// import { FlashcardsService } from '../flash-cards.service';
// describe('AddcardComponent', () => {
//   let component: AddcardComponent;
//   let fixture: ComponentFixture<AddcardComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AddcardComponent ],
//       imports: [HttpClientTestingModule],
//       providers: [FlashcardsService]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddcardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   it('should be created', () => {
//     const service: FlashcardsService = TestBed.get(FlashcardsService);
//     expect(service).toBeTruthy();
//    });
//   it('test', () => {
//     spyOn(component, 'add_Card');

//     const button = fixture.debugElement.nativeElement.querySelector('button');
//     button.click();
//     fixture.whenStable().then(() => {
//       expect(component.add_Card()).toHaveBeenCalled();
//     });
//   });
// });
