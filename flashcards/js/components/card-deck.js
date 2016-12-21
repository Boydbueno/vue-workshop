var cardDeck = {
    props: ['cards'],
    template: `<button v-bind:disabled="cards.length == 0" class="btn btn-default" @click="$emit('draw-card')">deck ({{ cards.length }})</button>`
};
