function startExperience() {
    const simulation = document.getElementById('simulation');
    simulation.innerHTML = '';

    const questions = [
        {
            question: "SNSで高額報酬を提示する求人広告を見つけました。どうしますか？",
            choices: ["クリックする", "無視する", "友人に相談する"],
            correct: 1
        },
        {
            question: "求人広告をクリックすると、詳細が表示されました。どうしますか？",
            choices: ["さらに詳細を確認する", "無視する", "問い合わせる"],
            correct: 2
        },
        {
            question: "求人内容に応募条件が緩いことが記載されています。どうしますか？",
            choices: ["応募する", "さらに調べる", "無視する"],
            correct: 2
        },
        {
            question: "応募フォームに個人情報を入力する画面が表示されました。どうしますか？",
            choices: ["全て入力する", "一部入力する", "入力をやめる"],
            correct: 3
        },
        {
            question: "応募後、すぐに連絡が来ました。どうしますか？",
            choices: ["連絡を返す", "無視する", "警察に相談する"],
            correct: 2
        },
        // ここに他の20問を追加します
        {
            question: "高額報酬の理由が曖昧に記載されています。どうしますか？",
            choices: ["詳細を問い合わせる", "応募する", "無視する"],
            correct: 3
        },
        {
            question: "連絡先が無料のメールアドレスです。どうしますか？",
            choices: ["連絡する", "調査する", "無視する"],
            correct: 3
        },
        {
            question: "求人内容に必要な資格が記載されていません。どうしますか？",
            choices: ["問い合わせる", "応募する", "無視する"],
            correct: 3
        },
        {
            question: "即日勤務可能と記載されています。どうしますか？",
            choices: ["応募する", "詳細を確認する", "無視する"],
            correct: 3
        },
        {
            question: "経験不問と記載されています。どうしますか？",
            choices: ["応募する", "慎重に調査する", "無視する"],
            correct: 3
        },
        {
            question: "求人内容が具体性に欠けています。どうしますか？",
            choices: ["問い合わせる", "応募する", "無視する"],
            correct: 3
        },
        {
            question: "高額な報酬が提示されています。どうしますか？",
            choices: ["応募する", "慎重に調査する", "無視する"],
            correct: 3
        },
        {
            question: "連絡先に携帯電話番号が記載されています。どうしますか？",
            choices: ["連絡する", "調査する", "無視する"],
            correct: 3
        },
        {
            question: "求人内容が簡潔で詳細が無い。どうしますか？",
            choices: ["問い合わせる", "応募する", "無視する"],
            correct: 3
        },
        {
            question: "応募後、すぐに面接の連絡が来ました。どうしますか？",
            choices: ["面接を受ける", "無視する", "警察に相談する"],
            correct: 2
        },
        {
            question: "面接場所がカフェなどの公共の場です。どうしますか？",
            choices: ["面接を受ける", "無視する", "警察に相談する"],
            correct: 2
        },
        {
            question: "面接官が身分証を提示しない。どうしますか？",
            choices: ["質問する", "面接を進める", "無視する"],
            correct: 3
        },
        {
            question: "仕事内容が具体的に説明されない。どうしますか？",
            choices: ["質問する", "面接を進める", "無視する"],
            correct: 3
        },
        {
            question: "初回の報酬が手渡しで支払われる。どうしますか？",
            choices: ["受け取る", "質問する", "無視する"],
            correct: 3
        },
        {
            question: "仕事内容が違法性を含む可能性がある。どうしますか？",
            choices: ["質問する", "受け入れる", "無視する"],
            correct: 3
        },
        {
            question: "仕事内容が曖昧なまま進められる。どうしますか？",
            choices: ["質問する", "受け入れる", "無視する"],
            correct: 3
        },
        {
            question: "報酬が異常に高い。どうしますか？",
            choices: ["質問する", "受け入れる", "無視する"],
            correct: 3
        },
        {
            question: "仕事内容が急に変わる。どうしますか？",
            choices: ["質問する", "受け入れる", "無視する"],
            correct: 3
        },
        {
            question: "仕事の詳細が最後まで説明されない。どうしますか？",
            choices: ["質問する", "受け入れる", "無視する"],
            correct: 3
        },
        {
            question: "報酬の支払いが遅れる。どうしますか？",
            choices: ["質問する", "受け入れる", "無視する"],
            correct: 3
        }
    ];

    const comments = [
        "素晴らしい！完璧な判断です。",
        "非常に良い判断です。",
        "とても良い選択をしました。",
        "良い判断です。",
        "おしい！もう少し注意が必要です。",
        "まあまあの判断です。",
        "もう少し考える必要があります。",
        "少しリスクが高い判断です。",
        "注意が必要です。",
        "危険な判断です。改善が必要です。"
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
            const finalComment = getComment(percentageScore);
            simulation.innerHTML = `<p>体験終了！あなたのスコアは<span class="score">${percentageScore.toFixed(1)} / 100</span>です。</p>`;
            simulation.innerHTML += `<p>${finalComment}</p>`;
            simulation.innerHTML += `<p>選択肢の組み合わせとスコア:</p>`;
            results.forEach((result, index) => {
                const percentageScoreResult = (result.score / questions.length) * 100;
                simulation.innerHTML += `<p>${result.choices.join(" -> ")} : スコア <span class="score">${percentageScoreResult.toFixed(1)} / 100</span></p>`;
            });
        }
    }

    function getComment(score) {
        if (score >= 90) return comments[0];
        if (score >= 80) return comments[1];
        if (score >= 70) return comments[2];
        if (score >= 60) return comments[3];
        if (score >= 50) return comments[4];
        if (score >= 40) return comments[5];
        if (score >= 30) return comments[6];
        if (score >= 20) return comments[7];
        if (score >= 10) return comments[8];
        return comments[9];
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
