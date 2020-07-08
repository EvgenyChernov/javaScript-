let game = {
    /**
     * Запуск игры
     */
    run: function () {
        alert("Вас приветствует игра 'Кто хочет стать миллионером!'");

        while (true) {
            const answer = move.getAnswer();
            if (answer === "exit") {
                return;
            }
            if (answer === configuration.arrTrueAnswer[player.indicatorMove]) {
                alert("Проздравляю Вы угадали!");
                player.indicatorMove++;
                player.indicatorTrueAnswer();
                if (player.indicatorMove === configuration.arrQuestions.length) {
                    player.clearGame()
                    return;
                }
                continue;
            } else {
                alert("Вы не угадали.");
                player.indicatorMove++;
                if (player.indicatorMove === configuration.arrQuestions.length) {
                    player.clearGame();
                    return;
                }
                continue;
            }
        }
    },
    
}

