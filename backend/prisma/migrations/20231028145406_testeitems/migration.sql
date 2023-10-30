/*
  Warnings:

  - The primary key for the `itemservico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `iditemservico` on the `itemservico` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "itemservico" DROP CONSTRAINT "pk_itemservico",
DROP COLUMN "iditemservico",
ADD CONSTRAINT "pk_itemservico" PRIMARY KEY ("idprofissional", "idservico");

-- AlterTable
CREATE SEQUENCE servico_idservico_seq;
ALTER TABLE "servico" ALTER COLUMN "idservico" SET DEFAULT nextval('servico_idservico_seq');
ALTER SEQUENCE servico_idservico_seq OWNED BY "servico"."idservico";
