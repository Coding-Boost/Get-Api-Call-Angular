import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'get-api-call';

  users: any

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    })
  }

}
