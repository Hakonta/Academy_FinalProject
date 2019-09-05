using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.Models;
using Newtonsoft.Json;

namespace Academy_FinalProject.FormatData
{
    public class FormattingDataVoi
    {
        public List<Scooter> CreateVoiScooters(ICollection<VoiResponse> rawScooterJsonData)
        {
            List<Scooter> allScooters = new List<Scooter>();

            foreach (var scooter in rawScooterJsonData)
            {

                allScooters.Add(new Scooter
                {
                    ProviderName = "Voi",
                    Latitude = scooter.Location[0],
                    Longitude = scooter.Location[1],
                    BatteryCapacity = scooter.Battery,
                });
            }

            return allScooters;
        }
    }

    //Creating filestructure for making C# object

    public class VoiResponse
    {
        [JsonProperty("Id")]
        public Guid ScooterId { get; set; }
        public double[] Location { get; set; }
        public int Battery { get; set; }
        public string Status { get; set; }
    }
}
