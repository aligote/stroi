export const state = () => ({
    offers: [],
})

export const mutations = {
    mut(state, offers) {
        state.offers = offers
    }

}
export const actions = {
    async act({ commit }) {
        const gets = await fetch('./feed.json')
        try {
            const data = await gets.json()
            const offers = data.offers.offer
            commit('mut', offers)
        } catch (e) {
            console.log(e)
        }


    }
}
export const getters = {
    offers: state => state.offers,
    getOffCatId: (state) => (id) => {
        return state.offers.filter(offer => offer.categoryId._text === id)
    }

}