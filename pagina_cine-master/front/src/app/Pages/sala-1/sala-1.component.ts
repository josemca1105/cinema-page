import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sala-1',
  standalone: true,
  imports: [NgFor, NgClass, NgSwitch, NgIf, NgSwitchCase, NgSwitchDefault],
  templateUrl: './sala-1.component.html',
  styleUrl: './sala-1.component.css'
})
export class Sala1Component {


}
