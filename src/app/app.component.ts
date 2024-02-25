import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Eliakim KASSI Portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{

    this.languageService.initLanguage();


    this.titleService.setTitle( "Eliakim KASSI | Developer web et mobile" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, logiciel, developpeur'},
      {name: 'description', content: 'En 4 ans en tant que développeur, je cherche à me former chaque jour.'},
    ]);


    AOS.init();

  }
}
