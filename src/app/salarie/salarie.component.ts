import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Salarie } from '../models/salarie';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.css']
})
export class SalarieComponent implements OnInit {
  @Input() salarie: Salarie;

  constructor() { }

  ngOnInit() {
  }
}
