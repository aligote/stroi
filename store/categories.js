export const state = () => ({
    categories: []
})

export const mutations = {
    mut(state, categories) {
        state.categories = categories
    }

}
export const actions = {
    async act({ commit }) {
        const gets = await fetch('./feed.json')
        try {
            const data = await gets.json()
            const categories = data.categories.category
            commit('mut', categories)

        } catch (e) {
            console.log(e)
        }


    }
}
export const getters = {
    categories: state => state.categories,
    catId: (state) => (id) => {
        return state.categories.find(category => category._attributes.id === id)
    }






}