class Usuario {
    private nomeProfissional: string;
    private cpfProfissional: string;
    private telefoneProfissional: string;
    private emailProfissional: string;
    private senhaProfissional: string ;   
    private descricaoProfissional: string ;   


constructor(
    nome = "",
    cpf = "",
    telefone = "",
    email = "",
    senha = "",
    descricao = ""
){
    this.nomeProfissional = nome;
	this.cpfProfissional = cpf;
    this.telefoneProfissional = telefone;
    this.emailProfissional = email;
    this.senhaProfissional = senha;
    this.descricaoProfissional = descricao;

 }
 get nome(): string {
     return this.nomeProfissional
 }
 set nome(nomeProfissional: string) {
     this.nomeProfissional = nomeProfissional
 }

 get cpf(): string {
    return this.cpfProfissional
}
set cpf(cpfProfissional: string) {
    this.cpfProfissional = cpfProfissional
}

get telefone(): string {
    return this.telefoneProfissional
}
set telefone(telefoneProfissional: string) {
    this.telefoneProfissional = telefoneProfissional
}

get email(): string {
    return this.emailProfissional
}
set email(emailProfissional: string) {
    this.emailProfissional = emailProfissional
}

get senha(): string {
    return this.senhaProfissional
}
set senha(senhaProfissional: string) {
    this.senhaProfissional = senhaProfissional
}

get descricao(): string {
    return this.descricaoProfissional
}
set descricao(descricaoProfissional: string) {
    this.descricaoProfissional = descricaoProfissional
}

}


export default Usuario