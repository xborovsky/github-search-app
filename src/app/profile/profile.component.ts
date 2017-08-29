import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {

  @Input()
  username:string;
  profile:any;
  private defaultUser = 'xborovsky';

  constructor(private githubService:GithubService) { }

  ngOnInit() {
    this.doSearchUser(this.username || this.defaultUser);
  }

  ngOnChanges() {
    this.doSearchUser(this.username || this.defaultUser);
  }

  private doSearchUser(username:string) {
    this.githubService.getUser(username)
      .subscribe(user => this.profile = user );
  }

}
