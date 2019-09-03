using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.ImportAPI
{
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

    public class FetchBysykler
    {
        public async Task<BysykkelResponse> FetchBysyklerData()
        {
            JObject dataJson = null;
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    //client.DefaultRequestHeaders.Add("client-name", "student project");
                    using (HttpResponseMessage res = await client.GetAsync($"https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json?client-name=student project"))
                    {
                        using (HttpContent content = res.Content)
                        {
                            string data = await content.ReadAsStringAsync();
                            var bysykkelResponse = JsonConvert.DeserializeObject<BysykkelResponse>(data);
                            return bysykkelResponse;
                            //if (data != null)
                            //{
                            //    dataJson = JObject.Parse(data);
                            //}
                            //else
                            //{
                            //    Console.WriteLine("No data found");
                            //    return null;
                            //}
                        }
                    }

                }

                //Console.WriteLine(dataJson);
                //return dataJson;
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}
