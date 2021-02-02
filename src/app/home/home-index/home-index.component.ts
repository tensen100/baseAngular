import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent implements OnInit {

  constructor(private $login: LoginService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.$login.login();
  }

  confirm(): void {}

}
