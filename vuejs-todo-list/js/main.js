new Vue({
    el: "#app",
    data: {
        searchQuery: "",
        item: "",
        items: ["Boodschappen", "Afwas", "Dweilen"],
        noValueEntered: false
    },
    computed: {
        isInvalid: function() {
            return this.noValueEntered && this.item === '';
        }
    },
    methods: {
        addItem: function() {
            if (this.item === "") {
                this.noValueEntered = true;
                return;
            }

            this.items.push(this.item);
            this.item = "";
        },
        removeItem: function(index) {
            this.items.splice(index, 1);
        }
    }
});
