//import React from 'react';
//import FormularioEditarPro from './formularioeditarpro';
//
//type ProfissionalData = {
//  nome: string;
//  cpf: string;
//  telefone: string;
//  uf: string;
//  cidade: string;
//  estado:string;
//  email: string;
//  senha: string;
//  descricao:string;
//  servicos: {
//    manicure: boolean;
//    pedicure: boolean;
//    cabeleleiro: boolean;
//    maquiador: boolean;
//    designSobrancelha: boolean;
//    depiladora: boolean;
//  };
//};
//
//
//
//interface MostrarInformacoesProps {
//  profissional: ProfissionalData;
//}
//
//const MostrarInformacoesCadastradas: React.FC<MostrarInformacoesProps> = ({ profissional }) => {
//  return (
//    <div>
//      <h1>Informações Cadastradas:</h1>
//      <p>Nome: {profissional.nome}</p>
//      <p>CPF: {profissional.cpf}</p>
//      <p>Telefone: {profissional.telefone}</p>
//      <p>Estado: {profissional.estado}</p>
//      <p>Cidade: {profissional.cidade}</p>
//      <p>Email: {profissional.email}</p>
//      <p>Descrição: {profissional.descricao}</p>
//    </div>
//  );
//};
//
//export default MostrarInformacoesCadastradas;