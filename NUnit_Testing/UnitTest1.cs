using System.Collections.Generic;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            FetchTierData tier = new FetchTierData();
            var test = tier;
            FormattingDataTier formattingTier = new FormattingDataTier();
            Scooter scooter = new Scooter();
            List<Scooter> scooters = new List<Scooter>();
            Assert.AreEqual("Tier", tier);

        }
    }
}