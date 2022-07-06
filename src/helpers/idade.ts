export type Level = {
    title:string;
    color:string;
    icon: 'crianca' | 'jovem' | 'adulto' | 'senhor';
    idade: number[];
    yourIdade?:number;
    yourName?:string;
}

export const levels: Level[] = [
    {title:'Não possui idade', color:'#FF6961', icon:'crianca' ,idade:[0, 14]},
    {title:'Facultativo', color:'#E6C972', icon:'jovem', idade:[15, 18]},
    {title:'Obrigatório', color:'#77DD77', icon:'adulto', idade:[17, 71]},
    {title:'Facultativo', color:'#FCD764', icon:'senhor', idade:[71, 150]},
];

export const calculateIdade = (data:number, nome:string) =>{
    const dataAtual = new Date();

    const idade = dataAtual.getFullYear() - data;
    const firstname = nome;

    for(let i in levels){
        if( idade >= levels[i].idade[0] && idade < levels[i].idade[1] ){

            let levelCopy= {...levels[i]};

            levelCopy.yourIdade = idade;
            levelCopy.yourName = firstname;

            return levelCopy;
        }
    }
    return null;
}

