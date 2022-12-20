import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  quizId: number;
}
