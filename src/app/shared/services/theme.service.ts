import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = signal<Theme>('light');
  readonly theme = this._theme.asReadonly();

  toggleTheme() {
    const newTheme: Theme = this._theme() === 'dark' ? 'light' : 'dark';
    this._theme.set(newTheme);
  }

  setTheme(theme: Theme) {
    this._theme.set(theme);
  }
}
