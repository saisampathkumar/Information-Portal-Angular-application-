import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlashcardsService, Flashcard } from './flash-cards.service';

describe('FlashcardsService', () => {
  let service: FlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FlashcardsService]
    });
    service = TestBed.inject(FlashcardsService);

  });


  it('test service', () => {
    // tslint:disable-next-line:no-shadowed-variable
    let service: FlashcardsService = TestBed.get(FlashcardsService);
    expect(service).toBeTruthy();
  });
  it('test addCard', () => {
    // tslint:disable-next-line:no-shadowed-variable
    let service: FlashcardsService = TestBed.get(FlashcardsService);
    expect(service.addCard).toBeTruthy();
  });
  // it('test addCard2', (done) => {
  //   // tslint:disable-next-line:no-shadowed-variable
  //   let service: FlashcardsService = TestBed.get(FlashcardsService);
  //   service.getFlashcards().subscribe(
  //     (data) => {
  //       expect(data[0].id).toEqual(1);
  //       done();
  //     }
  //   );
  //   let card = new Flashcard();
  //   card.ans = 'aaa';
  //   // expect(service.addCard(card)).toBeTruthy();
  //   service.addCard(card).subscribe();
  //   service.getFlashcards().subscribe((l) => {
  //     expect(l[l.length - 1].ans).toEqual(card.ans);
  //     expect(l[l.length - 1].pass).toEqual(card.pass);
  //     expect(l[l.length - 1].front).toEqual(card.front);
  //     expect(l[l.length - 1].show).toEqual(card.show);
  //     expect(l[l.length - 1].question).toEqual(card.question);
  //     expect(l[l.length - 1].type).toEqual(card.type);
  //     done();
  //   });

  // });
  it('test get flashcard', () => {
    // tslint:disable-next-line:no-shadowed-variable
    let service: FlashcardsService = TestBed.get(FlashcardsService);
    expect(service.getFlashcard).toBeTruthy();
  });

  // it('test put', (done) => {
  //   // tslint:disable-next-line:no-shadowed-variable
  //   let service: FlashcardsService = TestBed.get(FlashcardsService);
  //   service.getFlashcards().subscribe(
  //     (data) => {
  //       expect(data[0].id).toEqual(1);
  //       done();
  //     }
  //   );
  //   let card = new Flashcard();
  //   card.ans = 'aaa';
  //   card.id = 1;
  //   // expect(service.addCard(card)).toBeTruthy();
  //   service.pass(card).subscribe();
  //   service.getFlashcards().subscribe((l) => {
  //     expect(l[0].ans).toEqual(card.ans);
  //     expect(l[0].pass).toEqual(card.pass);
  //     done();
  //   });
  // });
});
