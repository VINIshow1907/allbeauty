class Usuario {
    private nomeProfissional: string;
    private cpfProfissional: string;
    private telefoneProfissional: string;
    private emailProfissional: string;
    private senhaProfissional: string ;     
    private cidadeProfissional: string;
    private ufProfissional: string;

constructor(
    nome = "",
    cpf = "",
    telefone = "",
    email = "",
    senha = "",
    cidade = "",
    uf = ""
    ){
    this.nomeProfissional = nome;
	this.cpfProfissional = cpf;
    this.telefoneProfissional = telefone;
    this.emailProfissional = email;
    this.senhaProfissional = senha;
    this.cidadeProfissional = cidade;
    this.ufProfissional = uf;    
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
get cidade(): string {
    return this.cidadeProfissional
}
set cidade(cidadeProfissional: string) {
    this.cidadeProfissional = cidadeProfissional
}
get uf(): string {
    return this.ufProfissional
}
set uf(ufProfissional: string) {
    this.ufProfissional = ufProfissional
}



}


export default Usuario