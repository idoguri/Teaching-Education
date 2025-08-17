const allQuestions = [
  {
    question: "教育基本法の改正（2006年）で新たに盛り込まれた内容はどれか？",
    options: ["学力の三要素", "学校設置基準", "公共の精神", "義務教育の年限"],
    answer: "公共の精神",
    commentary: "2006年改正で『公共の精神』『伝統と文化を尊重』『環境の保全』などが追加された。"
  },
  {
    question: "学校教育法において、小学校の修業年限は何年と定められているか？",
    options: ["12年", "9年", "3年", "6年"],
    answer: "6年",
    commentary: "学校教育法第22条で、小学校の修業年限は6年と定められている。"
  },
  {
    question: "社会教育法において、社会教育主事の資格を定めているのはどの条文か？",
    options: ["第15条", "第3条", "第23条", "第9条"],
    answer: "第23条",
    commentary: "社会教育法第23条に社会教育主事に関する規定がある。"
  },
  {
    question: "教育基本法における教育の目的として正しいものはどれか？",
    options: ["人格の完成", "経済的成長", "産業の発展", "国家の繁栄"],
    answer: "人格の完成",
    commentary: "教育基本法第1条に『人格の完成』が教育の目的と記されている。"
  },
  {
    question: "義務教育に関する規定として正しいものはどれか？",
    options: ["小学校のみ", "市町村が独自に決める", "無償である", "高校までを含む"],
    answer: "無償である",
    commentary: "憲法第26条・教育基本法により義務教育は無償である。"
  },
  {
    question: "地方教育行政の組織及び運営に関する法律に基づき、教育委員会を設置するのはどこか？",
    options: ["文部科学省", "大学", "市町村と都道府県", "国会"],
    answer: "市町村と都道府県",
    commentary: "地教行法により教育委員会は市町村と都道府県に設置される。"
  },
  {
    question: "教育基本法第10条で規定されている内容はどれか？",
    options: ["家庭教育", "学習権", "教員の身分保障", "宗教教育"],
    answer: "家庭教育",
    commentary: "教育基本法第10条は家庭教育について規定している。"
  },
  {
    question: "学習指導要領の法的性格として正しいのはどれか？",
    options: ["単なる参考資料", "法規範性を持つ行政規則", "判例法", "国会制定法"],
    answer: "法規範性を持つ行政規則",
    commentary: "学習指導要領は法規範性を持つ行政規則であると判例で認められている。"
  },
  {
    question: "学校教育法における高等学校の修業年限は原則として何年か？",
    options: ["6年", "2年", "3年", "4年"],
    answer: "3年",
    commentary: "学校教育法第50条により、高等学校の修業年限は3年とされている。"
  },
  {
    question: "教育基本法における生涯学習の理念が明記されたのはいつか？",
    options: ["2006年改正", "1990年代教育改革", "1947年制定当初", "1970年改正"],
    answer: "2006年改正",
    commentary: "生涯学習の理念は2006年の教育基本法改正で明記された。"
  },
  {
    question: "教育基本法において、大学について規定しているのは第何条か？",
    options: ["第12条", "第7条", "第9条", "第4条"],
    answer: "第7条",
    commentary: "教育基本法第7条は大学に関する規定である。"
  },
  {
    question: "社会教育法において、公民館は何を目的とする施設か？",
    options: ["住民の教養の向上や生活文化の振興", "大学教育の振興", "児童福祉の推進", "学校教育の補完"],
    answer: "住民の教養の向上や生活文化の振興",
    commentary: "社会教育法第20条に、公民館の目的として住民の教養向上や生活文化の振興などが示されている。"
  },
  {
    question: "地方教育行政法において、教育長の任命権を持つのは誰か？",
    options: ["文部科学大臣", "教育委員会", "首長（知事または市町村長）", "国会"],
    answer: "首長（知事または市町村長）",
    commentary: "教育長は首長が任命するが、教育委員会の同意が必要である。"
  },
  {
    question: "教育基本法で、教育を受ける者の権利について明記されている条文はどれか？",
    options: ["第3条", "第8条", "第10条", "第5条"],
    answer: "第3条",
    commentary: "教育基本法第3条は教育を受ける権利について規定している。"
  },
  {
    question: "教育基本法における学校教育の条文番号はどれか？",
    options: ["第2条", "第6条", "第12条", "第9条"],
    answer: "第6条",
    commentary: "教育基本法第6条は学校教育に関する規定である。"
  },
  {
    question: "日本国憲法第26条に関する説明として正しいのはどれか？",
    options: ["教育を受ける権利と義務教育の無償化", "教員免許制度の規定", "社会教育の振興", "大学設置基準の制定"],
    answer: "教育を受ける権利と義務教育の無償化",
    commentary: "憲法第26条は教育を受ける権利と、義務教育の無償化を定めている。"
  },
  {
    question: "教育基本法における教育振興基本計画について定めた条文はどれか？",
    options: ["第20条", "第12条", "第17条", "第8条"],
    answer: "第17条",
    commentary: "教育振興基本計画は教育基本法第17条に規定されている。"
  },
  {
    question: "教育公務員特例法が定める対象者は誰か？",
    options: ["国立及び公立学校の教員", "文部科学省職員全員", "教育委員会委員", "私立学校の教員"],
    answer: "国立及び公立学校の教員",
    commentary: "教育公務員特例法は国立・公立学校の教員に関する特例を定めている。"
  },
  {
    question: "学校教育法で定められている義務教育学校の修業年限は何年か？",
    options: ["3年", "9年", "12年", "6年"],
    answer: "9年",
    commentary: "義務教育学校は小中一貫校で、修業年限は9年とされている。"
  },
  {
    question: "教育基本法における宗教教育の取り扱いに関する記述で正しいのはどれか？",
    options: ["宗教に関する寛容な態度を養う", "宗教教育を全面禁止", "特定の宗教教育を義務化", "宗教行事への参加を義務化"],
    answer: "宗教に関する寛容な態度を養う",
    commentary: "教育基本法第15条で、宗教に関する寛容な態度を養うことが定められている。"
  },
  {
    question: "教育基本法の目的として正しいものはどれか？",
    options: ["人格の完成", "学問の自由", "科学技術の振興", "経済の発展"],
    answer: "人格の完成",
    commentary: "教育基本法第1条において、教育の目的は『人格の完成』と明記されている。"
  },
  {
    question: "学校教育法で定められている義務教育の年限はどれか？",
    options: ["12年", "9年", "6年", "10年"],
    answer: "9年",
    commentary: "学校教育法により、義務教育は小学校6年と中学校3年の計9年間とされている。"
  },
  {
    question: "教育基本法第10条に規定されているものはどれか？",
    options: ["学問の自由", "教育の目的", "家庭教育", "教育行政"],
    answer: "教育行政",
    commentary: "第10条は、教育行政が教育の目的を達成するために行われることを規定している。"
  },
  {
    question: "教育委員会制度が導入されたのは何年か？",
    options: ["1945年", "1960年", "1948年", "1958年"],
    answer: "1948年",
    commentary: "教育委員会制度は1948年に導入された。"
  },
  {
    question: "学校教育法に基づく大学の設置形態で正しいものはどれか？",
    options: ["義務教育・高等教育", "国立・公立・私立", "専修学校・各種学校", "単科大学・総合大学"],
    answer: "国立・公立・私立",
    commentary: "大学は設置者により国立・公立・私立に分類される。"
  },
  {
    question: "教育基本法において、教育の機会均等を定めている条文はどれか？",
    options: ["第4条", "第2条", "第3条", "第1条"],
    answer: "第4条",
    commentary: "教育基本法第4条に教育の機会均等について定められている。"
  },
  {
    question: "学校教育法施行規則において、学年の開始はいつと定められているか？",
    options: ["1月1日", "4月10日","4月1日", "9月1日"],
    answer: "4月1日",
    commentary: "日本の学校年度は4月1日に始まり、翌年3月31日に終わる。"
  },
  {
    question: "生涯学習の理念が初めて明確に打ち出されたのはどの法律か？",
    options: ["学校教育法", "地方教育行政法", "教育基本法", "社会教育法"],
    answer: "教育基本法",
    commentary: "2006年改正教育基本法において、生涯学習の理念が明確化された。"
  },
  {
    question: "義務教育費国庫負担制度は何を目的としているか？",
    options: ["国際交流の促進", "教育水準の維持向上", "科学技術の振興", "大学進学率の上昇"],
    answer: "教育水準の維持向上",
    commentary: "義務教育費国庫負担制度は、全国的に教育水準を維持することを目的としている。"
  },
  {
    question: "学校教育法において、特別支援学校の設置目的はどれか？",
    options: ["外国籍児童の教育", "才能ある児童生徒の特別教育", "障害のある児童生徒の教育", "不登校児童の教育"],
    answer: "障害のある児童生徒の教育",
    commentary: "特別支援学校は、障害のある児童生徒のために設置される。"
  },
  {
    question: "地方教育行政法において、教育委員会の委員は何人で構成されるか？",
    options: ["9人", "7人", "3人", "5人"],
    answer: "5人",
    commentary: "教育委員会は原則5人の委員で構成される。"
  },
  {
    question: "教育基本法において、家庭教育の重要性が明記されたのは第何条か？",
    options: ["第2条", "第10条", "第6条", "第4条"],
    answer: "第10条",
    commentary: "教育基本法第10条に家庭教育の重要性が規定されている。"
  },
  {
    question: "学校教育法に基づく中学校の修業年限は何年か？",
    options: ["3年", "4年", "6年", "9年"],
    answer: "3年",
    commentary: "中学校の修業年限は3年間と定められている。"
  },
  {
    question: "日本国憲法において、教育を受ける権利を規定しているのは第何条か？",
    options: ["第13条", "第26条", "第25条", "第23条"],
    answer: "第26条",
    commentary: "日本国憲法第26条に教育を受ける権利が規定されている。"
  },
  {
    question: "社会教育法に基づき、社会教育主事が配置されるのはどこか？",
    options: ["企業内研修所", "専修学校", "地方公共団体", "私立大学"],
    answer: "地方公共団体",
    commentary: "社会教育主事は地方公共団体に置かれる職である。"
  },
  {
    question: "義務教育段階における就学援助制度の対象者はどのような児童生徒か？",
    options: ["不登校の児童生徒", "経済的理由で就学困難な児童生徒", "外国籍の児童生徒", "障害のある児童生徒"],
    answer: "経済的理由で就学困難な児童生徒",
    commentary: "就学援助制度は、経済的に困難な家庭の児童生徒を支援するための制度。"
  },
  {
    question: "教育基本法第2条に定められている教育の目標に含まれるのはどれか？",
    options: ["産業の発展", "国家の安全保障", "経済競争力の強化", "豊かな人間性と創造性の涵養"],
    answer: "豊かな人間性と創造性の涵養",
    commentary: "教育基本法第2条には、豊かな人間性と創造性を育むことが目標とされている。"
  },
  {
    question: "学校教育法において、義務教育段階の学費に関する規定はどれか？",
    options: ["授業料無償", "給食費用無償", "制服費用無償", "教科書費用無償"],
    answer: "授業料無償",
    commentary: "義務教育においては授業料が無償と定められている。"
  },
  {
    question: "教育振興基本計画は何年ごとに策定されるか？",
    options: ["10年", "7年", "3年", "5年"],
    answer: "5年",
    commentary: "教育振興基本計画は、おおむね5年ごとに策定される。"
  },
  {
    question: "学校教育法における高等専門学校の修業年限は何年か？",
    options: ["5年", "6年", "3年", "4年"],
    answer: "5年",
    commentary: "高等専門学校の修業年限は原則として5年間と定められている。"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = []; // ユーザーの回答を記録するための配列

function startQuiz() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("quizContainer").style.display = "block";
    selectedQuestions = getRandomQuestions(5); // ランダムで5問選ぶ
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; // クイズをリセットするときにクリア
    displayQuestion();
}

function getRandomQuestions(num) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion() {
    const questionObj = selectedQuestions[currentQuestionIndex];
    document.getElementById("questionText").textContent = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = '';

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("optionButton");
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionObj = selectedQuestions[currentQuestionIndex];

    // ユーザーの回答を記録する
    userAnswers.push({
        question: questionObj.question,
        selectedAnswer: selectedOption,
        correctAnswer: questionObj.answer,
        commentary: questionObj.commentary
    });

    if (selectedOption === questionObj.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalQuestions = selectedQuestions.length;

    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('header').style.display = 'none';
    
    // 各問題の結果を表示
    const resultHtml = userAnswers.map((answer) => 
        `<div>
            <p><strong>問題:</strong> ${answer.question}</p>
            <p><strong>結果:</strong> ${answer.selectedAnswer === answer.correctAnswer ? '⭕️' : '❌'}</p>
            <p><strong>あなたの解答:</strong> ${answer.selectedAnswer}</p>
            <p><strong>正答:</strong> ${answer.correctAnswer}</p>
            <p><strong>解説:</strong> ${answer.commentary}</p>
        </div>`
    ).join('');

    document.getElementById('resultList').innerHTML = resultHtml;
    document.getElementById('score').innerText = `得点: ${score} / ${totalQuestions}`;
}

function restartQuiz() {
    document.getElementById("resultContainer").style.display = "none";
    startQuiz();
}
