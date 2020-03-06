import { Component, OnInit } from '@angular/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listRestaurants } from '../graphql/queries';
import config from '../aws-exports';

Amplify.configure(config);

export interface Restaurant {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  restaurants: Array<Restaurant>;

  async ngOnInit() {
    const response = await API.graphql(graphqlOperation(listRestaurants));
    this.restaurants = (response as any).data.listRestaurants.items;
  }
}
