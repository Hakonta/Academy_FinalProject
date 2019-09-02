using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.Models;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.FormatData
{
    public class FormattingDataVoi
    {
        public List<Scooter> ExtractScooterInfoToList(JArray rawScooterJsonData)
        {
            //Method takes a JObject (FetchScooterData() ) and return a C# list of scooters.
            List<Scooter> allScooters = new List<Scooter>();

            foreach (var scooter in rawScooterJsonData)
            {

                allScooters.Add(new Scooter
                {
                    ProviderName = "Voi",
                    BatteryCapacity = (int)scooter["battery"],
                });
            }
            return allScooters;
        }
    }
}
