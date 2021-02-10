import React from "react";
import styles from "./Controller.module.scss";
import CustomBrandingContext from "../../custom-branding-context";

function Controller() {
  return (
    <CustomBrandingContext.Consumer>
      {({
        primary,
        setPrimary,
        secondary,
        setSecondary,
        topBarColor,
        setTopBarColor,
        setLogo
      }) => (
        <div className={styles.container}>
          <h3>Colors control:</h3>
          <div className={styles.input}>
            <label for="primary">Primary:</label>
            <input
              onChange={(event) => {
                setPrimary(event.target.value);
              }}
              type="color"
              id="primary"
              name="head"
              value={primary}
            />
          </div>
          <div className={styles.input}>
            <label for="secondary">Secondary:</label>
            <input
              type="color"
              id="secondary"
              name="head"
              value={secondary}
              onChange={(event) => {
                setSecondary(event.target.value);
              }}
            />
          </div>
          <div className={styles.input}>
            <label for="topBarColor">Top Bar:</label>
            <input
              type="color"
              id="topBarColor"
              name="head"
              value={topBarColor}
              onChange={(event) => {
                setTopBarColor(event.target.value);
              }}
            />
          </div>
          <div className={styles.input}>
            <label for="logo">Logo:</label>
            <input
              id="logo"
              type="file"
              accept="image/*"
              onChange={(event) => uploadFile(event, setLogo)}
            />
          </div>
          <div className={styles.input}>
            <label>Already Upload:</label>
            <label id="percentage">0%</label>
          </div>
        </div>
      )}
    </CustomBrandingContext.Consumer>
  );
}

export default Controller;

function uploadFile(event, setLogo) {
  const cloudName = "de8fezycn";
  const unsignedUploadPreset = "custom-branding-logos";
  var url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

  // Reset the upload progress bar
  document.getElementById("percentage").innerHTML = "0%";

  // Update progress (can be used to show progress indicator)
  xhr.upload.addEventListener("progress", function (e) {
    var progress = Math.round((e.loaded * 100.0) / e.total);
    document.getElementById("percentage").innerHTML = `${progress}%`;

    console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
  });

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // File uploaded successfully
      var response = JSON.parse(xhr.responseText);
      setLogo(response.secure_url);
      event.target.value = "";
    }
  };

  fd.append("upload_preset", unsignedUploadPreset);
  fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
  fd.append("file", event.target.files[0]);
  xhr.send(fd);
}
