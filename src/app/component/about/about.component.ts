import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public aboutData:any = {
    a:'aaa',
    b:'bbb',
    c:'ccc'
  }

  @Input() title:any;
  @Input() homeFun:any;
  @Input() home:any;

  @Output() private outer = new EventEmitter<string>();

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.params.subscribe((data)=> {
      console.log(data);
    }))
  }

  getHomeData(): void {
    console.log(this.title)
    console.log(this.home)
  }

  getHomeFun(): void {
    this.homeFun()
  }

  sendHomeData(): void {
    this.outer.emit(this.aboutData)
  }

}
