using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.ImportAPI;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject
{
    public class Program
    {   
        public static void Main(string[] args)
        {
            string tierUrl = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";
            string tierKeyType = "X-Api-Key";
            string tierKeyName = "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2";


            FetchTierData fetchTierData = new FetchTierData();
            var test = fetchTierData.FetchScooterData(tierUrl, tierKeyType, tierKeyName);
            Console.WriteLine(test);

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
