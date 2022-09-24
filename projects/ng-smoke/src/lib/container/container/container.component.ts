import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'smk-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() hasLeftMenu: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
