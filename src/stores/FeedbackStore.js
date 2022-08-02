import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'
import { fetchReviews, deleteReview, addReview, incLike } from '../backend/Api.js'

const createFeedBackStore = () => {
  const { subscribe, set, update } = writable([])

  const genId = () => {
    const newId = uuidv4()
    return newId
  }

  return {
    subscribe,
    update,
    addNewReview: async newReview => {
      newReview = await addReview(newReview)
      // update store /display new record
      update(prev => [newReview, ...prev])
    },
    likeReview: id => {
      let newCount = 1
      update(pastReviews => {
        pastReviews.map(review => {
          if (review.id == id) {
            review.likes += 1
            newCount = review.likes
          }
        })
        incLike(id, newCount)
        return pastReviews
      })
    },
    delReview: async id => {
      // delete from backend
      await deleteReview(id)
      // update store
      update(prev => {
        prev = prev.filter(review => review.id !== id)
        return prev
      })
    },
    loadReviews: async () => {
      let data = await fetchReviews()
      set(data)
    }
  }
}

export const FeedbackStore = createFeedBackStore()
