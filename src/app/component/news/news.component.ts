import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title = "我是一个新闻组件";// 前面如果不加public默认就是public

  username:string="zhangsan";

  objValue:any={// any------任意类型，写成object页面也能出来，但是代码本身报错
    a: "aaa",
    b: "bbb"
  };

  arr = [111,222,333,444];

  public list:Array<any>=[];

  public list2:any[]=[];

  imgUrl="https://cn.bing.com/th?id=OHR.Siguniangshan_ZH-CN7772066391_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";

  constructor(public route:ActivatedRoute) { 
    this.objValue.c = "ccc";
  }

  ngOnInit(): void {
    console.log('获取路由的参数')
    console.log(this.route.queryParams.subscribe((data)=> {
      console.log(data);
    }))
    console.log('获取路由的参数')
  }

  fun1():void {
    console.log('-----------------------')
    console.log('子组件news里面打印的东西')
    console.log('-----------------------')
  }

}
