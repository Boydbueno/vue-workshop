var createCardForm = {
    template: `<form class="form-inline" @submit.prevent="add">
        <div class="form-group">
            <input type="text" class="form-control" name="front" placeholder="Front" v-model="front">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" name="back" placeholder="Back" v-model="back">
        </div>
        <input type="submit" class="btn btn-default" value="Add Card">
    </form>`,

    data() {
        return {
            front: '',
            back: ''
        }
    },
    methods: {
        add() {
            this.$emit('added', { front: this.front, back: this.back});
            this.front = '';
            this.back = '';
        }
    }
};
