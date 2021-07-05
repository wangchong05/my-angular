import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  public intervalFun = null;// 前面如果不加public默认就是public

  constructor(public request:RequestService, public http:HttpClient) { }

  ngOnInit(): void {
    // 1.获取同步方法
    let data = this.request.getData();
    console.log(data);

    // 2.callback获取异步数据
    // let callbackData = this.request.getCallbackData();// 这样直接调用打印出的是undefined
    this.request.getCallbackData((res)=> {
      console.log(res);
    });

    // 3.通过ES6里面提供的promise获取数据
    let promiseData = this.request.getPromiseData();
    promiseData.then((data)=> {
      console.log(data);
    })

    // 4.Rxjs获取数据
    let rxjsData = this.request.getRxjsData();
    rxjsData.subscribe((data)=> {
      console.log(data);
    })

    // 5.过一秒之后撤回刚才Rxjs获取数据的操作
    let streem = this.request.getRxjsData();
    var d = streem.subscribe((data)=> {
      console.log(data);
    })

    setTimeout(() => {
      d.unsubscribe();// 取消订阅
    }, 1000) 

    // 6.Rxjs定时获取数据
    let rxjsIntervalData = this.request.getRxjsIntervalData();
    this.intervalFun = rxjsIntervalData.pipe(
      filter((value)=> {
        return value%2 === 0
      }),
      map((value)=> {
        return value*value
      })
    ).subscribe((data)=> {
      console.log(data);
    })

    setTimeout(() => {
      this.intervalFun.unsubscribe();// 取消订阅
    }, 15000) 

  }

  ngOnDestory(): void {
    console.log('取消定时')
    // this.intervalFun.unsubscribe();
    console.log('取消定时')
  }

  // getHttpClientData的get请求
  getHttpClientData(): void {
    this.http.get("http://127.0.0.1:8099/listUsers").subscribe(response => {
      console.log("HttpClient的get获取Data")
      console.log(response);
      console.log("HttpClient的get获取Data")
    })
  }

  // HttpClient的post获取Data
  postHttpClientData(): void {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.http.post("http://127.0.0.1:8099/postListUsers", { a:1,b:2}, httpOptions).subscribe(response => {
      console.log("HttpClient的post获取Data")
      console.log(response);
      console.log("HttpClient的post获取Data")
    })
  }

  // jsonp的get获取Data
  // 远程用本地callback指定的方法名包装了一个返回数据，并以js脚本的形式返回给本地，在本地执行
  getJsonpData(): void {
    this.http.jsonp("http://127.0.0.1:8099/listUsers3", 'callback').subscribe(response => {
      console.log("jsonp的get获取Data")
      console.log(response);
      console.log("jsonp的get获取Data")
    })
  }

  // axios的get获取Data
  getAxiosData(): void {
    axios.get("http://127.0.0.1:8099/listUsers3").then(response => {
      console.log("axios的get获取Data")
      console.log(response);
      console.log("axios的get获取Data")
    })
  }

}
