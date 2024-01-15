interface IDelivery {
  name: String;
  weight: number;
  address: {
    street?: String;
    number?: number;
    neighborhood?: String;
    complement?: String;
    city?: String;
    state?: String;
    country?: String;
    geolocation: {
      latitude: number;
      longitude: number;
    };
  };
}

export default IDelivery;
