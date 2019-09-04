using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.Models;
using Newtonsoft.Json;
using Academy_FinalProject.ImportAPI;

namespace Academy_FinalProject.FormatData
{
    public class FormattingDataBysykkel
    {
        //Create a list of Bysykkel objects
        public List<Bysykkel> CreateBikesInfo(BysykkelResponse stationResponse , BysykkelResponse bikeInfoResponse)
        {
            //Extract information about Bysykkel stations and add them ass Bysykkel objects in a list.
            var listOfStations = new List<Bysykkel>();
            foreach (var station in stationResponse.Data.Stations)
            {
                listOfStations.Add(
                    new Bysykkel()
                    {
                        StationId = station.StationId,
                        StationName = station.Name,
                        StationAddress = station.Address,
                        Latitude = station.Lat,
                        Longitude = station.Lon,
                        StationCapacity = station.Capacity,
           
                    });
            }
            //Iterate through bikeInfoResponse and match stationId's with the Id's in listOfStations.
            //Add information about available bikes and docks to existing bike objects in listOfStations
            foreach (var bike in bikeInfoResponse.Data.Stations)
            {
                var station = listOfStations.Find(x => x.StationId == bike.StationId);
                station.BikesAvailable = bike.BikesAvailable;
                station.DocksAvailable = bike.DocksAvailable;
            }
            return listOfStations;
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
        public int StationId { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public int Capacity { get; set; }
        public int BikesAvailable { get; set; }

        public int DocksAvailable { get; set; }



    }

   
}
