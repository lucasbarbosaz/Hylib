import React from "react";
import Requests from "../../../services/Requests";
import Loading from "../../../components/Loading";
import CardPhoto from "../CardPhoto";

const CommunityPhotos = () => {
  const [photos, setPhotos] = React.useState([]);
  const [isLoadingPhotos, setLoadingPhotos] = React.useState(true);

  const getPhotos = () => {
    Requests.photos
      .getCommunityPhotos()
      .then((response) => {
        setPhotos(response.data);
      })
      .finally(() => {
        setLoadingPhotos(false);
      });
  };

  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {isLoadingPhotos ? (
        <Loading />
      ) : (
        <div className="flex justify-content-center">
          <div className="h-full flex flex-col px-3">
            <div className="grid grid-cols-1 gap-4 grid-cols-2 grid-cols-3 grid-cols-4">
              {photos.map((photo, key) => {
                return <CardPhoto {...photo} key={key} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityPhotos;
