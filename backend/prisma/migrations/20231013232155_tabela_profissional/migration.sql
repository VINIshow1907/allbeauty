/*
  Warnings:

  - The primary key for the `profissional` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cidade` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `uf` on the `profissional` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `profissional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_cidade` to the `profissional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profissional" DROP CONSTRAINT "profissional_pkey",
DROP COLUMN "cidade",
DROP COLUMN "id",
DROP COLUMN "uf",
ADD COLUMN     "idProfissional" SERIAL NOT NULL,
ADD COLUMN     "id_cidade" TEXT NOT NULL,
ADD CONSTRAINT "profissional_pkey" PRIMARY KEY ("idProfissional");

-- CreateTable
CREATE TABLE "estado" (
    "idEstado" SERIAL NOT NULL,
    "nome" VARCHAR(75) NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("idEstado")
);

-- CreateTable
CREATE TABLE "cidade" (
    "idCidade" SERIAL NOT NULL,
    "nome" VARCHAR(75) NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("idCidade")
);

-- CreateTable
CREATE TABLE "servico" (
    "idServico" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,

    CONSTRAINT "servico_pkey" PRIMARY KEY ("idServico")
);

-- CreateIndex
CREATE UNIQUE INDEX "profissional_email_key" ON "profissional"("email");
