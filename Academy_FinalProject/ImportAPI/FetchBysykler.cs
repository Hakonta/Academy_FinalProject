using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Academy_FinalProject.ImportAPI.BysykkelResponse;

namespace Academy_FinalProject.ImportAPI
{


    public class FetchBysykler
    {
        public async Task<BysykkelResponse.BysykkelResponse> FetchBysyklerData()
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
                            var bysykkelResponse = JsonConvert.DeserializeObject<BysykkelResponse.BysykkelResponse>(data);
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
