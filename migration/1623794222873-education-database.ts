import { MigrationInterface, QueryRunner } from "typeorm";

export class educationDatabase1623794222873 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO public.education (id, name, description, "dateIn", "dateOut") VALUES (DEFAULT, 'ETEC Guaracy Silveira', 'Técnico em programação de jogos digitais', '2012-01-01 00:00:00.000000','2014-12-31 00:00:00.000000')`);
    await queryRunner.query(`INSERT INTO public.education (id, name, description, "dateIn", "dateOut") VALUES (DEFAULT, 'UNIP - Universidade Paulista', 'Ciência da Computação', '2012-01-01 00:00:00.000000', '2017-01-01 00:00:00.000000')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.education WHERE name = 'ETEC Guaracy Silveira'`);
    await queryRunner.query(`DELETE FROM public.education WHERE name = 'UNIP - Universidade Paulista'`);
  }

}
