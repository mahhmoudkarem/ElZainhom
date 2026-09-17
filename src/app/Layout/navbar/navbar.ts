import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isMenuOpen = false;
  isProductsOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.isProductsOpen = false;
    }
  }

  toggleProducts() {
    this.isProductsOpen = !this.isProductsOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isProductsOpen = false;
  }
}