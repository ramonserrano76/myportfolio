import { Component } from '@angular/core';
import { PersonaService } from './service/persona.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService],
})
export class AppComponent {
  title = 'myportfolio';
  constructor(private PersonaService: PersonaService){}
  ngOnInit() {
    this.PersonaService.getPersona().subscribe((res) => {
      console.log('Res ', res);
    });
  }
}




// $(document).ready(main);
// function main(): void {
//   $('.toggle').click(function () {
//     $('nav').toggle();

//   });
// };


jQuery('document').ready(function ($) {
  var toggle = $('.toggle'),
    menubar = $('.nav');
  toggle.click(function () {
    if (menubar.hasClass('nav__open')) {
      menubar.removeClass('nav__open');
    } else {
      menubar.addClass('nav__open');
    }


  });

});
// jQuery('document').ready(function ($) {
//     let toggle = document.getElementById('toggle');
//     var navi = document.getElementById('nav');
//       toggle.addEventListener('click', function () {
//       navi.classList.toggle('nav__open');
//   });
// });

