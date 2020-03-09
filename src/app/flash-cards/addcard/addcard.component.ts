import { Component, OnInit } from '@angular/core';
import { FlashcardsService, Flashcard } from '../flash-cards.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.scss']
})
export class AddcardComponent implements OnInit {
  type = ['Angular', 'JavaScript', 'NodeJs'];

  card: Flashcard = new Flashcard();
  flashcardlist: Flashcard[] = [];

  dataForm = new FormGroup({
    question: new FormControl('', [Validators.required]),
    ans: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),

  });

  constructor(private cardSvc: FlashcardsService, private router: Router) { }

  ngOnInit(): void {
    this.cardSvc.getFlashcards().subscribe(list => {
    this.flashcardlist = list;
    });

  }
  add_Card() {
    this.card.body = '',
      this.card.pass = false,
      this.card.ans = this.dataForm.value.ans,
      this.card.question = this.dataForm.value.question,
      this.card.type = this.dataForm.value.type;
    this.cardSvc.addCard(this.card).subscribe(_ => {
      // this.card.id = this.flashcardlist.length,
      this.router.navigate(['/card']);
    });
  }
}
