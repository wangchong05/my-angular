import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';// rxjs是一个第三方模块，但是在angular里面已经集成了，所以不需要再安装，直接引入Observable对象

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步
  getData() {
    return 'this is service data'
  }

  // 回调函数
  getCallbackData(cb): any {
    setTimeout(function(): any {
      var name = 'zhangsan回调函数';
      // return name;
      cb(name)
    }, 1000) 
  }

  // ES6里面提供的promise
  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var name = 'ES6里面提供的promise';
        resolve(name)
      }, 3000) 
    })
  }

  // Rxjs获取数据
  getRxjsData() {
    return new Observable((observer) => {
      setTimeout(() => {
        var name = 'Rxjs获取数据';
        observer.next(name);
        // observer.error('数据');
      }, 5000) 
    })
  }

  // Rxjs定时获取数据
  getRxjsIntervalData() {
    let count = 0;
    return new Observable<any>((observer) => {
      setInterval(() => {
        count++;
        var name = count;
        observer.next(name);
      }, 1000) 
    })
  }

}
