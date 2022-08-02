export async function fetchReviews() {
  const response = await fetch('http://localhost:3000/reviews')
  const data = await response.json()
  return data
}

export async function incLike(id, newCount) {
  const data = { likes: newCount }
  const settings = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const url = `http://localhost:3000/reviews/${id}`
    const response = await fetch(url, settings)
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export async function deleteReview(id) {
  const settings = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  try {
    const url = `http://localhost:3000/reviews/${id}`
    const response = await fetch(url, settings)
    const data = await response.json()
    return data
  } catch (e) {
    console.log('Error', e)
    return e
  }
}

export async function addReview(newReview) {
  const url = 'http://localhost:3000/reviews'
  let data = { ...newReview }

  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  // await fetch response
  const response = await fetch(url, settings)
  // await response.json()
  data = await response.json()
  return data
}
