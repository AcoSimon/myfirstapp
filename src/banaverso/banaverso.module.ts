import { Module } from '@nestjs/common';
import { BanaversoController } from './banaverso.controller';
import { BanaversoService } from './banaverso.service';

@Module({
  controllers: [BanaversoController],
  providers: [BanaversoService]
})
export class BanaversoModule {}
