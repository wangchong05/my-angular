import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular';
  title2 = 'my-angular22';
  title3 = 'my-angular33';
  title4 = 'lifeData';
  show = true;
  @ViewChild('myBox') myBox:any;

  // ngAfterViewInit():void {
  //   console.log('this.myBox.nativeElement')
  //   console.log(this.myBox)
  //   console.log('this.myBox.nativeElement')
  // }

  changeViewFun(): void {
    this.show = !this.show;
  }
}
