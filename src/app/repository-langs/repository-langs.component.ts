import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';

import { Language } from '../language';
import { PctColorTransform } from '../pct-color-transform';

@Component({
  selector: 'app-repository-langs',
  templateUrl: './repository-langs.component.html',
  styleUrls: ['./repository-langs.component.css']
})
export class RepositoryLangsComponent implements OnInit {

  @Input()
  username:string;
  @Input()
  repositoryName:string;

  languages:Language[];

  constructor(private githubService:GithubService) { }

  ngOnInit() {
    this.githubService.getLanguages(this.username, this.repositoryName)
      .subscribe(languages => this.languages = this.calculateLangPct(languages));
  }

  private calculateLangPct(languages:any):Language[] {
    let ret:Language[] = [];
    for (let key in languages) {
      let lang = new Language();
      lang.name = key;
      lang.lines = languages[key];

      ret.push(lang);
    }

    let totalLines = this.calcTotalLines(ret);
    ret.forEach(function(lang) {
      lang.pct = lang.lines / totalLines * 100;
      lang.pctColor = PctColorTransform.getColorForPercentage(lang.pct / 100);
    });

    return ret;
  }

  private calcTotalLines(languages:Language[]):number {
    let ret = 0;
    languages.forEach(function(lang) {
      ret += lang.lines;
    });
    return ret;
  }

}
