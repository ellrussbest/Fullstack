import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useEffect, useState } from "react";
import { url } from "../../shared/util/validators";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const UserPlaces = () => {
  // useParams returns the dynamic values rendered on our url on an object
  const userId = useParams().userId;
  const { sendRequest, error, clearError, isLoading } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(`${url}/places/user/${userId}`);
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };

    fetchPlaces();
  }, [sendRequest, userId]);
  

  return (
    <>
      <ErrorModal />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList obj={{ items: loadedPlaces }} />
      )}
      {!isLoading && loadedPlaces && <></>}
    </>
  );
};

export default UserPlaces;
