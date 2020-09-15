import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  taskTypeAreas: {
    name: string;
    point: string, 
    selected: boolean;
}[] = [
    {
        name: 'Area 1',
        point: 'Love',
        selected: false
    },
    {
        name: 'Area 2',
        point: 'Happy',
        selected: false
    },
    {
        name: 'Area 3',
        point: 'Joy',
        selected: true
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
