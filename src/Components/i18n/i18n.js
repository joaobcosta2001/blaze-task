// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Your translations go here
const resources = {
    en: {
        translation: {
            Contacts: 'Contacts',
            contacts_description: "Give us a call or send us an email! Also take a minute to check our social media. Also, use the form to the right to send us a message!",
            contacts_description_mobile: "Give us a call or send us an email! Also take a minute to check our social media. Also, use the form below to send us a message!",
            contacts_phone:"Phone: +351 910 000 000",
            contacts_email:"Email: geral@blazetask.pt",
            NAME: "NAME",
            EMAIL: "EMAIL",
            SUBJECT: "SUBJECT",
            MESSAGE: "MESSAGE",
            SUBMIT: "SUBMIT",
            homepage_description_title: "Your Partner in Digital Automation",
            homepage_description_text: "We are BlazeTask. We empower your business by automating repetitive, tedious and costly data tasks. Save time, save resources, save money, by allowing us to transform your business operation!",
            our_process_title: "We guide your business towards the future of",
            efficiency: "efficiency",
            our_process_description: "We follow a simple but effective process in order to find inefficient processes within your business and build tools with the latest AI technologies that will help mitigate these problems.",
            our_process_card_1_title: "Understanding Operations",
            our_process_card_1_description: "Explore client workflows to find automation opportunities.",
            our_process_card_2_title: "Opportunity Evaluation",
            our_process_card_2_description: "Strategically choose the most profitable digital enhancements",
            our_process_card_3_title: "Implementing Automation",
            our_process_card_3_description: "Develop applications to automate your tasks.",
            our_process_card_4_title: "Results and Benefits",
            our_process_card_4_description: "Deploy, monitor and help you save money and time!",
            our_process: "Our Process",
            our_process_title_description: "How we will renew your business step by step.",
            ready_to_get_started: "Ready to get started?",
            homepage_call_us: "Call us at +351 910 000 000 or send us an email at geral@blazetask.pt",
            ask_for_demo: "ASK FOR A DEMO TODAY",
            ABOUT_US:"ABOUT US",
            ABOUT:"ABOUT",
            US:"US",
            HOME:"HOME",
            CONTACTS:"CONTACTS",
            SERVICES:"PROCESS",

            about_us_description: "At BlazeTask, we believe in streamlining operations, saving time, and optimizing costs to help businesses thrive. Join us on this journey, where we shape a future of unparalleled success for your company.",
            creativity:"Creativity",
            automation:"automation",
            inovation:"inovation",
            future:"future",
            profitability:"profitability",
            CEO:"CEO",
            CTO:"CTO",
            diogo_description: "Master's student at FEUP in Industrial Engineering and Management and having prior experience in small company management, Diogo Cordeiro is the strategist who will take BlazeTask and your business to the next level.",
            joao_description: "Master's student at FEUP in Computer Engineering and former member of the junior enterprise JuniFEUP, João Costa is the tinkering mind behind the projects that will make your business as technological as ever.",
            about_us_partners:"Partners",

            homepage_stats_title:"STAY AHEAD, IMPLEMENT AI",
            homepage_stats_stay_ahead:"STAY AHEAD",
            homepage_stats_implement_ai:"IMPLEMENT AI",
            homepage_stats_subtitle:"We will help you",
            homepage_stats_1:"of companies are actively developing training programs for their staff to handle generative AI tools adeptly",
            homepage_stats_2:"cost reduction, providing businesses with substantial savings and enhanced financial performance",
            homepage_stats_3:"of companies have recently ramped up their AI investment, marking a noticeable increase within a three-month timeframe",
            homepage_we_are:"We are",

            process_title:"Our Process",
            process_title_mobile:"Process",
            process_section_title_1:"Understanding Operations",
            process_section_title_2:"Task Evaluation",
            process_section_title_3:"Implementing Automation",
            process_section_title_4:"Results and Benefits",
            process_section_description_1:"In this initial phase, we delve deep into your company's operations, conducting thorough consultations and stakeholder interviews. Our goal is to gain a comprehensive understanding of your workflows, identify pain points, and recognize opportunities for streamlining.",
            process_section_description_2:"Once we have a clear picture of your operations, we meticulously evaluate tasks based on predefined criteria.  We will then present a report comprising all the automation opportunities we found and you will be able to choose which ones you want to see implemented in your business.",
            process_section_description_3:"Armed with insights from the evaluation phase, we seamlessly integrate automation solutions using cutting-edge tools like Zapier and Python programming. Our expert team designs custom scripts and workflows tailored to your specific needs, ensuring a smooth transition into a more efficient and automated work environment.",
            process_section_description_4:"The implementation of automation isn't just a process; it's a pathway to tangible results. We continuously monitor and optimize automated workflows, providing you with transparent reports on the realized benefits. Expect increased efficiency, reduced operational costs, and a transformed business landscape that positions you at the forefront of innovation.",

            page_not_found:"Page not found.",
        },
    },
    // Add translations for other languages here
    pt:{
        translation: {
            Contacts: 'Contactos',
            contacts_description: "Ligue-nos ou mande-nos um email! Aproveite também para ver as nossas redes sociais. Além disso, use o formulário à direita para nos enviar uma mensagem!",
            contacts_description_mobile: "Ligue-nos ou mande-nos um email! Aproveite também para ver as nossas redes sociais. Além disso, use o formulário abaixo para nos enviar uma mensagem!",
            contacts_phone:"Telemóvel: +351 910 000 000",
            contacts_email:"Email: geral@blazetask.pt",
            NAME: "NOME",
            EMAIL: "EMAIL",
            SUBJECT: "ASSUNTO",
            MESSAGE: "MENSAGEM",
            SUBMIT: "SUBMETER",
            homepage_description_title: "O seu Parceiro em Automação Digital",
            homepage_description_text: "Nós somos a BlazeTask. Capacitamos o seu negócio automatizando tarefas de dados repetitivas, entediantes e com custos financeiros. Economize tempo, economize recursos, economize dinheiro, ao nos permitir transformar as operações do seu negócio!",
            our_process_title: "Nós guiamos o seu negócio em rumo ao futuro da",
            efficiency: "eficiência",
            our_process_description: "Seguimos um processo simples, mas eficaz, para encontrar processos ineficientes no seu negócio e construir ferramentas com as mais recentes tecnologias de AI que ajudarão a mitigar esses problemas.",
            our_process_card_1_title: "Compreender as Operações",
            our_process_card_1_description: "Explorar os processos do cliente para encontrar oportunidades para automação.",
            our_process_card_2_title: "Avaliação de Oportunidades",
            our_process_card_2_description: "Estrategicamente escolher as melhores otimizações digitais a fazer",
            our_process_card_3_title: "Implementar Automação",
            our_process_card_3_description: "Desenvolver aplicações para automatizar as suas tarefas.",
            our_process_card_4_title: "Resultados e Benefícios",
            our_process_card_4_description: "Instalar, monitorizar e ajudá-lo a poupar tempo e dinheiro!",
            our_process: "O Nosso Processo",
            our_process_title_description: "Como vamos renovar o seu negócio passo a passo.",
            ready_to_get_started: "Pronto para começar?",
            homepage_call_us: "Ligue para +351 910 000 000 ou envie-nos um email para geral@blazetask.pt",
            ask_for_demo: "PEDIR UMA DEMONSTRAÇÂO",
            ABOUT_US:"SOBRE NÓS",
            ABOUT:"SOBRE",
            US:"NÓS",
            HOME:"HOME",
            CONTACTS:"CONTACTOS",
            SERVICES:"PROCESSO",

            about_us_description: "Na BlazeTask, acreditamos na simplificação das operações, em poupar tempo e na otimização dos custos para ajudar empresas a prosperar. Junte-se a nós nesta jornada, onde criaremos um futuro de enorme sucesso para a sua empresa.",
            creativity:"Creatividade",
            automation:"Automação",
            inovation:"Inovação",
            future:"Futuro",
            profitability:"Lucros",
            CEO:"Diretor Executivo",
            CTO:"Diretor de Tecnologia",
            diogo_description: "Aluno de mestrado na FEUP em Engenharia e Gestão Industrial e com experiência anterior em gestão de pequenas empresas, Diogo Cordeiro é o estratega que levará a BlazeTask e o seu negócio para o próximo nível.",
            joao_description: "Aluno de mestrado da FEUP em Engenharia Informática e antigo membro da júnior empresa JuniFEUP, João Costa é a mente por trás dos projetos que tornarão o seu negócio mais tecnológico do que nunca.",
            about_us_partners:"Colaboradores",
            
            homepage_stats_title:"PERMANEÇA NA VANGUARDA, IMPLEMENTE AI",
            homepage_stats_stay_ahead:"PERMANEÇA NA VANGUARDA",
            homepage_stats_implement_ai:"IMPLEMENTE AI",
            homepage_stats_subtitle:"Nós ajudamo-lo",
            homepage_stats_1:"das empresas estão ativamente a desenvolver formações para que os seus funcionários possam lidar de modo eficaz com ferramentas de AI generativas",
            homepage_stats_2:"redução de custos, proporcionando às empresas uma economização substancial e melhor desempenho financeiro",
            homepage_stats_3:"das empresas aumentaram recentemente o seu investimento em IA, registando-se um aumento notável num período de três meses",
            homepage_we_are:"Nós somos a ",

            process_title:"O Processo",
            process_title_mobile:"Processo",
            process_section_title_1:"Compreender Operações",
            process_section_title_2:"Avaliar Oportunidades",
            process_section_title_3:"Implementar Automação",
            process_section_title_4:"Resultados e Beneficios",
            process_section_description_1:"Nesta fase inicial, nos estudamos a fundo as operações da sua empresa, efetuando consultas minuciosas e entrevistando colaboradores. O nosso objetivo é ganhar uma compreensão profunda do fluxos de trabalho da sua empresa, identificar pontos problemáticos e reconhecer oportunidades de automação.",
            process_section_description_2:"Assim que tivermos uma visão clara das operações do seu negócio, avaliamos cada tarefa com base em critérios predefinidos. Apresentaremo-lhe então um relatório com todas as oportunidades de automação encontradas e deixá-lo-emos escolher que inovações quer implementar",
            process_section_description_3:"Munidos com todo o conhecimento adquirido nas fases anteriores, integramos soluções de automação no seu negócio usando tecnologias de ponta como Zapier e scripts Python feitos à medida. A nossa equipa de especialistas projetará estes sistemas e criará fluxos de trabalho personalizados de acordo com suas necessidades específicas, garantindo uma transição suave para um ambiente de trabalho mais eficiente e automatizado.",
            process_section_description_4:"A implementação de processos automáticos não é apenas um processo; é um caminho para resultados tangíveis. Monitoramos e otimizamos continuamente fluxos de trabalho automatizados, fornecendo relatórios transparentes sobre os benefícios obtidos. Espere maior eficiência, custos operacionais reduzidos e um cenário de negócios transformado que o posicionará na vanguarda da inovação.",

            page_not_found:"Página não encontrada.",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'pt', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
        escapeValue: false, // react already safe from xss
        },
    });

export default i18n;
