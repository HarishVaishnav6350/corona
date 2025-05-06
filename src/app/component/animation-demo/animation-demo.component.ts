import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animation-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="demo-container">
      <h2>Angular Animation Demo</h2>

      <select [(ngModel)]="selectedAnimation">
        <option *ngFor="let animation of animationOptions" [value]="animation">
          {{ animation }}
        </option>
      </select>

      <button (click)="toggle()">Toggle Box</button>

      <div
        *ngIf="showBox"
        class="demo-box"
        [@animationTrigger]="selectedAnimation">
        Animated Box
      </div>
    </div>

  `,
  styles: [`
    .demo-container {
      text-align: center;
      margin: 3rem auto;
      max-width: 400px;
    }
    .demo-box {
      margin: 2rem auto;
      width: 200px;
      height: 100px;
      background:rgb(91, 76, 175);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
    select, button {
      margin: 1rem;
      padding: 0.5rem 1rem;
    }
  `],
  animations: [
    trigger('animationTrigger', [
      transition('* => fade', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 }))
      ]),
      transition('* => slideInLeft', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('2000ms ease-out', style({ transform: 'translateX(20px)', opacity: 1 }))
      ]),
      transition('* => slideInRight', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('2000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('* => zoomIn', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('2000ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition('* => flip', [
        style({ transform: 'rotateY(90deg)', opacity: 0 }),
        animate('2000ms ease-out', style({ transform: 'rotateY(0)', opacity: 1 }))
      ]),
      transition('* => rotateIn', [
        style({ transform: 'rotate(-180deg)', opacity: 0 }),
        animate('2000ms ease-out', style({ transform: 'rotate(0)', opacity: 1 }))
      ]),
      transition('* => bounceIn', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('2000ms cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
    ])
  ]
})
export class AnimationDemoComponent {
  showBox = true;
  selectedAnimation = 'fade';

  animationOptions = [
    'fade',
    'slideInLeft',
    'slideInRight',
    'zoomIn',
    'flip',
    'rotateIn',
    'bounceIn'
  ];

  toggle() {
    this.showBox = false;
    setTimeout(() => this.showBox = true, 50); // trigger re-entry
  }
}
