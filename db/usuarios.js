export let dBusuarios = [
    {
      id: 1,
      user: "Damian",
      pass: "123456",
      admin: true,
    },
  ];

 
JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dBusuarios));