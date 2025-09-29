const { baralho, FlashCard } = require("../data");

function listarAll() {
    let totalFlashcards = 0;

    for (let i = 0; i < baralho.length; i++) {
        console.log(`\n ${i + 1}. Baralho: ${baralho[i].nome}`);

        const flashcardsDoBaralho = FlashCard.filter(f => f.baralhoid === baralho[i].baralhoid);

        if (flashcardsDoBaralho.length === 0) {
            console.log("  (nenhum flashcard neste baralho)");
        } else {
            for (let k = 0; k < flashcardsDoBaralho.length; k++) {
                console.log(`  ${k + 1}. ${flashcardsDoBaralho[k].pergunta} - ${flashcardsDoBaralho[k].resposta}`);
                totalFlashcards++;
            }
        }
    }

    if (totalFlashcards === 0) {
        console.log("\n Você não possui nenhum flashcard.");
    }
}

module.exports = listarAll;
