import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-practices',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-practices.component.html',
  styleUrl: './form-practices.component.css'
})
export class FormPracticesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fields: this.fb.array([]), // Empty FormArray initially
    });
  }

  // Get the FormArray
  get fields() {
    return (this.form.get('fields') as FormArray);
  }

  // Add new field
  addField() {
    const group = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.fields.push(group);
  }

  // Remove a field
  removeField(index: number) {
    this.fields.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
