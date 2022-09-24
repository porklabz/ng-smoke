import {Component, OnInit} from '@angular/core';
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';

  ngOnInit(): void {
    const user = new User({nameOfUser: 'opa', name: ''});
    console.log('Entity validation', user, user.isValid());
  }
}
