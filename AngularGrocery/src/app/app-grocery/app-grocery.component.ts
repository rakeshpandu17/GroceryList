import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'] // added bootstrap file. Use ../ for up one directory & ../../ for up two directory
})

// removed implement Angular Onint (on initialization) as we dont need to initialise anything while loding the page
export class AppGroceryComponent {
  task: string; // to get the text input from textbox
  tasks = []; // to store the inputs in an array

  onClick(){
    this.tasks.push({name: this.task}); // storing the obtained inputs from text box in to an array
  this.task = ''; // Empty the task variable to enter the next grocery item 
}
}
