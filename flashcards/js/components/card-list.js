var cardList = {
    props: ['cards', 'deckCards'],
    template: `<ul class="nav nav-pills nav-stacked pull-right">
        <li v-for="(card, index) in cards" @click="addToDeck(card)">
            #{{ index + 1 }} ({{ howOftenInDeck(card) }}) 
            <button class="btn btn-sm btn-danger" v-show="howOftenInDeck(card) > 0" @click.stop="deleteFromDeck(card)"><i class="glyphicon glyphicon-remove"></i></button>
        </li>
</ul>`,
    methods: {
        addToDeck(card) {
            this.$emit('added-card-to-deck', card);
        },
        deleteFromDeck(card) {
            this.$emit('deleted-card-from-deck', card);
        },
        howOftenInDeck(card) {
            if (this.deckCards.length === 0) return 0;

            return this.deckCards.filter(value => {
                return value.front === card.front && value.back === card.back;
            }).length;
        }
    }
};
