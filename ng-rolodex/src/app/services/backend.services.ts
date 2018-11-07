import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    // baseUrl: string = 'http://18.223.166.62:9000';

    baseUrl: string = 'http://localhost:9000';

    contacts: any[] = [];

    id: any;

    constructor(private http: HttpClient) { }
    
    getContacts() {
        const url = this.baseUrl + '/contacts';
        console.log('url', url)

        return this.http.get(url).toPromise();
    }

    getContactsById() {
        const url = this.baseUrl + '/contacts/' + this.id;

        return this.http.get(url).toPromise();

    }

    // addContact(contact) {
    //     this.contacts.push(contact);
    // }

    storeId(id) {
        this.id = id;
    }

    // getContactsById(id: number) {
    //     const url = this.baseUrl + '/contacts' + id;

    //     return this.http.get(url).toPromise();
    // }
}
