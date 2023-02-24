import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular';

  constructor(private itemService: ItemService){}
  
  ngOnInit(): void {
    this.itemService.getAllItem().subscribe((data) => {
          console.log(data);
        })
  }
  
}
