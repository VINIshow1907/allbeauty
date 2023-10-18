/*
  Warnings:

  - You are about to drop the column `cpf` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `criado_em` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `idProfissional` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `id_cidade` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `modificado_em` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `profissional` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the column `idServico` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `servico` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profissional" DROP COLUMN "cpf",
DROP COLUMN "criado_em",
DROP COLUMN "descricao",
DROP COLUMN "email",
DROP COLUMN "idProfissional",
DROP COLUMN "id_cidade",
DROP COLUMN "modificado_em",
DROP COLUMN "nome",
DROP COLUMN "senha";

-- AlterTable
ALTER TABLE "servico" DROP COLUMN "descricao",
DROP COLUMN "idServico",
DROP COLUMN "nome";
