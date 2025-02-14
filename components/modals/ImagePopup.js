import React from "react";
import Lightbox from "react-18-image-lightbox";

export default function ImagePopup({
   images,
   photoIndex,
   setPhotoIndex,
   isOpen,
   setIsOpen,
}) {
   return (
      <React.Fragment>
         {isOpen && (
            <Lightbox
               mainSrc={images[photoIndex]}
               nextSrc={images[(photoIndex + 1) % images.length]}
               prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
               }
               onCloseRequest={() => setIsOpen(false)}
               onMovePrevRequest={() =>
                  setPhotoIndex(
                     (photoIndex + images.length - 1) % images.length
                  )
               }
               onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
               }
            />
         )}
      </React.Fragment>
   );
}
