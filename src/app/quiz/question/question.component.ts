import { Component, OnInit } from '@angular/core'
import { QuizService } from '../../shared/services/quiz.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent
  categoryId: number = 2

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const quizId = +params['categoryId']
      this.quizService.getQuizContent(quizId)
    })
  }
}
