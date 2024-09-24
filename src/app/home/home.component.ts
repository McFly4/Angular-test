import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  playerName = ''

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.isUserConnected()
    this.playerName = this.authService.user?.username || ''
  }

  get isPlayerNameFill() {
    return this.playerName.length < 1
  }

  navigateToCategory() {
    this.router.navigate(['/category', this.playerName])
  }

  navigateToQuiz() {
    this.router.navigate(['/quiz', this.playerName])
  }
}
