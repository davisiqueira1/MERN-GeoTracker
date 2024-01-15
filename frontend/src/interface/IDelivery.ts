interface IDelivery {
  name: String;
  weight: Number;
  address: {
    street?: String;
    number?: Number;
    neighborhood?: String;
    complement?: String;
    city?: String;
    state?: String;
    country?: String;
    geolocation: {
      latitude: Number;
      longitude: Number;
    };
  };
}

export default IDelivery;
