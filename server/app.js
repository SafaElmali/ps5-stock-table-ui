const express = require('express');
const app = express();
const Crawler = require("crawler");
const cors = require('cors')
app.use(cors());

const port = 3000;
var resList = [];

app.get('/stocks', async (req, res) => {
    const vatanBlueRay = await getVatanData("https://www.vatanbilgisayar.com/sony-playstation-5-oyun-konsolu.html");
    const vatanDigital = await getVatanData("https://www.vatanbilgisayar.com/sony-playstation-5-digital-surum-oyun-konsolu.html");
    resList.push(vatanBlueRay);
    resList.push(vatanDigital);

    const teknosaBluray = await getTeknosaData("https://www.teknosa.com/sony-ps5-playstation-5-oyun-konsolu-p-125088447");
    resList.push(teknosaBluray);

    const mediamarktData = await getMediamarktData("https://www.mediamarkt.com.tr/tr/product/_sony-playstation-5-oyun-konsolu-1212362.html");
    resList.push(mediamarktData);

    const result = prepareResult(resList);
    resList = [];

    res.send(JSON.parse(result));
})

app.get('/', async (req, res) => {
    res.send("Server initialized");
})

const getVatanData = (vatanUrl) => {
    return new Promise((resolve, reject) => {
        const craw = new Crawler({
            maxConnections: 10,
            callback: function (error, res, done) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    const $ = res.$;
                    const productInfo = $(".product-list__product-name").text().trim();
                    const stockBtn = $(".btn-stock").text().trim();
                    var status = 0;
                    var isDigital = 0;

                    if (stockBtn.includes("SEPETE EKLE")) {
                        status = 2;
                    } else if (stockBtn.includes("ÇOK YAKINDA")) {
                        status = 1;
                    }

                    if (productInfo.includes("Digital")) {
                        isDigital = 1;
                    }

                    resolve(new ResponseModel(productInfo, "Vatan", status, vatanUrl, isDigital));
                    done();
                }
            }
        });

        craw.queue(vatanUrl);
    });
}

const getTeknosaData = (teknosaUrl) => {
    return new Promise((resolve, reject) => {
        const craw = new Crawler({
            maxConnections: 10,
            callback: function (error, res, done) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    const $ = res.$;
                    const productInfo = $(".product-title").text().trim();
                    const stockBtn = $("#productOutOfStockFromAll").text().trim();
                    var status = 0;
                    var isDigital = 0;

                    if (!stockBtn) {
                        status = 2;
                    }

                    if (productInfo.includes("Digital")) {
                        isDigital = 1;
                    }

                    resolve(new ResponseModel(productInfo, "Teknosa", status, teknosaUrl, isDigital));
                    done();
                }
            }
        });

        craw.queue(teknosaUrl);
    });
}

const getMediamarktData = (mediaMarktUrl) => {
    return new Promise((resolve, reject) => {
        const craw = new Crawler({
            maxConnections: 10,
            callback: function (error, res, done) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    const $ = res.$;
                    const productInfo = $("h1[itemprop]").text().trim();
                    const stockBtn = $(".offline-text").text().trim();
                    var status = 0;
                    var isDigital = 0;

                    if (!stockBtn) {
                        status = 2;
                    }

                    if (productInfo.includes("Digital")) {
                        isDigital = 1;
                    }

                    resolve(new ResponseModel(productInfo, "Media Markt", status, mediaMarktUrl, isDigital));
                    done();
                }
            }
        });

        craw.queue(mediaMarktUrl);
    });
}

const prepareResult = (list) => {
    const resList = JSON.stringify(list);
    resList.replace("ResponseModel", "");

    return resList;
}

function ResponseModel(productInfo, site, status, link, isDigital) {
    this.productInfo = productInfo;
    this.site = site;
    this.status = status;
    this.link = link;
    this.isDigital = isDigital;
}

app.listen(port, () => {
    console.log(`Stock Server listening at http://localhost:${port}`)
})