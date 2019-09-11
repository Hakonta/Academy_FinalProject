using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Academy_FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityBikeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Bysykkel>> Get() {
            //FetchBysykler bysykler = new FetchBysykler();
            //FormattingDataBysykkel formattingBysykkel = new FormattingDataBysykkel();
            //var fetchBysykkelTask = bysykler.FetchStationInfoData();
            //var fetchBysykkelTask2 = bysykler.FetchBikeData();

            //var allBysykkel = formattingBysykkel.CreateBikesInfo(await fetchBysykkelTask, await fetchBysykkelTask2);

            //var allBikes = allBysykkel.ToList();

            return Ok(Fetcher.Bikes);
        }

    }
}