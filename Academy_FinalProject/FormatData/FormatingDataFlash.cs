using Academy_FinalProject.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Academy_FinalProject.FormatData {
    public class FormatingDataFlash {


       public List<Scooter> CreateFlashScooters(FlashResponse flashResponse) {
            var listOfScooters = new List<Scooter>();
            foreach (var scooter in flashResponse.Data.Scooters) {
                listOfScooters.Add(
                    new Scooter {
                        ProviderName = "Flash",
                        Latitude = scooter.location.latitude,
                        Longitude = scooter.location.longitude,
                        BatteryCapacity = scooter.PowerPercent,
                        IsAvailable = scooter.IsBookable

                    });
            }
            Console.WriteLine(listOfScooters.Count());
            return listOfScooters;
        }
    }

    //Creating filestructure for making C# object
    public class FlashResponse {
        public FlashData Data { get; set; }
    }
    public class FlashData {
        public Scooters[] Scooters { get; set; }
    }
    public class Scooters {
        [JsonProperty("idScooter")]
        public int Id { get; set; }
        [JsonProperty("PowerPercentInt")]
        public int PowerPercent { get; set; }
        public bool IsBookable { get; set; }
        public location location { get; set; }
    }
    public class location {
        public double latitude { get; set; }
        public double longitude { get; set; }
    }
   
    
}
