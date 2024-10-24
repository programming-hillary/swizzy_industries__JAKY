import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { take } from 'rxjs/operators';
import { BrowserStorageService } from './browser-storage.service';

const LOCAL_STORAGE_KEY = 'angular-material.dev';

@Injectable({ providedIn: 'root' })
export class ThemeManagerService {
  private document = inject(DOCUMENT);
  private browserStorage = inject(BrowserStorageService);
  private _window = this.document.defaultView;
  isDark$ = signal<string>('light');
  private _document = inject(DOCUMENT);

  constructor() {
    this.setTheme(this.getPreferredTheme());
    if (this._window !== null && this._window.matchMedia) {
      this._window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
          const storedTheme = this.getStoredTheme();
          if (storedTheme !== 'light' && storedTheme !== 'dark') {
            this.setTheme(this.getPreferredTheme());
          }
        });
    }

    effect(() => {
      if (this.isDark$() === 'dark') {
        this._document.documentElement.classList.add('dark');
      } else if (this.isDark$() === 'auto') {
        this._document.documentElement.classList.remove('dark');
      } else {
        this._document.documentElement.classList.remove('dark');
      }
    });
  }

  toggleTheme(theme: string) {
    this.isDark$.update(() => {
      return theme;
    });
  }

  getStoredTheme = () =>
    JSON.parse(this.browserStorage.get(LOCAL_STORAGE_KEY) ?? '{}').theme;


  setStoredTheme = (theme: string) => {
    const meta = JSON.parse(this.browserStorage.get(LOCAL_STORAGE_KEY) ?? '{}');
    meta.theme = theme;
    this.browserStorage.set(LOCAL_STORAGE_KEY, JSON.stringify(meta));
  };

  getPreferredTheme = (): 'dark' | 'light' => {
    const storedTheme = this.getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    if (this._window !== null && this._window.matchMedia) {
      return this._window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'light';
  };

  setTheme = (theme: string) => {
    if (this._window !== null && this._window.matchMedia) {
      if (
        theme === 'auto' &&
        this._window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this.document.documentElement.setAttribute('data-bs-theme', 'dark');
        this.isDark$.update(() => {
          return 'dark';
        });
      } else {
        this.document.documentElement.setAttribute('data-bs-theme', theme);
        this.isDark$.update(() => {
          return theme;
        });
      }
    }
  };

  // setMaterialTheme() {
  //   this.isDark$.pipe(take(1)).subscribe((isDark) => {
  //     if (isDark) {
  //       const href = 'dark.css';
  //       getLinkElementForKey('dark-theme').setAttribute('href', href);
  //       this.document.documentElement.classList.add('dark-theme');
  //     } else {
  //       const href = 'light.css';
  //       this.removeStyle('dark-theme');
  //       this.document.documentElement.classList.remove('dark-theme');
  //     }
  //   });
  // }

  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      this.document.head.removeChild(existingLinkElement);
    }
  }

  changeTheme(theme: string) {
    this.setStoredTheme(theme);
    this.setTheme(theme);
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}
