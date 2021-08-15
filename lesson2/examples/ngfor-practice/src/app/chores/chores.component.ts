import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {
         title: "Tomorrow's Chores", 
         tasks: ['Complete LaunchCode prep work', 'Clean bathroom']
      },
      {
         title: "Day after Tomorrow's Chores", 
         tasks: ['Complete LaunchCode exercises', 'Clean cupboard']
      }
   ];
   todoTitles = ["Tomorrow's Chores", "Day after Tomorrow's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
