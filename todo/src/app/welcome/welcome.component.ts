import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataServiceService} from "../service/data/welcome-data-service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService = ''

  constructor(private route: ActivatedRoute,private welcomeDataServiceService:WelcomeDataServiceService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.welcomeDataServiceService.executeHelloWorldBeanService(this.name).subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    this.welcomeDataServiceService = error.error.message;
  }

}
