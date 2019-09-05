using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.ImportAPI
{
    public class FetchBysykler
    {
        public async Task<BysykkelResponse> FetchStationInfoData()
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    //client.DefaultRequestHeaders.Add("client-name", "student project");
                    using (HttpResponseMessage res = await client.GetAsync($"https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json?client-name=student-project"))
                    {
                        using (HttpContent content = res.Content)
                        {
                            string data = await content.ReadAsStringAsync();
                            var stationResponse = JsonConvert.DeserializeObject<BysykkelResponse>(data);
                            return stationResponse;
                        }
                    }
                }
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return null;
            }
        }

        public async Task<BysykkelResponse> FetchBikeData()
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    //client.DefaultRequestHeaders.Add("client-name", "student project");
                    using (HttpResponseMessage res = await client.GetAsync($"https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json?client-name=student-project"))
                    {
                        using (HttpContent content = res.Content)
                        {
                            string data = await content.ReadAsStringAsync();
                            var bikeInfoResponse = JsonConvert.DeserializeObject<BysykkelResponse>(data);
                            return bikeInfoResponse;
                        }
                    }
                }
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}
