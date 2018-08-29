import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectConstant } from './ProjectConstant';

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
    return this.http.post(ProjectConstant.baseUrl + '/email/send', bodyData);
  }
}
