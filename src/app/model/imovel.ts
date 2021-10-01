export class Imovel{
    cod: number;
    tipo: string;
    nome: number;
    quant1: string;
    quant2: string;
    valor: string;
    endereco: string;

                   //10  mouse   50  
    constructor(cod ?: number,
         tipo ?: string,
         preco ?: number,
         nome ?: string,
         quant1 ?: string,
         quant2 ?: string,
         valor ?: string,
         endereco ?: string){
                    this.cod = cod;
                    this.tipo = tipo;
                    this.nome = preco;
                    this.quant1 = quant1;
                    this.quant2 = quant2;
                    this.valor = valor;
                    this.endereco = endereco;

             }
}