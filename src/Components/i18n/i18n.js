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
            HOME:"HOME",
            CONTACTS:"CONTACTS",
            SERVICES:"SERVICES",
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
            HOME:"HOME",
            CONTACTS:"CONTACTOS",
            SERVICES:"SERVIÇOS",
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
