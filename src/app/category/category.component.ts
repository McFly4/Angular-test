import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { CategoriesService } from '../shared/services/categories.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  searchTerm: string = ''
  categories: any[] = []
  playerName = ''

  constructor(
    private quizService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.quizService.getCategories()
    this.categories = this.quizService.categories
  }

  navigateToQuiz(categoryId: number) {
    this.route.params.subscribe((params: any) => {
      this.playerName = params['playerName']
      this.router.navigate([`/quiz/${this.playerName}/`, categoryId])
    })
  }

  clearSearch() {
    this.searchTerm = ''
  }
}
