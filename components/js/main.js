Vue.component('panel', {
    props: ['heading', 'title'],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <template v-if="title === true">
                    <h3 class="panel-title">{{ heading }}</h3>
                </template>
                <template v-else>{{ heading }}</template>
            </div>
            <div class="panel-body">
                <slot></slot>
            </div>
        </div>
    `
});

Vue.component('progress-bar', {
    props: ['percentage'],
    template: `
        <div class="progress">
            <div class="progress-bar" role="progressbar" v-bind:aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: percentage + '%' }">
                <span class="sr-only">60% Complete</span>
            </div>
        </div>
    `
});

var app = new Vue({
    el: "#root",
    data: {
        progress: 95,
        currentView: 'page-about'
    },
    components: {
        'page-home': {
            template: `<div>
                <h1>This is the home page!</h1>
                <panel heading="My panel heading" :title="true">
                    My panel boy panel
                </panel>
        
                <panel heading="My panel heading" :title="false">
                    My panel body!
                </panel>
            </div>
        `
        },
        'page-about': {
            props: ['percentage'],
            template: `<div>
                <h1>This is the about page</h1>
                <progress-bar v-bind:percentage="percentage"></progress-bar>
            </div>
        `,
        }
    },
});


var interval = setInterval(() => {
    app.progress++;
    if (app.progress >= 100) clearInterval(interval);
}, 1000)

// setTimeout(() => {
//     app.currentView = 'page-about';
// }, 1000);
