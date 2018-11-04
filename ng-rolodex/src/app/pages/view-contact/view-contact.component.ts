import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';

@Component({
    selector: 'view-contact',
    templateUrl: './view-contact.component.html',
    styleUrls: ['./view-contact.component.scss']
})

export class ViewContactComponent implements OnInit {
    title: string = "Initial Contact Page";

    contacts: any;

    constructor(private backend: BackendService) {

            
    }

    ngOnInit() {
        this.contacts = this.backend.contacts;
        this.backend.getContacts() 
            .then(data => {
                console.log(data)
                this.contacts = data;
            })
            .catch(err => {
                console.log('error getting all users: ', err);
        })

    }
}