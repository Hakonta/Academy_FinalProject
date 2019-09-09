using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academy_FinalProject.Controllers {
    public class Fetcher {
        public static List<Scooter> Scooters { get; set; }
        public Fetcher() {
            Scooters = new List<Scooter>();
           
        }
        public static async Task<Action<List<Scooter>>> FetchScooter() {
            while (true) {
                Console.WriteLine("fetch executing");
                // FLASH:
                FetchFlashData flash = new FetchFlashData();
                FormatingDataFlash formattingFlash = new FormatingDataFlash();
                var fetchFlashTask = flash.FetchFlashDataMethod();

                // VOI:
                FetchVoiData voi = new FetchVoiData();
                FormattingDataVoi formattingVoi = new FormattingDataVoi();
                var fetchVoiTask = voi.FetchVoiDataMethod();

                // TIER:
                FetchTierData tier = new FetchTierData();
                FormattingDataTier formattingTier = new FormattingDataTier();
                var fetchTierTask = tier.FetchTierDataMethod();

                // ZVIPP:
                FetchZvippData zvipp = new FetchZvippData();
                FormattingDataZvipp formattingZvipp = new FormattingDataZvipp();
                var fetchZvippTask = zvipp.FetchZvippDataMethod();

                // Running paralell fetch
                var allFlashScooters = formattingFlash.CreateFlashScooters(await fetchFlashTask);
                var allVoiScooters = formattingVoi.CreateVoiScooters(await fetchVoiTask);
                var allTierScooters = formattingTier.CreateTierScooters(await fetchTierTask);
                var allZvippScooters = formattingZvipp.CreateZvippScooters(await fetchZvippTask);

                // Concating all lists to one list
                
                Scooters = allFlashScooters.Concat(allTierScooters).Concat(allVoiScooters).Concat(allZvippScooters).ToList();

                Console.WriteLine("pause");
                System.Threading.Thread.Sleep(900000);
            }


        }
    }
}
