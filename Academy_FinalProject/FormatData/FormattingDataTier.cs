using Academy_FinalProject.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academy_FinalProject.FormatData {
    public class FormattingDataTier {
        public List<Scooter> CreateTierScooters(TierResponse tierResponse) {
            var listOfScooters = new List<Scooter>();
            foreach (var scooter in tierResponse.Data) {
                listOfScooters.Add(
                    new Scooter {
                        ProviderName = "Tier",
                        Latitude = scooter.Latitude,
                        Longitude = scooter.Longitude,
                        BatteryCapacity = scooter.batteryLevel,
                        IsAvailable = scooter.isRentable
                    });
            }
            return listOfScooters;
        }
    }


    //Creating filestructure for making C# object
    public class TierResponse {
        [JsonProperty("data")]
        public Data[] Data { get; set; }
    }
    public class Data {
        [JsonProperty("lat")]
        public double Latitude { get; set; }
        [JsonProperty("lng")]
        public double Longitude { get; set; }
        public int batteryLevel { get; set; }
        public bool isRentable { get; set; }
    }
}
