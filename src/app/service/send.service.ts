import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  constructor(private http: HttpClient) { }

  sendEmail(userEmail, filePath) {
    // const data = new URLSearchParams();
    const bodyData = {
      'userEmail': userEmail,
      'filePath': filePath
    };
    // data.append('body', JSON.stringify(bodyData));
    return this.http.post('http://localhost:8080/email/send', bodyData);
  }
}
