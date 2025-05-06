import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drower-module',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './drower-module.component.html',
  styleUrl: './drower-module.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrowerModuleComponent implements OnInit{
  @Input() userData:any;
  @Output() close = new EventEmitter<void>();
  @Output() data= new EventEmitter<void>();

 
  user! :FormGroup;
  constructor(private fb: FormBuilder) {}
  
  closePopup() {
    this.close.emit();
  }
  ngOnInit(){
    this.user = this.fb.group({
      name: [this.userData?.name || ''],
      username: [this.userData?.username || ''],
      email: [this.userData?.email || ''],
      phone: [this.userData?.phone || ''],
      website: [this.userData?.website || ''],
    });
    console.log(this.userData)
  }

    onSubmit(){
    console.log(this.user.value)
     this.data.emit(this.user.value)

    }
    
}
