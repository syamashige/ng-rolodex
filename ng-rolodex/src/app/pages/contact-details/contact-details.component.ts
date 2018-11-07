import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';
import { ViewContactComponent } from '../view-contact/view-contact.component';  

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contacts: any;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.contacts = this.backend.contacts;
    this.backend.getContactsById()
      .then(data => {
        this.contacts = data;
        console.log(this.contacts)
      })
      .catch(err => {
        console.log('error getting user by id: ', err);
    })
  }

}
