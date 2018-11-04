import { Component } from '@angular/core';

@Component({
    selector: 'create-contact',
    templateUrl: './create-contact.component.html',
    styleUrls: ['./create-contact.component.scss']
})

export class CreateContactComponent {
    // title: string = "Inital Create Contact Page";

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

    constructor() {
        
    }

    submit() {
        console.log(this.formData);
    }
}