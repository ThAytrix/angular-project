import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  appareilName: string = 'Machine à laver';
  appareilStatus: string = 'éteint';

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

}
