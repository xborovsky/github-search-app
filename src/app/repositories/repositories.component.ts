import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit, OnChanges {

  @Input()
  username:string;
  repositories:any[];
  private defaultUser = 'xborovsky';

  constructor(private githubService:GithubService) { }

  ngOnInit() {
    this.doSearchRepo(this.username || this.defaultUser);
  }

  ngOnChanges() {
    this.doSearchRepo(this.username || this.defaultUser);
  }

  doSearchRepo(username:string) {
    this.githubService.getRepositories(username)
      .subscribe(repositories => this.repositories = repositories );
  }

}
