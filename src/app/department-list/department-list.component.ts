import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department list works!
    </p>

    <ul>
      <li *ngFor="let dept of departments">
        <span class="badge"> {{dept.id}}</span> {{dept.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id": 1, "name": "Departmet-1"},
    {"id": 2, "name": "Departmet-2"},
    {"id": 3, "name": "Departmet-3"},
    {"id": 4, "name": "Departmet-4"},
    {"id": 5, "name": "Departmet-5"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
