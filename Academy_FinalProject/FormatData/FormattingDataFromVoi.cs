using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.ImportAPI.VehicleResponse;
using Academy_FinalProject.Models;

namespace Academy_FinalProject.FormatData
{
    public class FormattingDataFromVoi
    {
        public List<Scooter> ExtractVoiScooterInfoToList(ICollection<VoiResponse> rawScooterJsonData)
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
}
