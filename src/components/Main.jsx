import axios from "axios";

export default function Main() {
  const location = {
    location: {
      type: "Point",
      coordinates: [106.934593, 47.923756],
    },
  };

  function clickHandlar() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPosition);
    // } else {
    //   console.log("Geolocation is not supported by this browser.");
    // }

    // function showPosition(position) {
    //   const latitude = position.coords.latitude;
    //   const longitude = position.coords.longitude;
    //   console.log("Latitude: " + latitude);
    //   console.log("Longitude: " + longitude);

    // }
    axios.post("http://localhost:8080/nearrestaurant", location).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <div>
        <button onClick={clickHandlar}>click</button>
      </div>
    </>
  );
}
