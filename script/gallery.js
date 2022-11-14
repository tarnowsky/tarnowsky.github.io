const galleryPhotos = document.querySelectorAll('.gallery-photo')
const galleryPhotoContainers = document.querySelectorAll('.gallery-photo-container')
const bigGallery = document.getElementById('big-photo-box')
const bigGalleryPhotoContainer = document.getElementById('big-photo-content')
const forwardBtn = document.getElementById('forward')
const backwardBtn = document.getElementById('backward')
const closeBtn = document.getElementById('close')

let photoUrls = []
galleryPhotos.forEach(photo => {
    photo = photo.src.split('/')
    let imgIndex = photo.indexOf('img')
    photo = photo.slice(imgIndex).join('/')
    photoUrls.push(photo)
})

const showBigGallery = (photoIndex) => {
    bigGallery.style.display = 'flex'
    bigGalleryPhotoContainer.style.backgroundImage = `url('${photoUrls[photoIndex]}')`
    bigGalleryMenager(photoIndex)
}

const closeBigGallery = () => {
    bigGallery.style.display = 'none'
}

galleryPhotoContainers.forEach(photoBox => {
    photoBox.onclick = () => showBigGallery(Number(photoBox.getAttribute('id')))
})

const bigGalleryMenager = (photoIndex) => {
    forwardBtn.onclick = () => {
        if (photoIndex < (photoUrls.length - 1)) photoIndex++
        else photoIndex = 0
        bigGalleryPhotoContainer.style.backgroundImage = `url('${photoUrls[photoIndex]}')`
    }
    backwardBtn.onclick = () => {
        if (photoIndex > 0) photoIndex--
        else photoIndex = photoUrls.length - 1
        bigGalleryPhotoContainer.style.backgroundImage = `url('${photoUrls[photoIndex]}')`
    }
    closeBtn.onclick = () => closeBigGallery()
}

