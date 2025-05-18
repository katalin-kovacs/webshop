import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchbarComponent } from './components/search-bar/search-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppIconComponent } from './components/app-icon/app-icon.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    SearchbarComponent,
    MatSlideToggleModule,
    AppIconComponent,
    NavMenuComponent,
    DarkModeToggleComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
