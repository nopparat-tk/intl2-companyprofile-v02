import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ImagePopup() {
   const [slideOpen, setSlideOpen] = useState(false);
   return (
      <div>
         <Lightbox
            open={slideOpen}
            close={() => setSlideOpen(false)}
            slides={images}
            plugins={[Zoom]}
            styles={{
               container: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
               },
            }}
         />
      </div>
   );
}
