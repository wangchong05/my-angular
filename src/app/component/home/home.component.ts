import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:any = 'home数据'

  @ViewChild('news') news:any;

  constructor() { }

  ngOnInit(): void {
    // this.title = 'home数据'
  }

  ngAfterViewInit():void {
    console.log('this.news.nativeElement')
    console.log(this.news)
    console.log('this.news.nativeElement')
  }

  homeFun():void {
    console.log('homeFun')
  }

  runHome($event):void {
    console.log(`来自子组件`,$event)
  }

}
