import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent implements OnChanges{

  @Input() counterValue : any

  constructor(){
    console.log("This is counter constructor")
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("The component property changes")
  }
}
