import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  @Input() life:any;

  constructor(public route:ActivatedRoute) { 
    console.log('00---------constructor')
  }

  ngOnChanges(): void {
    console.log('01---------ngOnChanges')
  }

  ngOnInit(): void {
    console.log('02---------ngOnChanges')
  }

  ngDoCheck(): void {
    console.log('03---------ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('04---------ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('05---------ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('06---------ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('07---------ngAfterViewChecked')
  }

  ngOnDestory(): void {
    console.log('08---------ngOnDestory')
  }

}
