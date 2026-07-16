import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar.component';
import { Sidebar } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
