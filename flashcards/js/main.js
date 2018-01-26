new Vue({
    el: "#app",
    data: {
        cards: [{
            front: "voorkant",
            back: "achterkant"
        }, {
            front: "voorkant2",
            back: "achterkant2"
        }],
        deckCards: [{
            front: "voorkant",
            back: "achterkant"
        }],
        discardPileCards: [],
        drawnCard: ""
    },
    methods: {
        onCardAdded(card) {
            this.cards.push(card)
        },
        onCardAddedToDeck(card) {
            this.deckCards.push(card);
        },
        onCardDeletedFromDeck(card) {
            let cardToDelete = this.deckCards.findIndex(value => {
                return value.front === card.front && value.back === card.back;
            });

            this.deckCards.splice(cardToDelete, 1);
        },
        onDrawCard() {
            var topCard = this.deckCards[0];
            this.deckCards.shift();

            if (this.drawnCard !== "") {
                this.discardPileCards.push(this.drawnCard);
            }

            this.drawnCard = topCard;
        },
        onShuffleDiscardPile() {
            this.deckCards.push(...this.discardPileCards);
            this.discardPileCards = [];
            this.deckCards.push(this.drawnCard);
            this.drawnCard = "";
            this.shuffle(this.deckCards);
        },
        shuffle(a) {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
        }
    },
    components: {
        'card': card,
        'card-deck': cardDeck,
        'card-list': cardList,
        'discard-pile': discardPile,
        'create-card-form': createCardForm,
    }
});
