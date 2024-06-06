const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A urbanização acelerada é um fenômeno global que tem transformado cidades ao redor do mundo, especialmente em países em desenvolvimento. Embora o crescimento urbano traga inúmeras oportunidades econômicas e sociais, ele também apresenta desafios significativos, particularmente nos setores de infraestrutura e habitação. Estes problemas são centrais para a discussão sobre mobilidade urbana, pois impactam diretamente a qualidade de vida dos habitantes e a eficiência dos sistemas de transporte.",
        alternativas: [
            {
                texto: "Quais serviços essenciais compõem a infraestrutura urbana e como o crescimento populacional impacta sua manutenção?",
                afirmacao: "A urbanização traz consigo a promessa de progresso e desenvolvimento,   "
                },

            ]
        },
        {
            enunciado: "A infraestrutura urbana abrange serviços essenciais como transporte, redes de água e esgoto, eletricidade, comunicações e gestão de resíduos. Contudo, o crescimento populacional acelerado muitas vezes supera a capacidade das cidades de desenvolver e manter essa infraestrutura adequadamente. Em muitas metrópoles, a falta de investimento em transporte público resulta em congestionamentos crônicos, longos tempos de deslocamento e aumento da poluição do ar. A manutenção inadequada das vias e a insuficiência de sistemas de transporte coletivo eficientes, como metrôs e BRTs, juntamente com a dependência excessiva de veículos particulares, agravam esses problemas, aumentando os engarrafamentos e o estresse urbano.",
            alternativas: [
            {
                texto: "Quais são os desafios da oferta de habitação urbana e o que impulsiona o aumento da demanda por moradia?",
                afirmacao: "mas também impõe desafios complexos que precisam ser abordados com políticas"
            },

        ]
    },
    {
        enunciado: "A oferta de habitação urbana enfrenta desafios devido ao aumento da demanda, impulsionado pela migração rural-urbana e pelo crescimento populacional, sem uma oferta adequada de habitações acessíveis. Isso eleva os preços imobiliários e aluguéis, tornando a moradia inacessível para muitas famílias. Como resultado, favelas e assentamentos informais proliferam, carecendo de serviços básicos e localizados em zonas de risco, o que afeta a saúde e segurança dos moradores e contribui para a segregação social e espacial.",
        alternativas: [
            {
                texto: "Como a ineficiência do transporte público afeta os trabalhadores urbanos e qual é o impacto na pegada de carbono das cidades?",
                afirmacao: "públicas eficazes e investimento contínuo. "
            },

        ]
    },
    {
        enunciado: "A falta de transporte público eficiente afeta a produtividade e qualidade de vida dos trabalhadores urbanos, aumentando a pegada de carbono das cidades. Investimentos em transporte público de qualidade e integração de diferentes modos de transporte são cruciais para uma mobilidade urbana sustentável.",
        alternativas: [
            {
                texto: "Entendi!",
                afirmacao: "Resolver os problemas de infraestrutura e habitação é essencial para criar cidades mais justas, sustentáveis e habitáveis. Somente com uma abordagem integrada e inclusiva será possível transformar o crescimento urbano em uma oportunidade para todos."
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();