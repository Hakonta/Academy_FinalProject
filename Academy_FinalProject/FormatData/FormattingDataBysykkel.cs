using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.Models;
using Newtonsoft.Json;

namespace Academy_FinalProject.FormatData
{
    public class FormattingDataBysykkel
    {
        public List<Bysykkel> CreateBikes(BysykkelResponse bysykkelResponse)
        {
            var listOfBikes = new List<Bysykkel>();
            foreach (var bikes in bysykkelResponse.Data.Stations)
            {
                listOfBikes.Add(
                    new Bysykkel()
                    {
                        StationName = bikes.Name,
                        Latitude = bikes.Lat,
                        Longitude = bikes.Lon,
                        StationCapacity = bikes.Capacity,
                        //TODO "Maybe add bikes available 
                    });
            }
            return listOfBikes;
        }
    }

    public class BysykkelResponse
    {
        public BysykkelData Data { get; set; }
    }

    public class BysykkelData
    {
        public BysykkelStation[] Stations { get; set; }
    }

    public class BysykkelStation
    {
        [JsonProperty("station_id")]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public int Capacity { get; set; }
    }
}
