const player = {
    indicatorMove: 0,
    trueAnswer: 0,
    indicatorMoveForUser() {
        return player.indicatorMove + 1
    },

    indicatorTrueAnswer() {
        return ++player.trueAnswer;
    },
    clearGame() {
        let newGame = prompt(`Игра окончена, ваш счет равняется ${player.trueAnswer} \n что бы начать новую игру введите "new" для выхода любую клавишу`);
        if (newGame === "new") {
            player.indicatorMove = 0;
            player.trueAnswer = 0;
            game.run()
        } else return;
    }
}