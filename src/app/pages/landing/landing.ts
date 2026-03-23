import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Cta } from '../../components/cta/cta';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';
import { CONTENT } from '../../content';

@Component({
  selector: 'app-landing',
  imports: [Hero, Services, Testimonials, Cta, Contact, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
content = CONTENT;
}
