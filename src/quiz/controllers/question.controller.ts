import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { QuestionService } from '../services/question.service';
import { Question } from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';
@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async saveQuestion(
    @Body() questionData: CreateQuestionDto,
  ): Promise<Question> {
    const quiz = await this.quizService.getQuizById(questionData.quizId);
    console.log(quiz);

    return await this.questionService.createQuestion(questionData, quiz);
  }
}
