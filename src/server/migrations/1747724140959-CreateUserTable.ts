import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1747724140959 implements MigrationInterface {
    name = 'CreateUserTable1747724140959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bond" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" numeric NOT NULL, "maturityDate" date NOT NULL, "couponRate" numeric NOT NULL, "issuer" character varying NOT NULL, CONSTRAINT "PK_2a4d050cae7f0326222053ae2b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying NOT NULL, "email" character varying NOT NULL, "age" integer NOT NULL, "gender" "public"."user_gender_enum" NOT NULL, "image_url" character varying, "hash_pass" character varying NOT NULL, "phone_number" character varying, "dob" date NOT NULL, "post_code" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum"`);
        await queryRunner.query(`DROP TABLE "bond"`);
    }

}
