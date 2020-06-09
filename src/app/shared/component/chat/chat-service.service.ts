import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Globals } from 'src/app/globals';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }

  createChat(id, type) {
    let data;
    if (type == 'mentor') {
      data = { 'user_id': id };
    } else {
      data = { 'mentor_id': id };
    }

    return this.http.post(environment.apiUrl + "chat", data)
      .pipe(catchError(this.errorHandler));

  }
  getChats(type, id) {
    let col;
    if (type == 'mentor') {
      col = 'mentor_id';
    } else {
      col = 'user_id';
    }

    return this.http.get(environment.apiUrl + "chat?" + col + '=' + id)
      .pipe(catchError(this.errorHandler));

  }

  sendMsg(data) {
    return this.http.post(environment.apiUrl + "message", data)
      .pipe(catchError(this.errorHandler));

  }

  getAllMessages(data) {
    return this.http.get(environment.apiUrl + "message?chat_id=" + data)
      .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
