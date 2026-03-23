import { Component } from '@angular/core';
import { CONTENT } from '../../content';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
content = CONTENT;
}
