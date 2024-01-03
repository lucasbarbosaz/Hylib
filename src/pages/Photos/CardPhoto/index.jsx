import React from "react";
import StoreContext from "../../../store/Context";

const CardPhoto = (photo, key) => {
  const { config } = React.useContext(StoreContext);

  const getPhotoDate = () => {
    const timestamp = photo.date;

    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `Foto tirada em ${day}/${month}/${year}`;
  };

  const handleError = (event) => {
    event.target.style.display = "none";
    event.target.outerHTML = `<div class="error-container flex" style="height: auto;">
    <div class="margin-auto flex-column">
        <div class="error-container-image"></div>
            <label class="gray margin-bottom-min text-center">
                <h2 class="bold margin-bottom-minm">Foto não encontrada!</h2>
                <h5>Que pena... parece que sua foto é muito antiga</h5>
            </label>
        </div>
    </div>`;
  };

  return (
    <div key={key} className="flex items-center justify-center col-span-1">
      <div className="photo">
        <img
          className="h-full w-full object-cover object-center"
          src={photo.image}
          alt={photo.username}
          onError={handleError}
        />
        <div className="flex items-center photos__about">
          <div>
            <div
              className="avatar-head"
              style={{
                backgroundImage: `url(${config.hotel.avatarImage}?figure=${photo.figure})`,
                backgroundPosition: "center",
              }}
              alt={photo.username}
            />
          </div>
          <div className="info-photo">
            <div className="info-photo-campo">
              <icon name="display-identity"></icon>
              <h5>
                <a href={`/profile/${photo.username}`} class="photos__link">
                  {photo.username}
                </a>
              </h5>
            </div>
            <div className="info-photo-campo">
              <icon name="clock-mini"></icon>
              <span>{getPhotoDate()}</span>
            </div>
            <div className="info-photo-campo">
              <div className="flex">
                <icon name="room"></icon>
                <span>{photo.room_name}</span>
              </div>
              <a className="flex" href={`/client/betav2/${photo.room_id}`} target="_blank" rel="noreferrer">
                <icon name="follow-room"></icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPhoto;
