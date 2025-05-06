import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrowerModuleComponent } from '../drower-module/drower-module.component';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';
 

@Component({
  selector: 'app-table-practices',
  imports: [FormsModule, CommonModule, DrowerModuleComponent,DrowerModuleComponent],
  templateUrl: './table-practices.component.html',
  styleUrl: './table-practices.component.css',
  animations: [
    trigger('animationTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }), 
        animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 2 })) 
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 1 }))
      ])
    ])
  ]
})

export class TablePracticesComponent implements OnInit {
  userArray: any[] = [];
  selectedUser:any[]=[]
  editData:any; 
  SelectedIndex:number|null =null

  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.loadAllUser();
  }

  loadAllUser(){
    this.http.get<any>('assets/users.json').subscribe((response:any)=>{
      this.userArray = response;
    })

  }

  onEdit(user:any,index:number){
    this.selectedUser = { ...user };
    this.showPopup();
    this.SelectedIndex=index
  }

  addData(data:any){
   if(this.SelectedIndex){
    this.userArray.splice(this.SelectedIndex,1,data),
    this.SelectedIndex =null
   }
   else{
    this.userArray.unshift(data);

   }
    
  }
  // update(user:any){
  //   // this.userArray.push(user);
  //   user.isEdit = false;
  // }
  ondelete(userObj:any){
    this.userArray.splice(userObj,1);

  }

 

isPopupVisible = false;

showPopup() {
this.isPopupVisible = true;
}

hidePopup() {
this.isPopupVisible = false;
this.selectedUser=[]

}



}
