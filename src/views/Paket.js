import homeBackground from "../assets/static/home-bg.jpg";
import { useState, useEffect } from "react";
import menua18 from "../assets/static/menua18.jpeg";

function Paket() {
  const menu18 = [
    {
      nama: "Menu A",
      isi: ["Nasi Putih", "Telur Dadar", "Tumis Jamur", "Sambal", "Sanqua Cup"],
      img: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/2/4/1d44bae2-93cf-4f44-8188-6fee98421f83.jpg",
    },
    {
      nama: "Menu B",
      isi: [
        "Nasi Putih",
        "Telur Balado",
        "Tumis Bayam Jagung",
        "Tempe Goreng",
        "Sambal",
        "Sanqua Cup",
      ],
      img: "https://img-global.cpcdn.com/recipes/18d3425f0ee5323a/1200x630cq70/photo.jpg",
    },
    {
      nama: "Menu C",
      isi: [
        "Nasi Putih",
        "Pesmol Ikan Emas",
        "Capcay",
        "Bakwan Jaung",
        "Sambal",
        "Sanqua Cup",
      ],
      img: "https://assets-a1.kompasiana.com/items/album/2020/07/25/img-20200711-110654-5f1bb0e5d541df346024ea92.jpg",
    },
    {
      nama: "Menu D",
      isi: [
        "Nasi Putih",
        "Ikan Lele Goreng",
        "Tumis Kangkung",
        "Sambal",
        "Sanqua Cup",
      ],
      img: "https://1.bp.blogspot.com/-fXccnXioxiU/WWGu76EYUoI/AAAAAAAAtTE/d4d3f1_PEfIV72RlD0t7Yl3NMEFxSja2ACLcBGAs/s1600/08.jpg",
    },
    {
      nama: "Menu E",
      isi: [
        "Nasi Putih",
        "Ikan Bawal Cabe Ijo",
        "Cah Labu Siem",
        "Orek Tempe",
        "Sambal",
        "Sanqua Cup",
      ],
      img: "https://assets-pergikuliner.com/CEbB2GNL0IWezCCxaEp6jGCldo4=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/854343/picture-1521130426.jpg",
    },
    {
      nama: "Menu F",
      isi: [
        "Nasi Putih",
        "Ayam Rica-Rica",
        "Cah Buncis Bakso",
        "Orek Tempe",
        "Sambal",
        "Sanqua Cup",
      ],
      img: "https://img.inews.co.id/media/822/files/inews_new/2020/08/20/Resep_Ayam_Rica_Rica.jpg",
    },
  ];

  const menu25 = [
    {
      nama: "Menu A",
      isi: [
        "Nasi Putih",
        "Bistik Daging",
        "Capcay",
        "Kentang Balado",
        "Sambal",
        "Sanqua",
      ],
      img: "https://img-global.cpcdn.com/recipes/a7a9c15b7e3a9435/751x532cq70/bistik-daging-sapi-foto-resep-utama.jpg",
    },
    {
      nama: "Menu B",
      isi: [
        "Nasi Putih",
        "Ayam Bakar",
        "Lalapan",
        "Tahu Goreng",
        "Sambal",
        "Kerupuk",
        "Sanqua",
      ],
      img: "https://cdn.pixabay.com/photo/2015/01/02/13/58/grilled-chicken-586547_960_720.jpg",
    },
    {
      nama: "Menu C",
      isi: [
        "Nasi Putih",
        "Rendang Daging",
        "Sayur Daun Singkong",
        "Perkedel Kentang",
        "Sambal",
        "Kerupuk",
        "Sanqua",
      ],
      img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/de6bc3e0-4e56-4442-9534-bc0dcfa2d586_Go-Biz_20201215_164521.jpeg?h=302&w=302&fit=crop&auto=compress",
    },
    {
      nama: "Menu D",
      isi: [
        "Nasi Putih",
        "Udang Balado",
        "Telur Kecap",
        "Bacem Tahu",
        "Sambal",
        "Kerupuk",
        "Sanqua",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttM0vZhv9U7P1VG-MK4z6MRdLUYOQElsE-ZFypy4sR6C4sxz1ZlwtOR_Iel3OGFGmEBo&usqp=CAU",
    },
  ];
  const menu30 = [
    {
      nama: "Menu A",
      isi: [
        "Nasi Putih",
        "Udang Tepung Asam Manis",
        "Ayam Kentucky",
        "Orek Tempe Sambal Ijo",
        "Sup Makaroni + Jagung Manis",
        "Sambal + Kerupuk + Sanqua",
      ],
      img: "http://3.bp.blogspot.com/--MiOHWU4KZA/UbK79ynJ-1I/AAAAAAAAAD8/k71cdhAK2gw/s1600/424761_2247465765489_1404040848_n.jpg",
    },
    {
      nama: "Menu B",
      isi: [
        "Nasi Putih",
        "Semur Daging",
        "Ayam Fillet Asam Manis",
        "Pepes Tahu",
        "Cah Kacang Panjang + Toge",
        "Sambal + Kerupuk + Sanqua",
      ],
      img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-10281861/kafe-betawi_nasi-uduk-semur-daging_full01.jpg",
    },
    {
      nama: "Menu C",
      isi: [
        "Nasi Putih",
        "Pesmol Ikan Mas",
        "Ayam Teriyaki",
        "Capcay",
        "Tempe Orek + Kacang",
        "Bakwan Jagung + Sambal + Sanqua",
      ],
      img: "http://366coffee.com/images/makanan/Nasi-Ayam-Teriyaki-Rp-22-k.jpg",
    },
    {
      nama: "Menu D",
      isi: [
        "Nasi Putih",
        "Rendang",
        "Ayam Woku",
        "Mie Jawa",
        "Pokcoy",
        "Sambal + Kerupuk + Sanqua",
      ],
      img: "https://img.foodspot.co.id/restaurant//pondokrawon/ayam-woku.jpg",
    },
  ];
  useEffect(() => {
    console.log(menu18);
  }, []);

  return (
    <div className="paket-container">
      <h1 className="text-center text-5xl sm:text-7xl lg:text-9xl text-white drop-shadow-2xl pt-7">
        Menu 18 Ribu
      </h1>
      <div className="card-container flex flex-wrap  items-center  justify-center pt-24  ">
        {menu18.map((menu) => {
          return (
            <div className="card p-2 flex flex-col w-72 mb-6 h-96 mx-10  rounded-xl   bg-gray-300">
              <h1 className="text-center text-xl py-2 sm:text-3xl">
                {menu.nama}
              </h1>
              <img
                className="px-2 mb-3 w-96 h-36 rounded-3xl"
                src={menu.img}
                alt="makanan"
              />
              <div className="description w-full h-full mr-2 rounded-xl bg-black ">
                <ul className="text-white text-center">
                  {menu.isi.map((isi) => {
                    return <li>{isi}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-5xl sm:text-7xl lg:text-9xl text-white  md:text-9xl pt-7">
        Menu 25 Ribu
      </h1>
      <div className="card-container flex flex-wrap  items-center  justify-center pt-24  ">
        {menu25.map((menu2) => {
          return (
            <div className="card p-2 flex flex-col w-72 mb-6 h-96 mx-10  rounded-xl   bg-gray-300">
              <h1 className="text-center text-xl py-2 sm:text-3xl">
                {menu2.nama}
              </h1>
              <img
                className="px-2 mb-3 w-96 h-36 rounded-3xl"
                src={menu2.img}
                alt="makanan"
              />
              <div className="description w-full h-full mr-2 rounded-xl bg-black ">
                <ul className="text-white text-center">
                  {menu2.isi.map((isi) => {
                    return <li>{isi}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-5xl sm:text-7xl lg:text-9xl text-white pt-7">
        Menu 30 Ribu
      </h1>
      <div className="card-container flex flex-wrap  items-center  justify-center pt-24  ">
        {menu30.map((menu2) => {
          return (
            <div className="card p-2 flex flex-col w-72 mb-6 h-96 mx-10  rounded-xl   bg-gray-300">
              <h1 className="text-center text-xl py-2 sm:text-3xl">
                {menu2.nama}
              </h1>
              <img
                className="px-2 mb-3 w-96 h-36 rounded-3xl"
                src={menu2.img}
                alt="makanan"
              />
              <div className="description w-full h-full mr-2 rounded-xl bg-black ">
                <ul className="text-white text-center">
                  {menu2.isi.map((isi) => {
                    return <li>{isi}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Paket;
