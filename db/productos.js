export const productos = [
    {
      id: 1,
      nombre: "Fideos Italiano",
      precio: 1500,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_853111-MLA71484726223_092023-O.webp",
      categoria:"fideos"
    },
    {
      id: 2,
      nombre: "Sal Marina fina",
      precio: 800,
      imagen:"https://neufood.com.ar/wp-content/uploads/2020/08/sal-fina-marina-macrozen1-7ca8f1481615ad146715780938387392-640-0.jpg",
      categoria:"sal"
    },
    {
      id: 3,
      nombre: "Sal Marina gruesa",
      precio: 1200,
      imagen:"https://http2.mlstatic.com/D_NQ_NP_927661-MLA42075270930_062020-O.webp",
      categoria:"sal"
    },
    {
      id: 4,
      nombre: "Fideos Arabe",
      precio: 2000,
      imagen:"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/tkt/tkt01074/l/8.jpg",
      categoria:"fideos"
    },
    {
      id: 5,
      nombre: "Especias",
      precio: 4500,
      imagen:"https://m.media-amazon.com/images/I/81wL-bQ0jsL._AC_UF894,1000_QL80_.jpg",
      categoria:"especias"
    },
    
  ];
  
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
  