document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.transition-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // リンクのデフォルトの動作を停止
            const destination = this.href; // リンクのhref属性を取得

            document.body.classList.add('fade-out'); // フェードアウトクラスを追加

            setTimeout(() => {
                window.location = destination; // フェードアウト後にページ遷移
            }, 500); // CSSのトランジション時間と一致させる
        });
    });
});
