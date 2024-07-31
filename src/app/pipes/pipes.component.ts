import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  name = "Nishanth";
  amount = 500000;
  birth = new Date(1988, 3, 15)
  value = 0.55;

  
}
