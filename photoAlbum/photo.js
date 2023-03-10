const loadphoto = async () => {
  const jsonUrl = `https://jsonplaceholder.typicode.com/photos`;
  const res = await fetch(jsonUrl);
  const data = await res.json();
  displayPhoto(data);
};

const displayPhoto = (photos) => {
  const photoContainer = document.getElementById("photo-container");
  photos.forEach((photo) => {
    const photoDiv = document.createElement("div");
    photoDiv.innerHTML = `
        <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="loadDetails(${photo.id})" class="card">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">${photo.title}</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
        </div>
    `;
    photoContainer.appendChild(photoDiv);
  });
};

const loadDetails = async (id) => {
  const jsonUrl = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const res = await fetch(jsonUrl);
  const data = await res.json();
  displayPhotoDetails(data);
};

const displayPhotoDetails = (photo) => {
  console.log(photo);
  const modalTitle = document.getElementById("staticBackdropLabel");
  modalTitle.innerText = photo.title;
  const displayPhoto = document.getElementById("displayPhoto");
  displayPhoto.innerHTML = `
  <img height="150px" width="200px" src="${photo.url}" alt="">
  `;
};

loadphoto();
