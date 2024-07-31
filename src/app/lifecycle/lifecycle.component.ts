import { AfterContentChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, DoCheck, OnChanges, AfterContentChecked, OnDestroy {

  name: string = "Angular"
  counter: number = 0

  constructor() {
    this.name = ""
    console.log("this is constructor")
  }
  ngOnInit() {
    this.name = "Nishanth"
    console.log("I am oninit")
  }

  ngDoCheck() {
    console.log("I am DoCheck")
  }

  ngOnChanges() {
    console.log("I am Ng On Change");
    // works when properties passed from one component to another
  }

  ngAfterContentChecked() {
    console.log("I am ng After Content Checked")
  }

  ngOnDestroy(): void {
    console.log("Destroy")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  increment() {
    this.counter = this.counter + 1
  }

  decrement() {
    this.counter = this.counter - 1
  }

}
