import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  constructor() { }

  @Input() satellites: Satellite[];

 /* countProperty(satellites: object[], property: string): number {
    let count = 0;
    for (let i = 0; i < satellites.length; i++) {
       if (Object.values(satellites[i]).includes("property")) {
       console.log(satellites[i])
       count++;
      }
    }
    return count;
  }
*/
  countType(satellites: object[], result: string): number {
  let count = 0;
  for (let i = 0; i < satellites.length; i++) {
     if (satellites[i]["type"] === result) {
     count++;
    }
  }
  return count;
}

  ngOnInit() {
  }

}
