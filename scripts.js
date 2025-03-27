const quizData = {
    start: {
        question: "友人が『高報酬の運送業バイトを紹介する』と言ってきました。どうしますか？",
        choices: {
            "話を聞く": "q2",
            "断る": "q_end_good_1",
            "考える時間をもらう": "q2"
        }
    },
    q2: {
        question: "面接で『簡単な運送業で高報酬』と言われました。どうしますか？",
        choices: {
            "続けて話を聞く": "q3",
            "怪しいと感じて帰る": "q_end_good_1",
            "詳細を確認する": "q3"
        }
    },
    q3: {
        question: "仕事の内容が曖昧で『すぐに決めてほしい』と言われました。どうしますか？",
        choices: {
            "すぐに決める": "q_end_bad_1",
            "家族や友人に相談する": "q_end_good_1",
            "とりあえず受ける": "q4"
        }
    },
    q4: {
        question: "『身分証明書を提出してください』と言われました。どうしますか？",
        choices: {
            "提出する": "q_end_bad_1",
            "断る": "q_end_good_1",
            "後で提出する": "q_end_bad_1"
        }
    },
    q5: {
        question: "『仕事は夜間に行われます』と言われました。どうしますか？",
        choices: {
            "受け入れる": "q6",
            "断る": "q_end_good_1",
            "考える": "q6"
        }
    },
    q6: {
        question: "『仕事内容は簡単な荷物の運搬です』と言われました。どうしますか？",
        choices: {
            "詳細を確認する": "q7",
            "断る": "q_end_good_1",
            "受け入れる": "q7"
        }
    },
    q7: {
        question: "『報酬は当日現金払い』と言われました。どうしますか？",
        choices: {
            "受け取る": "q_end_bad_1",
            "断る": "q_end_good_1",
            "考える": "q8"
        }
    },
    q8: {
        question: "『仕事の場所は秘密にしてください』と言われました。どうしますか？",
        choices: {
            "秘密にする": "q_end_bad_1",
            "断る": "q_end_good_1",
            "考える": "q_end_bad_1"
        }
    },
    q9: {
        question: "当日、現地に行くと『強盗に行く』と言われました。どうしますか？",
        choices: {
            "逃げる": "q_end_good_2",
            "協力する": "q_end_bad_2",
            "警察に通報する": "q_end_good_2"
        }
    },
    q10: {
        question: "強盗に行くと言われた後、どうしますか？",
        choices: {
            "逃げる": "q_end_good_3",
            "協力する": "q_end_bad_3",
            "警察に通報する": "q_end_good_3"
        }
    },
    // 残りの問題を追加...
    q_end_good_1: {
        question: "あなたは闇バイトを避けることができました。素晴らしい！闇バイトの危険性をよく理解しています。",
        choices: {}
    },
    q_end_good_2: {
        question: "あなたは危険な状況から逃げることができました。素晴らしい！闇バイトの危険性をよく理解しています。",
        choices: {}
    },
    q_end_good_3: {
        question: "あなたは警察に通報し、安全を確保しました。素晴らしい！闇バイトの危険性をよく理解しています。",
        choices: {}
    },
    q_end_bad_1: {
        question: "あなたは闇バイトに巻き込まれてしまいました。気を付けましょう！",
        choices: {}
    },
    q_end_bad_2: {
        question: "あなたは危険な状況に巻き込まれてしまいました。気を付けましょう！",
        choices: {}
    },
    q_end_bad_3: {
        question: "あなたは闇バイトの誘惑に負けてしまいました。気を付けましょう！",
        choices: {}
    }
};

let currentStep = "start";
let score = 0;
let selectedAnswer = false;

function loadQuestion() {
    const quiz = document.getElementById('quiz');
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const nextButton = document.getElementById('nextButton');

    questionEl.innerText = quizData[currentStep].question;
    choicesEl.innerHTML = '';

    const choices = quizData[currentStep].choices;
    for (const choice in choices) {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => selectAnswer(choice, button);
        choicesEl.appendChild(button);
    }

    nextButton.style.display = 'none';
}

function selectAnswer(choice, button) {
    selectedAnswer = true;
    const correctChoice = quizData[currentStep].correct;

    if (quizData[currentStep].correct && choice === correctChoice) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }

    const choicesButtons = document.querySelectorAll('#choices button');
    choicesButtons.forEach(btn => btn.disabled = true);

    const correctElement = document.createElement('span');
    correctElement.innerText = quizData[currentStep].correct ? ' 正解' : ' 不正解';
    correctElement.classList.add(quizData[currentStep].correct && choice === correctChoice ? 'correct' : 'incorrect');
    button.appendChild(correctElement);

    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    if (!selectedAnswer) return;
    selectedAnswer = false;

    currentStep = quizData[currentStep].choices[Object.keys(quizData[currentStep].choices)[0]];
    if (!currentStep) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    const quiz = document.getElementById('quiz');
    const result = document.getElementById('result');
    const scoreEl = document.getElementById('score');
    const evaluationEl = document.getElementById('evaluation');

    quiz.style.display = 'none';
    result.style.display = 'block';

    scoreEl.innerText = `スコア: ${score}`;
    evaluationEl.innerText = getEvaluation(score);
}

function getEvaluation(score) {
    if (score === 25) {
        return "素晴らしい！闇バイトの危険性をよく理解しています。";
    } else if (score >= 20) {
        return "良いですね。もう少し注意が必要です。";
    } else if (score >= 15) {
        return "注意が必要です。闇バイトの危険性についてもっと学びましょう。";
    } else if (score >= 10) {
        return "気を付けましょう！闇バイトの誘惑に負けないように。";
    } else {
        return "闇バイトの危険性についてもっと学ぶ必要があります。";
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);
