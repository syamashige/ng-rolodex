import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    baseUrl: string = 'http://localhost:9000';

    contacts: any[] = [];



    constructor(private http: HttpClient) { }
    
    getContacts() {
        const url = this.baseUrl + '/contacts';
        console.log('url', url)

        return this.http.get(url).toPromise();
    }

    // getContactsById(id: number) {
    //     const url = this.baseUrl + '/contacts' + id;

    //     return this.http.get(url).toPromise();
    // }
}
