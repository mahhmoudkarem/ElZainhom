import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../../Shared/Interfaces/user";
import { UserCreate } from "../../../Shared/Interfaces/user-create";
import { UserUpdate } from "../../../Shared/Interfaces/user-update";

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly apiUrl = 'https://localhost:7049/api/User';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user: UserCreate): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  welcome(user: UserCreate): Observable<User> {
    return this.http.post<User>(
      `${this.apiUrl}/Welcome`,
      user
    );
  }

  updateUser(id: number, user: UserUpdate): Observable<User> {
    return this.http.put<User>(
      `${this.apiUrl}/${id}`,
      user
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}