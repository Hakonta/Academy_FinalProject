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
        public static List<Bysykkel> Bikes { get; set; }
        public Fetcher() {
            Scooters = new List<Scooter>();
            Bikes = new List<Bysykkel>();

        }
        public static async Task<Action<List<Scooter>>> FetchScooter() {
            while (true) {
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
                Console.Writeline("done fetching scooters");
                System.Threading.Thread.Sleep(90000);
            }
        }
        public static async Task<Action> FetchBikeStations() {
            while (true) {
                FetchBysykler bysykler = new FetchBysykler();
                FormattingDataBysykkel formattingBysykkel = new FormattingDataBysykkel();
                var fetchBysykkelTask = bysykler.FetchStationInfoData();
                var fetchBysykkelTask2 = bysykler.FetchBikeData();

                var allBysykkel = formattingBysykkel.CreateBikesInfo(await fetchBysykkelTask, await fetchBysykkelTask2);

                Bikes = allBysykkel.ToList();

                System.Threading.Thread.Sleep(900000);
            }
        }
    }
}

