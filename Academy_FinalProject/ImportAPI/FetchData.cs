using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.ImportAPI
{
    public class FetchData
    {
        public async void FetchScooterData()
        {
            string baseURL = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";
            try
            {
                using (HttpClient client = new HttpClient())
                    
                {
                    client.DefaultRequestHeaders.Add("X-Api-Key", "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2 ");
                    using (HttpResponseMessage res = await client.GetAsync(baseURL))
                    {
                        using (HttpContent content = res.Content)
                        {
                            string data = await content.ReadAsStringAsync();
                            if (data != null)
                            {
                                var dataJson = JObject.Parse(data);
                                // TODO: Return data
                                Console.WriteLine(dataJson);
                            }
                            else
                            {
                                Console.WriteLine("No data found");
                            }
                        }
                    }
                }
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
            }
        }
    }
}
