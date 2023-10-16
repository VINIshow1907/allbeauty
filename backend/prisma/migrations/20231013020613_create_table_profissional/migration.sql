-- CreateTable
CREATE TABLE "profissional" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(75) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "senha" VARCHAR(25) NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "cidade" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profissional_pkey" PRIMARY KEY ("id")
);
