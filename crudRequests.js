
class HttpCrudRequests {
  async get(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }


  async post(url, post) {
    const res = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
  }

  async post(url, post) {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(post)
    })
  }

  async put(url, post) {
    const res = await fetch(url, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await res.json()
    return data;
  }

  async put(url, post) {
    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(post)
    })
    const data = await res.json()
    return data;
  }

  async delete(url, post) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = 'Deleted successfully'
    return data;
  }

}