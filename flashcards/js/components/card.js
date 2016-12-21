var card = {
    props: ['card'],
    template: `<button class="btn btn-primary" @click="isFrontShown = !isFrontShown">
        <template v-if="isFrontShown">{{ card.front }} </template>
        <template v-else>{{ card.back}} </template>
    </button>`,
    data() {
        return {
            isFrontShown: true
        }
    }
};
