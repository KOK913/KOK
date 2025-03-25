document.getElementById('option1').addEventListener('click', function() {
    document.getElementById('scenario-text').innerText = '高収入のバイトを選びました。次の選択肢は？';
    document.getElementById('option1').innerText = '選択肢1: すぐに応募する';
    document.getElementById('option2').innerText = '選択肢2: もう少し情報を調べる';
    document.getElementById('option1').addEventListener('click', function() {
        document.getElementById('scenario-text').innerText = 'すぐに応募しました。怪しい面接に呼ばれました。';
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
    });
    document.getElementById('option2').addEventListener('click', function() {
        document.getElementById('scenario-text').innerText = 'もう少し情報を調べました。闇バイトの情報が見つかりました。';
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
    });
});

document.getElementById('option2').addEventListener('click', function() {
    document.getElementById('scenario-text').innerText = '安全そうなバイトを選びました。次の選択肢は？';
    document.getElementById('option1').innerText = '選択肢1: 面接に行く';
    document.getElementById('option2').innerText = '選択肢2: 他のバイトも探す';
    document.getElementById('option1').addEventListener('click', function() {
        document.getElementById('scenario-text').innerText = '面接に行きました。問題なく採用されました。';
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
    });
    document.getElementById('option2').addEventListener('click', function() {
        document.getElementById('scenario-text').innerText = '他のバイトも探しました。より良いバイトが見つかりました。';
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
    });
});
