const fileUpload = document.querySelector('#fileUpload');
const imageToCroppeContainer = document.querySelector('#imageToCroppeContainer');
const previewCropped = document.querySelector('#previewCropped');
const imageCroppedContainer = document.querySelector('#imageCroppedContainer');

fileUpload.addEventListener('change', fileChange);
document.querySelector('#croppedBtn').addEventListener('click', cropped);

let cropper;

/**
 *
 * @param {Event} e
 */
function fileChange(e) {
    const file = e.target.files[0];
    const imageToCropped = new Image();
    imageToCropped.src = URL.createObjectURL(file);
    imageToCroppeContainer.appendChild(imageToCropped);
    cropper = new Cropper(imageToCropped, {
        aspectRatio: 4 / 3,
        crop(event) {
            const canvas = this.cropper.getCroppedCanvas();
            previewCropped.src = canvas.toDataURL('image/png');
        },
    });
}

function cropped(e) {
    const canvas = cropper.getCroppedCanvas();
    const image = new Image();
    image.src = canvas.toDataURL('image/png');
    imageCroppedContainer.appendChild(image);
}
