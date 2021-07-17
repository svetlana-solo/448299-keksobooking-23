const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const PREVIEW_SIZE = 40;
const PHOTO_SIZE = 70;
const DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';

const userUploader = document.querySelector('.ad-form__field input[type=file]');
const userPreview = document.querySelector('.ad-form-header__preview img');

const photoContainer = document.querySelector('.ad-form__photo');

const photoUploader = document.querySelector('.ad-form__upload input[type=file]');

const setPreviewFiles = (selectedFile, container, size) =>
  (evt) => {
    evt.preventDefault();
    const file = selectedFile.files[0];
    const fileName = file.name.toLowerCase();
    const photoFile = FILE_TYPES.some((fileType) =>
      fileName.endsWith(fileType));
    if (!photoFile) {
      return;
    }

    const preview = container || document.createElement('img');
    preview.width = size;
    preview.height = size;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
    if (!container) {
      photoContainer.append(preview);
    }
  };

const initPhotoUploaders = () => {
  userUploader.addEventListener('change', setPreviewFiles(userUploader, userPreview, PREVIEW_SIZE));
  photoUploader.addEventListener('change', setPreviewFiles(photoUploader, null, PHOTO_SIZE));


};

const resetPreview = () => {
  userPreview.src = DEFAULT_AVATAR_SRC;
  const photoPreview = photoContainer.querySelectorAll('img');
  if (photoPreview && photoPreview.length) {
    photoPreview.forEach((image) => {
      image.remove();
    });
  }
};

export {
  initPhotoUploaders,
  resetPreview
};
