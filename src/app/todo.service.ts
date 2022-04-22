import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }
  baseURL = "http://localhost:3333/basePath/"
  addItem(newItem: Item) {
    return this.http.post<Item>(this.baseURL + "items", newItem)
  }
  deleteItem(id: number) {
    return this.http.delete<Item>(this.baseURL + "items/" + id);
  }
  updateItem(updateItem: Item) {
    return this.http.put<Item>(this.baseURL + "items", updateItem);
  }
  getItems() {
    return this.http.get<Item[]>(this.baseURL + "items")
  }
}


