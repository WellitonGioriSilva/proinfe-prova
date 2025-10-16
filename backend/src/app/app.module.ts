import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoModule } from 'src/aluno/aluno.module';
import { ContatoModule } from 'src/contato/contato.module';
import { Aluno } from 'src/aluno/entities/aluno.entity';
import { Contato } from 'src/contato/entities/contato.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'db_escola',
      entities: [Aluno, Contato],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AlunoModule,
    ContatoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
