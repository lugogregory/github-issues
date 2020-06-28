import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  currentLang = this.translate.store.currentLang;

  ngOnInit(): void {
  }

  changeLanguage(language) {
    this.translate.use(language);
    this.currentLang = language;
  }

}
