import { Component, OnInit } from '@angular/core';
import { Salarie } from './models/salarie';
import { ApiConsumerService } from './api-consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Liste des salariés pour tester
  // salaries: Salarie[] = [
  //   { _id: 11, name: 'Helmi', age: 22, address: 'France' },
  //   { _id: 12, name: 'Amani', age: 22, address: 'France'  },
  //   { _id: 13, name: 'Abdou', age: 22, address: 'France'  },
  //   { _id: 14, name: 'Baha', age: 22, address: 'France'  },
  //   { _id: 15, name: 'Macron', age: 22, address: 'France'  }
  // ];

  salaries: Salarie[];
  chosenOne: Salarie;
  constructor(private api: ApiConsumerService) {}

  ngOnInit() {
    // Retourne la liste des salariés
    this.api.getSalaries().subscribe(salaries => this.salaries = salaries);
  }
  // Choisir un salariés afin d'afficher ses détails
  get(id) {
    this.chosenOne = this.salaries.filter(salarie => salarie._id === id)[0];
  }
  // Eliminer les doublons par un critère
  updateList(critere) {
    console.log(critere);
    const request = {
      body: this.salaries,
      critere: critere
    };
    this.api.updateListSalaries(request).subscribe(response => this.salaries = <Salarie[]>response);
  }
}
