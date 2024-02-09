export const productos = [
  {
    id: 1,
    nombre: "Remera",
    precio: 13000,
    imagen:"https://www.pymedia.com.ar/wp-content/uploads/2017/06/remeras-pymedia2-600x600.jpg",
    categoria:"remera"
  },
  {
    id: 2,
    nombre: "Jean",
    precio: 54000,
    imagen:"https://http2.mlstatic.com/D_NQ_NP_997699-MLA49888773208_052022-O.webp",
    categoria:"jean"
  },
  {
    id: 3,
    nombre: "Campera",
    precio: 155000,
    imagen:"https://www.cordonandino.com/img/articulos/campera_inken_2_de_mujer_con_pluma_allied_800_fp_imagen1.jpg",
    categoria:"campera"
  },
  {
    id: 4,
    nombre: "Gorra",
    precio: 25000,
    imagen:"https://acdn.mitiendanube.com/stores/987/679/products/jahtbher-r_21-b228a4a71285712c5b16934921269229-640-0.jpg",
    categoria:"gorra"
  },
  
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));