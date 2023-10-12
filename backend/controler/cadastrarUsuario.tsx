import Usuario from '../model/classe.Usuario';

export async function cadastrarUsuario(){
    
    const nome = (document.getElementById("nome") as HTMLInputElement)?.value;
    const cpf = (document.getElementById("cpf") as HTMLInputElement)?.value;
    const telefone = (document.getElementById("telefone") as HTMLInputElement)?.value;
    const email= (document.getElementById("email") as HTMLInputElement)?.value;
    const senha= (document.getElementById("senha") as HTMLInputElement)?.value;    
    const descricao= (document.getElementById("descricao") as HTMLInputElement)?.value;
    const cidade= (document.getElementById("cidade") as HTMLInputElement)?.value;
    const uf= (document.getElementById("uf") as HTMLInputElement)?.value;
    
    
    const usuario = new Usuario();

    usuario.nome = nome;
    usuario.cpf = cpf;
    usuario.telefone = telefone;
    usuario.email = email;
    usuario.senha = senha;
    usuario.cidade = cidade ;
    usuario.uf = uf;
    

    
}