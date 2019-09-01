using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject {
    public class Program {



        public static void Main(string[] args) {
            //Inputparameters for Fetch method
            string tierKeyType = "X-Api-Key";
            string tierKeyName = "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2";
            string tierUrl = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";



            //Fetching data from Tier API
            FetchTierData fetchTier = new FetchTierData();
            JObject rawData = fetchTier.FetchScooterData(tierUrl, tierKeyType, tierKeyName).Result;

            //Formating data and makin a list of scooters with prefered properties
            FormattingData formattingData = new FormattingData();
            List<Scooter> scooters = formattingData.ExtractScooterInfoToList(rawData);

            //Printing the list of scooters to console
            foreach (var scooter in scooters) {

                string scooterAvailable = scooter.IsAvailable ? "Is available for renting" : "is taken";

                Console.WriteLine($"{scooter.ProviderName} scooter\n" +
                    $"With possition: {scooter.Latitude} - {scooter.Longitude}\n" +
                    $"Batterylevel: {scooter.BatteryCapacity} %\n" +
                    $"{scooterAvailable}\n");
            }
            // Fetching scooterdata from VOI
            FetchVoiData fetchVoiData = new FetchVoiData();
            var voiScooterData = fetchVoiData.FetchVoiScooter().Result;

            //Formating data and making a list of scooters with prefered properties
            FormattingData formattingDataVoi = new FormattingData();
            List<Scooter> scootersVoi = formattingData.ExtractScooterInfoToList(voiScooterData);

            foreach (var scooter in scootersVoi)
            {
                Console.WriteLine($"{scooter.ProviderName} scooter\n" +
                                  $"Batterylevel: {scooter.BatteryCapacity} %\n");
            }


            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
