import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'create-contact',
    templateUrl: './create-contact.component.html',
    styleUrls: ['./create-contact.component.scss']
})

export class CreateContactComponent {
    // title: string = "Inital Create Contact Page";
    baseUrl: string = 'http://localhost:9000';

    formData: {
        name: string,
        address: string,
        mobile: string,
        work: string,
        home: string,
        email: string,
        twitter: string,
        instagram: string,
        github: string
    } = {
        name: '',
        address: '',
        mobile: '',
        work: '',
        home: '',
        email: '',
        twitter: '',
        instagram: '',
        github: ''           
        }
    
    contacts: any[] = [];

    constructor(private http: HttpClient, private backend: BackendService) { }

    addContact() {
        // console.log('contact', contact)
        const url = this.baseUrl + '/contacts/new'
        // this.contacts.push(contact);
        let newContact = {
            name: this.formData.name,
            address: this.formData.address,
            mobile: this.formData.mobile,
            work: this.formData.work,
            home: this.formData.home,
            email: this.formData.email,
            twitter: this.formData.twitter,
            instagram: this.formData.instagram,
            github: this.formData.github
        }
        console.log('newContact', newContact)
        // return this.http.post(url, newContact).toPromise();
        this.http.post(url, newContact).subscribe(res => {
            console.log('Did Createz?')
        })
    }

    submit() {
        console.log(this.formData);
    }
    
}