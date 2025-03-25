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
    const results = [];

    function showQuestion() {
        if (currentQuestion < questions.length) {
            const question = questions[currentQuestion];
            simulation.innerHTML = `
                <p>${question.question}</p>
                <ul>
                    ${question.choices.map((choice, index) => `
                        <li>
                            <button class="choiceButton" onclick="chooseAnswer(${index})">${choice}</button>
                            <div id="result-${index}" class="result-icon"></div>
                        </li>
                    `).join('')}
                </ul>
            `;
        } else {
            const percentageScore = (score / questions.length) * 100;
            simulation.innerHTML = `<p>体験終了！あなたのスコアは<span class="score">${percentageScore.toFixed(1)} / 100</span>です。</p>`;
            simulation.innerHTML += `<p>選択肢の組み合わせとスコア:</p>`;
            results.forEach(result => {
                simulation.innerHTML += `<p>${result.choices.join(" -> ")} : スコア ${result.score}</p>`;
            });
        }
    }

    window.chooseAnswer = function(index) {
        const resultIcon = document.getElementById(`result-${index}`);
        if (index === questions[currentQuestion].correct) {
            score++;
            resultIcon.classList.add('correct');
        } else {
            resultIcon.classList.add('incorrect');
        }
        results.push({ choices: questions.map(q => q.choices[index]), score });
        currentQuestion++;
        setTimeout(showQuestion, 1000); // 1秒後に次の質問を表示
    }

    function predictOutcomes() {
        const totalQuestions = questions.length;
        const totalChoices = questions[0].choices.length;
        const totalOutcomes = Math.pow(totalChoices, totalQuestions);

        for (let i = 0; i < totalOutcomes; i++) {
            let outcome = [];
            let tempScore = 0;
            for (let j = 0; j < totalQuestions; j++) {
                const choiceIndex = Math.floor(i / Math.pow(totalChoices, j)) % totalChoices;
                outcome.push(questions[j].choices[choiceIndex]);
                if (choiceIndex === questions[j].correct) {
                    tempScore++;
                }
            }
            results.push({ choices: outcome, score: tempScore });
        }
    }

    predictOutcomes();
    showQuestion();
}
