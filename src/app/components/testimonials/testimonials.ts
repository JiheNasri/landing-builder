import { Component } from '@angular/core';
import { CONTENT } from '../../content';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [ NgForOf],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  content = CONTENT;

}
