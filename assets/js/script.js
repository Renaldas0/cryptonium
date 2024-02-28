const FAQData = [
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
    {
        question: "What is the best crypto platform for investing?",
        answer: "Best crypto platform for investing is Binance, according to users."
    },
];

const firstSlice = FAQData.slice(0, 5);
const secondSlice = FAQData.slice(4, -1);

const faqsTable = document.querySelector('#table');
const fisrtDiv = document.querySelector('.firstDiv');
const secondDiv = document.querySelector('.secondDiv');

firstSlice.map((faq) => {
    let article = document.createElement('article');
    article.className = "faq-item";

    const markup = `
    <div class="faq-question">
        <span class="question-text">${faq.question}</span>
        <span class="arrows-container">
            <span class="expand"><i class="fa-solid fa-arrow-down"></i></span>
        </span>
    </div>
    <div class="faq-answer">
        <span class="answer-text">${faq.answer}</span>
        <span class="close"><i class="fa-solid fa-arrow-up"></i></span>
    </div>
    `;

    article.innerHTML = markup;
    fisrtDiv.append(article);
})

secondSlice.map((faq) => {
    let article = document.createElement('article');
    article.className = "faq-item";

    const markup = `
    <div class="faq-question">
        <span class="question-text">${faq.question}</span>
        <span class="arrows-container">
            <span class="close"><i class="fa-solid fa-arrow-up"></i></span>
        </span>
    </div>
    <div class="faq-answer">
        <span class="answer-text">${faq.answer}</span>
    </div>
    `;

    article.innerHTML = markup;
    secondDiv.append(article);
})

faqsTable.addEventListener('click', function (e) {
    e.target.closest('.faq-question')
})