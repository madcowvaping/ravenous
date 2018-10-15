const apiKey = "lJOguRCdrExyIxBJT9xqUYa2ymcuYqPxsvQSKwlSdrby_XwUDsOPsPRO7FoKMuhgU65PLkxovWW1oUMOzFZEFyXdsOxQCTP25PlQeOWblALh1JqwpNggWMs0T-PEW3Yx";
export const Yelp = {
  search(term, location, sortBy){
    return fetch (`https://cors-anywhere.herokuapp.com/https://api-yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses){
        jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address:business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reveiwCount: business.review_count
          }
        })
      }
    });
  }
}
