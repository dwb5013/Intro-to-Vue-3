app.component('review-form', {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <fieldset>
            <legend>Would you recommend this product?:</legend>
            <div>
              <input type="radio" id="yes" name="qa" value="true" v-model="wouldRecommend" checked />
              <label for="yes">Yes</label>
            </div>

            <div>
              <input type="radio" id="no" name="qa" value="false" v-model="wouldRecommend" />
              <label for="no">No</label>
            </div>
        </fieldset>
        <input class="button" type="submit" value="Submit">
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods:
    {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                wouldRecommend: null
            }
            if (this.name === '' || this.review === '' || this.rating === null || wouldRecommend === null) {
                alert("Review is incomplete. Please fill out every field.")
                return
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
            wouldRecommend = null
        },
    }
})