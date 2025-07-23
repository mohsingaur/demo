import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-forms',
  imports: [FormsModule],
  templateUrl: './temp-driven-forms.html',
  styleUrl: './temp-driven-forms.css'
})
export class TempDrivenForms {
  onSubmit(form: NgForm){
    const formData = form.value;
    console.log(formData);
  }
}
