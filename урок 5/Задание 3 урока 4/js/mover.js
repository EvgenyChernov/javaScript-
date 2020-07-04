let move = {
    /**
     *получает данные пользователя проверяет на допустимые значения.
     */
    getAnswer() {
        // допустимые варианты ответа игроком.
        const availableAnswer = ['a', 'b', 'c', 'd', "exit"];

        while (true) {
            let answer = prompt(` Вопрос № ${player.indicatorMoveForUser()} \n ${configuration.arrQuestions[player.indicatorMove]} \n Варианты ответа ${configuration.versionAnswer[player.indicatorMove]} \n Для выхода введите "exit" `);
            if (!availableAnswer.includes(answer)) {
                alert('для выбора ответа необходимо ввести один из симвыолов "a", "b", "c", "d", для выхода "exit"');
                continue;
            }
            if (availableAnswer.includes(answer)) {
                return answer;
            }
        }
    },

};