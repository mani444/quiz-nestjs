import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Question } from './question.entity';

@Entity()
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  title: string;

  @IsNotEmpty()
  @Column()
  description: string;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
