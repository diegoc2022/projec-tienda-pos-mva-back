import { CajaService } from './caja.service';
import { CajaController } from './caja.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCajaEntity } from './entity/create-caja.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CreateCajaEntity])],
    controllers: [
        CajaController, ],
    providers: [
        CajaService, ],
})
export class CajaModule {}
