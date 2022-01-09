import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  emailfield: FormControl

  constructor() {

    this.emailfield = new FormControl("", [
      Validators.required,
      Validators.email
    ])

    this.emailfield.valueChanges.subscribe( value => console.log(value))
  }

  ngOnInit(): void {
  }

}
