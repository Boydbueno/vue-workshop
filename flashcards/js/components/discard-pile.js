var discardPile = {
    props: ['cards'],
    template: `<button v-bind:disabled="cards.length == 0" class="btn btn-default" @click="$emit('shuffle-discard-pile')">discard pile ({{ cards.length }})</button>`
};
