import { Component } from '@angular/core';
import { CONTENT } from '../../content';
import { NgForOf, NgIf } from '@angular/common';
@Component({
  selector: 'app-services',
  imports: [NgForOf, NgIf],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
content = CONTENT;
}
