/*
  Warnings:

  - The primary key for the `profissional` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cpf` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `criado_em` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `idProfissional` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `id_cidade` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `modificado_em` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `profissional` table. All the data in the column will be lost.
  - The primary key for the `servico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `descricao` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the column `idServico` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the `cidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `estado` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idprofissional` to the `profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idservico` to the `servico` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "profissional_email_key";

-- AlterTable
ALTER TABLE "profissional" DROP CONSTRAINT "profissional_pkey",
ADD COLUMN     "cidadeprofissional" VARCHAR(50),
ADD COLUMN     "cpfprofissional" VARCHAR(11),
ADD COLUMN     "descricaoprofissional" VARCHAR(200),
ADD COLUMN     "emailprofissional" VARCHAR(50),
ADD COLUMN     "estadoprofissional" VARCHAR(2),
ADD COLUMN     "idprofissional" INTEGER NOT NULL,
ADD COLUMN     "nomeprofissional" VARCHAR(40),
ADD COLUMN     "senhaprofissional" VARCHAR(25),
ADD COLUMN     "telefoneprofissional" VARCHAR(11),
ADD CONSTRAINT "pk_profissional" PRIMARY KEY ("idprofissional");

-- AlterTable
ALTER TABLE "servico" DROP CONSTRAINT "servico_pkey",
ADD COLUMN     "descricaoservico" VARCHAR(200),
ADD COLUMN     "idservico" INTEGER NOT NULL,
ADD COLUMN     "nomeservico" VARCHAR(40),
ADD CONSTRAINT "pk_servico" PRIMARY KEY ("idservico");

-- DropTable
DROP TABLE "cidade";

-- DropTable
DROP TABLE "estado";

-- CreateTable
CREATE TABLE "itemservico" (
    "iditemservico" INTEGER NOT NULL,
    "idprofissional" INTEGER NOT NULL,
    "idservico" INTEGER NOT NULL,

    CONSTRAINT "pk_itemservico" PRIMARY KEY ("iditemservico")
);

-- AddForeignKey
ALTER TABLE "itemservico" ADD CONSTRAINT "fk_itemservico_profissional" FOREIGN KEY ("idprofissional") REFERENCES "profissional"("idprofissional") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itemservico" ADD CONSTRAINT "fk_itemservico_servico" FOREIGN KEY ("idservico") REFERENCES "servico"("idservico") ON DELETE NO ACTION ON UPDATE NO ACTION;
