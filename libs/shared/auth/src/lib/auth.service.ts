import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _activeUser = new BehaviorSubject<{ username: string } | undefined>(
    undefined
  );
activeUser = this._activeUser.asObservable();
login({ username, password }: { username?: string | null; password?: string | null }) {
    if (username && password && (password === 'password')) {
      this._activeUser.next({ username });
      return true;
    }
    return false;
  }
}
