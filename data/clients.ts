export interface ClientGroup {
  category: string
  clients: string[]
}

export const clientGroups: ClientGroup[] = [
  {
    category: "Hotel Malang",
    clients: ["Harris Hotel & Conventions", "Shanaya Resort Malang", "Aria Hotel"],
  },
  {
    category: "Hotel Batu",
    clients: [
      "Jambuluwuk Convention Hall & Resort Batu",
      "Klub Bunga Butik Resort",
      "Amarta Hills",
      "Aston",
    ],
  },
  {
    category: "Restoran",
    clients: ["May Star Restaurant Malang", "De Goela Jawa", "Inggil", "Rawon Nguling"],
  },
  {
    category: "Cafe Malang",
    clients: ["Hindia Koffie en Eten", "Soto Tangkar Babeh Oga"],
  },
  {
    category: "Cafe Batu",
    clients: ["La'Coco"],
  },
]

export const allClients = clientGroups.flatMap((g) => g.clients)
