import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-reuseable-card',
  imports: [CommonModule],
  templateUrl: './reuseable-card.component.html',
  styleUrls: ['./reuseable-card.component.css']
})
export class ReuseableCardComponent {
  // Bind the 'class' property to dynamically add/remove CSS classes
  html:any=`<div class="card" [class.hovered]="elementClass === 'hovered'"
   [class.clicked]="elementClass === 'clicked'">
  <div class="card-content">
    <h4>Host</h4>
    <p>Are console open krke dekho hostbinding or hostlistner ka mja.</p>
  </div>
</div>`;
ts:any=`import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-reuseable-card',
  imports: [CommonModule],
  templateUrl: './reuseable-card.component.html',
  styleUrls: ['./reuseable-card.component.css']
})
export class ReuseableCardComponent {
  // Bind the 'class' property to dynamically add/remove CSS classes
 

  @HostBinding('class') elementClass = '';

  // Apply 'hovered' class when mouse enters
  @HostListener('mouseenter') onMouseEnter() {
    this.elementClass = 'hovered'; 
    console.log(this.elementClass,'matlab aayo')
  }

  // Remove 'hovered' class when mouse leaves
  @HostListener('mouseleave') onMouseLeave() {
    this.elementClass = 'gyo';
    console.log(this.elementClass)

  }

  // Toggle 'clicked' class when clicked
  @HostListener('click') onClick() {
    this.elementClass = this.elementClass === 'clicked' ? 'vapoas click' : 'clicked'; 
    console.log(this.elementClass)
  }
}
`

  @HostBinding('class') elementClass = '';

  // Apply 'hovered' class when mouse enters
  @HostListener('mouseenter') onMouseEnter() {
    this.elementClass = 'hovered'; 
    console.log(this.elementClass,'matlab aayo')
  }

  // Remove 'hovered' class when mouse leaves
  @HostListener('mouseleave') onMouseLeave() {
    this.elementClass = 'gyo';
    console.log(this.elementClass)

  }

  // Toggle 'clicked' class when clicked
  @HostListener('click') onClick() {
    this.elementClass = this.elementClass === 'clicked' ? 'vapoas click' : 'clicked'; 
    console.log(this.elementClass)
  }
   

  menuOpen = false;
  menuItems = ['Home', 'Profile', 'Settings', 'Help', 'Logout'];
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  getTransform(index: number): string {
    const angle = (index * 36) - 90; // Spread over 180°, rotate right side
    const radius = 100;
    const x = Math.cos(angle * (Math.PI / 180)) * radius;
    const y = Math.sin(angle * (Math.PI / 180)) * radius;
    return `translate(${x}px, ${y}px)`;
  }
  

}
