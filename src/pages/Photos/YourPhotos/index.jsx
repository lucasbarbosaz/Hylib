import React from "react";
import Requests from "../../../services/Requests";
import StoreContext from "../../../store/Context";
import Loading from "../../../components/Loading";
import CardPhoto from "../CardPhoto";

const YourPhotos = () => {
  const { user } = React.useContext(StoreContext);
  const [photos, setPhotos] = React.useState([]);
  const [isLoadingPhotos, setLoadingPhotos] = React.useState(true);

  React.useEffect(() => {
    const getPhotos = () => {
      Requests.photos
        .getYoursPhotos(user.username)
        .then((response) => {
          setPhotos(response.data);
        })
        .finally(() => {
          setLoadingPhotos(false);
        });
    };
    getPhotos();
  }, [user.username]);

  return (
    <>
      {isLoadingPhotos ? (
        <Loading />
      ) : (
        <div className="flex justify-content-center">
          <div className="h-full flex flex-col px-3">
            <div className="grid grid-cols-1 gap-2 grid-cols-2 grid-cols-3 grid-cols-4">
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

export default YourPhotos;
