const btn = document.getElementById('js-btn'); //定数btnにおみくじを引くボタンを代入
const result = document.getElementById('js-text'); //定数resultにテキストを代入
const msg = document.getElementById('js-message'); //定数msgに吹き出しテキストを代入
let img = document.getElementById('js-img'); //変数imgに画像を代入

btn.addEventListener("click", () => { //btnをクリックすると
    const randomNumber = Math.floor(Math.random() * 99); //0~99までのランダムな整数で表示する定数を定義
    if (randomNumber <= 10) {
            result.textContent = "超大吉";
            img.setAttribute('src', 'img/tyou-daikiti.png');
            msg.textContent = "おめでとう！仕事運、金運、恋愛運全て超アップ♪";
        } else if (randomNumber <= 30) {
            result.textContent = "大吉";
            img.setAttribute('src', 'img/otaku.png');
            msg.textContent = "推し事運最高☆";
        } else if (randomNumber <= 50) {
            result.textContent = "大吉";
            img.setAttribute('src', 'img/densyobato.png');
            msg.textContent = "下駄箱にラブレターが入ってるかも…！？";
        } else if (randomNumber <= 70) {
            result.textContent = "大吉";
            img.setAttribute('src', 'img/azarasi-pc.png');
            msg.textContent = "仕事運アップ！";
        } else if (randomNumber <= 90) {
            result.textContent = "大吉";
            img.setAttribute('src', 'img/nekonikoban.png');
            msg.textContent = "金運アップ！";
        } else {
            result.textContent = "大吉";
            img.setAttribute('src', 'img/pengin.png');
            msg.textContent = "恋愛運絶好調♡";
        }  
})  