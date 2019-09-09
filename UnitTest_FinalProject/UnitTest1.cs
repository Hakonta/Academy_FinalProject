using System.Runtime.InteropServices.ComTypes;
using NUnit.Framework;
using Academy_FinalProject.Controllers;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.FormatData;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void TestingBysykkel()
        {
            FetchBysykler bysykler = new FetchBysykler();
            var something = bysykler;
            FormattingDataBysykkel formattingDataBysykkel = new FormattingDataBysykkel();
            var fetchBysykkelTask = bysykler.FetchStationInfoData();
            var bikes = formattingDataBysykkel.CreateBikesInfo(fetchBysykkelTask.Result, fetchBysykkelTask.Result);
            Assert.GreaterOrEqual(bikes[0].StationCapacity, 1);
        }

    }
}
