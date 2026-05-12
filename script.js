const answers = {
    "жкх": "ЖКХ включает управление коммунальными услугами: водоснабжение, отопление, электричество и содержание домов.",

    "вывоз мусора": "Вывоз твердых бытовых отходов осуществляется региональными операторами согласно графику.",

    "общественный транспорт": "Общественный транспорт включает автобусы, трамваи, метро и маршрутные перевозки.",

    "экология": "Экологическое управление города включает озеленение, контроль выбросов и переработку отходов.",

    "благоустройство": "Благоустройство включает ремонт дорог, освещение, озеленение и создание общественных пространств."
};

function addMessage(text, sender) {

    const chatBox = document.getElementById("chatBox");

    const message = document.createElement("div");

    message.classList.add("message", sender);

    message.innerText = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAnswer(question) {

    question = question.toLowerCase();

    for (let key in answers) {

        if (question.includes(key)) {

            return answers[key];
        }
    }

    return "Информация не найдена. Попробуйте задать вопрос по ЖКХ, транспорту, экологии или благоустройству.";
}

function sendMessage() {

    const input = document.getElementById("userInput");

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addMessage(text, "user");

    const answer = generateAnswer(text);

    setTimeout(() => {

        addMessage(answer, "bot");

    }, 500);

    input.value = "";
}