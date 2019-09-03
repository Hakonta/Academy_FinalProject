﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.ImportAPI
{
    public class FetchBysykler
    {
        public async Task<JObject> FetchBysyklerData()
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
                            if (data != null)
                            {
                                dataJson = JObject.Parse(data);
                            }
                            else
                            {
                                Console.WriteLine("No data found");
                                return null;
                            }
                        }
                    }

                }

                Console.WriteLine(dataJson);
                return dataJson;
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}
