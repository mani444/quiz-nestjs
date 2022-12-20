import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz/entities/quiz.entity';
import { Question } from './quiz/entities/question.entity';
@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'quiz',
      password: 'quiz',
      database: 'quiz',
      entities: [Quiz, Question],

      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
