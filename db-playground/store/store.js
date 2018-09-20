let store = {
    state: {
    timeslots: [],
    },
    mutations: {
        setTimeslots(payload) {
            store.state.timeslots = [];
            store.state.timeslots.push(payload);
        }, 
        removeTimes(index) {
            store.state.timeslots[0].splice(index, 1);

        }
    },
    getters: {
        getTimeslots() {
            return store.state.timeslots[0];
        }
    }
}
module.exports = store;

