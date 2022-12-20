import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepo: Repository<Quiz>,
  ) {}
  getQuiz(): { name: string; description: string } {
    return { name: 'React', description: 'React Basic Questions' };
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepo.findOne({
      where: { id },
      relations: ['questions'],
    });
  }
  async createQuiz(quiz: CreateQuizDto) {
    return await this.quizRepo.save(quiz);
  }
}
