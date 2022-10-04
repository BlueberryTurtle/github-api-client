import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
// import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() login: User;

  constructor() {}
  // private githubApiService: GithubApiService

  ngOnInit() {}
}
