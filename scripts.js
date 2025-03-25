function startExperience() {
    const simulation = document.getElementById('simulation');
    simulation.innerHTML = '';

    const questions = [
        {
            question: "あなたは高額報酬が提示された求人広告を見つけました。どうしますか？",
            choices: ["応募する", "詳細を確認する", "無視する"],
            correct: 2
        },
        {
            question: "求人広告には連絡先として無料のメールアドレスが記載されています。どうしますか？",
            choices: ["連絡する", "調査する", "無視する"],
            correct: 2
        },
        {
            question: "求人広告に応募したところ、個人情報を求められました。どうしますか？",
            choices: ["提供する", "慎重に調査する", "拒否する"],
            correct: 2
        },
        {
            question: "求人広告には「即日勤務可能」と記載されています。どうしますか？",
            choices: ["応募する", "詳細を確認する", "無視する"],
            correct: 2
        },
        {
            question: "求人広告には「経験不問、高収入」と記載されています。どうしますか？",
            choices: ["応募する", "慎重に調査する", "無視する"],
            correct: 2
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        if (currentQuestion < questions.length) {
            const question = questions[currentQuestion];
            simulation.innerHTML = `
                <p>${question.question}</p>
                <ul>
                    ${question.choices.map((choice, index) => `<li><button class="choiceButton" onclick="chooseAnswer(${index})">${choice}</button></li>`).join('')}
                </ul>
            `;
        } else {
            simulation.innerHTML = `<p>体験終了！あなたのスコアは${score}/${questions.length}です。</p>`;
        }
    }

    window.chooseAnswer = function(index) {
        if (index === questions[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        showQuestion();
    }

    showQuestion();
}
