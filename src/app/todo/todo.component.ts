import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  items: Item[] = [];
  errorMessage = "";
  addItemForm: FormGroup = new FormGroup({})
  updateItemForm: FormGroup = new FormGroup({})
  idToUpdate: number = 0;
  successMessage="";
  messageColor="";

  itemToUpdate: Item | undefined = { id: 0, todoitem: "", message: "" }
  constructor(private todoService: TodoService, private fb: FormBuilder) { }

  addItem() {
    this.todoService.addItem(this.addItemForm.value).subscribe(
      createdItem => {
        this.items.push(createdItem);
        this.successMessage = "Item Added"; 
        // this.messageColor="alert alert-primary"
        
      },
      err => {
        this.errorMessage = "Bad Request"
      }
    )
  }
  updateItem() {
    this.todoService.updateItem(this.updateItemForm.value).subscribe(
      updateItem => { this.items = this.items.map(item => item.id == updateItem.id ? updateItem : item) 
        this.successMessage = "Item updated"
        // this.messageColor="alert alert-warning"
      },
      err => {
        this.errorMessage = "Could not update the item"
      }
    )
    this.idToUpdate = 0;
  }
  displayUpdatedItem(item: Item) {
    this.idToUpdate = item.id
    this.updateItemForm.setValue(item);
  }

  deleteItem(id:number){
    this.todoService.deleteItem(id).subscribe(
      deleteItem => {
        this.items = this.items.filter(item=> item.id!=deleteItem.id)
        this.successMessage = "Item deleted"
        // this.messageColor="alert alert-danger"
      },
      err =>{
        this.errorMessage="Could not delete item"
      }
    )
  }
  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      "id": [null, []],
      "todoitem": ['', [Validators.required, Validators.pattern("^[A-Z][a-z]+$")]]
    })

    this.updateItemForm = this.fb.group({
      "id": [null, []],
      "todoitem": ['', [Validators.required, Validators.pattern("^[A-Z][a-z]+$")]]
    })

    this.todoService.getItems().subscribe(
      itemArr => {
        this.items = itemArr;
      },
      err => {

      }
    )
  }

}
