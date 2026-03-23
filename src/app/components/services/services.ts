import { Component } from '@angular/core';
import { CONTENT } from '../../content';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-services',
  imports: [NgForOf],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
content = CONTENT;
}
