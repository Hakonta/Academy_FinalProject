using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Newtonsoft.Json;

namespace Academy_FinalProject.ImportAPI
{
	public class FetchZvippData
	{
		public async Task<FormattingDataZvipp.ZvippResponse> FetchZvippDataMethod()
		{
			try
			{
					using (HttpClient client = new HttpClient())
					{
						using (HttpResponseMessage res = await client.GetAsync($"https://zvipp-api.joyridecity.bike/gbfs/en/free_bike_status.json?operator_id=60"))
						{
							using (HttpContent content = res.Content)
							{
								string data = await content.ReadAsStringAsync();
								var zvippResponse = JsonConvert.DeserializeObject<FormattingDataZvipp.ZvippResponse>(data);

								return zvippResponse;
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
