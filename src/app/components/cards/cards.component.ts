import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListCards } from 'src/utils/interface/listCards.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  listCards: ListCards[] = [
    { propietari: 'Diego', numberCard: 1111111111111, dateExpire: '03/25', cvv: 345 },
    { propietari: 'Alberto', numberCard: 22222222222222222, dateExpire: '03/25', cvv: 345 },
    { propietari: 'Mesa', numberCard: 333333333333333333, dateExpire: '03/25', cvv: 345 },
    { propietari: 'luna', numberCard: 444444444444444, dateExpire: '03/25', cvv: 345 }
  ]

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      propietari: ['', Validators.required],
      numberCard: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      dateExpire: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
  }

  addCard() {
   
      const card = {
        propietari: this.form.value.propietari,
        numberCard: this.form.value.numberCard,
        dateExpire: this.form.value.dateExpire,
        cvv: this.form.value.cvv
      }
      this.listCards.push(card)
      this.form.reset()
    
  }

  deleteCard(i: number) {
    this.listCards.splice(i, 1)
  }

}
