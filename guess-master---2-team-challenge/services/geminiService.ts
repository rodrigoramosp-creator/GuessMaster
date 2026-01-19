
import { Category, WordItem } from "../types";

// Base de datos local masiva (100% Offline)
const WORD_DATABASE: Record<string, WordItem[]> = {
  [Category.ANIMALS]: [
    {text: "León"}, {text: "Elefante"}, {text: "Delfín"}, {text: "Tigre"}, {text: "Jirafa"}, {text: "Cebra"}, {text: "Panda"}, {text: "Canguro"}, {text: "Pingüino"}, {text: "Águila"},
    {text: "Tiburón"}, {text: "Lobo"}, {text: "Oso Polar"}, {text: "Hipopótamo"}, {text: "Rinoceronte"}, {text: "Gorila"}, {text: "Camello"}, {text: "Leopardo"}, {text: "Tortuga"}, {text: "Cocodrilo"},
    {text: "Serpiente"}, {text: "Búho"}, {text: "Zorro"}, {text: "Ardilla"}, {text: "Conejo"}, {text: "Caballo"}, {text: "Vaca"}, {text: "Cerdo"}, {text: "Oveja"}, {text: "Gallina"},
    {text: "Pato"}, {text: "Cisne"}, {text: "Flamenco"}, {text: "Pavo Real"}, {text: "Murciélago"}, {text: "Rana"}, {text: "Mariposa"}, {text: "Abeja"}, {text: "Hormiga"}, {text: "Araña"},
    {text: "Escorpión"}, {text: "Calamar"}, {text: "Pulpo"}, {text: "Ballena"}, {text: "Foca"}, {text: "Morsa"}, {text: "Nutria"}, {text: "Castor"}, {text: "Mapache"}, {text: "Hiena"},
    {text: "Guepardo"}, {text: "Búfalo"}, {text: "Alce"}, {text: "Venado"}, {text: "Chimpancé"}, {text: "Orangután"}, {text: "Koala"}, {text: "Ornitorrinco"}, {text: "Tucán"}, {text: "Lince"},
    {text: "Suricata"}, {text: "Armadillo"}, {text: "Perezoso"}, {text: "Camaleón"}, {text: "Iguana"}, {text: "Medusa"}, {text: "Mantarraya"}, {text: "Caballito de Mar"}, {text: "Estrella de Mar"}, {text: "Hámster"},
    {text: "Cobaya"}, {text: "Hurón"}, {text: "Puma"}, {text: "Jaguar"}, {text: "Lemur"}, {text: "Topo"}, {text: "Erizo"}, {text: "Bisonte"}, {text: "Ñu"}, {text: "Cacatúa"},
    {text: "Pájaro Carpintero"}, {text: "Pelícano"}, {text: "Grillo"}, {text: "Saltamontes"}, {text: "Mariquita"}, {text: "Avispa"}, {text: "Libélula"}, {text: "Caracol"}, {text: "Babosa"}, {text: "Lombriz"},
    {text: "Alacrán"}, {text: "Ciempiés"}, {text: "Pez Espada"}, {text: "Pez Globo"}, {text: "Salmón"}, {text: "Trucha"}, {text: "Atún"}, {text: "Bacalao"}, {text: "Anguila"}, {text: "Narval"},
    {text: "Manatí"}, {text: "Pez Payaso"}, {text: "Cangrejo"}, {text: "Langosta"}, {text: "Camarón"}, {text: "Anémona"}, {text: "Coral"}, {text: "Erizo de Mar"}, {text: "Pepino de Mar"}, {text: "Cigüeña"},
    {text: "Buitre"}, {text: "Halcón"}, {text: "Cuervo"}, {text: "Paloma"}, {text: "Gorrión"}, {text: "Canario"}, {text: "Colibrí"}, {text: "Pájaro Lira"}, {text: "Quetzal"}, {text: "Cóndor"}
  ],
  [Category.COUNTRIES]: [
    {text: "Afganistán"}, {text: "Albania"}, {text: "Alemania"}, {text: "Andorra"}, {text: "Angola"}, {text: "Antigua y Barbuda"}, {text: "Arabia Saudita"}, {text: "Argelia"}, {text: "Argentina"}, {text: "Armenia"},
    {text: "Australia"}, {text: "Austria"}, {text: "Azerbaiyán"}, {text: "Bahamas"}, {text: "Bangladés"}, {text: "Barbados"}, {text: "Baréin"}, {text: "Bélgica"}, {text: "Belice"}, {text: "Benín"},
    {text: "Bielorrusia"}, {text: "Birmania"}, {text: "Bolivia"}, {text: "Bosnia y Herzegovina"}, {text: "Botsuana"}, {text: "Brasil"}, {text: "Brunéi"}, {text: "Bulgaria"}, {text: "Burkina Faso"}, {text: "Burundi"},
    {text: "Bután"}, {text: "Cabo Verde"}, {text: "Camboya"}, {text: "Camerún"}, {text: "Canadá"}, {text: "Catar"}, {text: "Chad"}, {text: "Chile"}, {text: "China"}, {text: "Chipre"},
    {text: "Ciudad del Vaticano"}, {text: "Colombia"}, {text: "Comoras"}, {text: "Corea del Norte"}, {text: "Corea del Sur"}, {text: "Costa de Marfil"}, {text: "Costa Rica"}, {text: "Croacia"}, {text: "Cuba"}, {text: "Dinamarca"},
    {text: "Dominica"}, {text: "Ecuador"}, {text: "Egipto"}, {text: "El Salvador"}, {text: "Emiratos Árabes Unidos"}, {text: "Eritrea"}, {text: "Eslovaquia"}, {text: "Eslovenia"}, {text: "España"}, {text: "Estados Unidos"},
    {text: "Estonia"}, {text: "Etiopía"}, {text: "Filipinas"}, {text: "Finlandia"}, {text: "Fiyi"}, {text: "Francia"}, {text: "Gabón"}, {text: "Gambia"}, {text: "Georgia"}, {text: "Ghana"},
    {text: "Granada"}, {text: "Grecia"}, {text: "Guatemala"}, {text: "Guinea"}, {text: "Guinea Ecuatorial"}, {text: "Guinea-Bisáu"}, {text: "Guyana"}, {text: "Haití"}, {text: "Honduras"}, {text: "Hungría"},
    {text: "India"}, {text: "Indonesia"}, {text: "Irak"}, {text: "Irán"}, {text: "Irlanda"}, {text: "Islandia"}, {text: "Islas Marshall"}, {text: "Islas Salomón"}, {text: "Israel"}, {text: "Italia"},
    {text: "Jamaica"}, {text: "Japón"}, {text: "Jordania"}, {text: "Kazajistán"}, {text: "Kenia"}, {text: "Kirguistán"}, {text: "Kiribati"}, {text: "Kuwait"}, {text: "Laos"}, {text: "Lesoto"},
    {text: "Letonia"}, {text: "Líbano"}, {text: "Liberia"}, {text: "Libia"}, {text: "Liechtenstein"}, {text: "Lituania"}, {text: "Luxemburgo"}, {text: "Macedonia del Norte"}, {text: "Madagascar"}, {text: "Malasia"},
    {text: "Malaui"}, {text: "Maldivas"}, {text: "Malí"}, {text: "Malta"}, {text: "Marruecos"}, {text: "Mauricio"}, {text: "Mauritania"}, {text: "México"}, {text: "Micronesia"}, {text: "Moldavia"},
    {text: "Mónaco"}, {text: "Mongolia"}, {text: "Montenegro"}, {text: "Mozambique"}, {text: "Namibia"}, {text: "Nauru"}, {text: "Nepal"}, {text: "Nicaragua"}, {text: "Níger"}, {text: "Nigeria"},
    {text: "Noruega"}, {text: "Nueva Zelanda"}, {text: "Omán"}, {text: "Países Bajos"}, {text: "Pakistán"}, {text: "Palaos"}, {text: "Panamá"}, {text: "Papúa Nueva Guinea"}, {text: "Paraguay"}, {text: "Perú"},
    {text: "Polonia"}, {text: "Portugal"}, {text: "Reino Unido"}, {text: "República Centroafricana"}, {text: "República Checa"}, {text: "República del Congo"}, {text: "República Democrática del Congo"}, {text: "República Dominicana"}, {text: "Ruanda"}, {text: "Rumania"},
    {text: "Rusia"}, {text: "Samoa"}, {text: "San Cristóbal y Nieves"}, {text: "San Marino"}, {text: "San Vicente y las Granadinas"}, {text: "Santa Lucía"}, {text: "Santo Tomé y Príncipe"}, {text: "Senegal"}, {text: "Serbia"}, {text: "Seychelles"},
    {text: "Sierra Leona"}, {text: "Singapur"}, {text: "Siria"}, {text: "Somalia"}, {text: "Sri Lanka"}, {text: "Suazilandia"}, {text: "Sudáfrica"}, {text: "Sudán"}, {text: "Sudán del Sur"}, {text: "Suecia"},
    {text: "Suiza"}, {text: "Surinam"}, {text: "Tailandia"}, {text: "Tanzania"}, {text: "Tayikistán"}, {text: "Timor Oriental"}, {text: "Togo"}, {text: "Tonga"}, {text: "Trinidad y Tobago"}, {text: "Túnez"},
    {text: "Turkmenistán"}, {text: "Turquía"}, {text: "Tuvalu"}, {text: "Ucrania"}, {text: "Uganda"}, {text: "Uruguay"}, {text: "Uzbekistán"}, {text: "Vanuatu"}, {text: "Venezuela"}, {text: "Vietnam"},
    {text: "Yemen"}, {text: "Yibuti"}, {text: "Zambia"}, {text: "Zimbabue"}
  ],
  [Category.BRANDS]: [
    {text: "Nike"}, {text: "Adidas"}, {text: "Apple"}, {text: "Samsung"}, {text: "Coca-Cola"}, {text: "Pepsi"}, {text: "McDonald's"}, {text: "Burger King"}, {text: "Starbucks"}, {text: "Disney"},
    {text: "Netflix"}, {text: "Amazon"}, {text: "Google"}, {text: "Microsoft"}, {text: "Facebook"}, {text: "Instagram"}, {text: "Tesla"}, {text: "Toyota"}, {text: "Ferrari"}, {text: "Rolex"},
    {text: "Gucci"}, {text: "Louis Vuitton"}, {text: "Chanel"}, {text: "Zara"}, {text: "H&M"}, {text: "IKEA"}, {text: "Lego"}, {text: "Nintendo"}, {text: "PlayStation"}, {text: "Xbox"},
    {text: "Red Bull"}, {text: "Monster Energy"}, {text: "Puma"}, {text: "Under Armour"}, {text: "Intel"}, {text: "Sony"}, {text: "Panasonic"}, {text: "Canon"}, {text: "Nikon"}, {text: "Ford"},
    {text: "BMW"}, {text: "Mercedes-Benz"}, {text: "Audi"}, {text: "Volkswagen"}, {text: "Visa"}, {text: "Mastercard"}, {text: "PayPal"}, {text: "Airbnb"}, {text: "Uber"}, {text: "Spotify"},
    {text: "YouTube"}, {text: "TikTok"}, {text: "Dove"}, {text: "L'Oréal"}, {text: "Colgate"}, {text: "Pampers"}, {text: "Nesquik"}, {text: "Nutella"}, {text: "Pringles"}, {text: "Oreo"},
    {text: "Twitter"}, {text: "LinkedIn"}, {text: "Zoom"}, {text: "Adobe"}, {text: "Oracle"}, {text: "Dell"}, {text: "HP"}, {text: "Lenovo"}, {text: "Xiaomi"}, {text: "Huawei"},
    {text: "Subway"}, {text: "KFC"}, {text: "Pizza Hut"}, {text: "Domino's"}, {text: "Nescafé"}, {text: "Heineken"}, {text: "Budweiser"}, {text: "Corona"}, {text: "Gillette"}, {text: "Pantene"},
    {text: "Nivea"}, {text: "Skype"}, {text: "Snapchat"}, {text: "Telegram"}, {text: "WhatsApp"}, {text: "Lacoste"}, {text: "Vans"}, {text: "Converse"}, {text: "Supreme"}, {text: "Balenciaga"},
    {text: "Prada"}, {text: "Hermès"}, {text: "Burberry"}, {text: "Cartier"}, {text: "Omega"}, {text: "Casio"}, {text: "Seiko"}, {text: "Ray-Ban"}, {text: "Oakley"}, {text: "Gap"}
  ],
  [Category.MIMICRY]: [
    {text: "Correr"}, {text: "Saltar"}, {text: "Nadar"}, {text: "Cocinar"}, {text: "Bailar"}, {text: "Cantar"}, {text: "Llorar"}, {text: "Reír"}, {text: "Dormir"}, {text: "Comer"},
    {text: "Beber"}, {text: "Escribir"}, {text: "Leer"}, {text: "Pintar"}, {text: "Dibujar"}, {text: "Conducir"}, {text: "Volar"}, {text: "Trepar"}, {text: "Gatear"}, {text: "Peinarse"},
    {text: "Afeitarse"}, {text: "Cepillarse"}, {text: "Tocar Guitarra"}, {text: "Jugar Fútbol"}, {text: "Boxear"}, {text: "Esquiar"}, {text: "Pescar"}, {text: "Tejer"}, {text: "Cosar"}, {text: "Planchar"},
    {text: "Lavar Ropa"}, {text: "Limpiar"}, {text: "Regar"}, {text: "Martillar"}, {text: "Serrar"}, {text: "Excavar"}, {text: "Abrazar"}, {text: "Besar"}, {text: "Saludar"}, {text: "Despedirse"},
    {text: "Aplaudir"}, {text: "Señalar"}, {text: "Escuchar"}, {text: "Mirar"}, {text: "Oler"}, {text: "Saborear"}, {text: "Tocar"}, {text: "Empujar"}, {text: "Tirar"}, {text: "Levantar"},
    {text: "Meditar"}, {text: "Rezar"}, {text: "Silbar"}, {text: "Chasquear"}, {text: "Bostezar"}, {text: "Estornudar"}, {text: "Toser"}, {text: "Rascarse"}, {text: "Esconderse"}, {text: "Equilibrarse"},
    {text: "Barrer"}, {text: "Trapear"}, {text: "Picar"}, {text: "Mezclar"}, {text: "Servir"}, {text: "Comprar"}, {text: "Pagar"}, {text: "Vender"}, {text: "Trabajar"}, {text: "Estudiar"},
    {text: "Viajar"}, {text: "Acampar"}, {text: "Gritar"}, {text: "Susurrar"}, {text: "Abofetear"}, {text: "Caminar"}, {text: "Trotar"}, {text: "Bucear"}, {text: "Remar"}, {text: "Columpiarse"}
  ],
  [Category.GEOGRAPHY]: [
    {text: "Torre Eiffel"}, {text: "Machu Picchu"}, {text: "Gran Muralla China"}, {text: "Estatua de la Libertad"}, {text: "Coliseo Romano"}, {text: "Taj Mahal"}, {text: "Pirámides de Giza"}, {text: "Petra"}, {text: "Cristo Redentor"}, {text: "Acrópolis"},
    {text: "Alhambra"}, {text: "Gran Cañón"}, {text: "Monte Everest"}, {text: "Cataratas del Niágara"}, {text: "Ópera de Sídney"}, {text: "Big Ben"}, {text: "Stonehenge"}, {text: "Sagrada Familia"}, {text: "Burj Khalifa"}, {text: "Monte Fuji"},
    {text: "Chichén Itzá"}, {text: "Angkor Wat"}, {text: "Salar de Uyuni"}, {text: "Cataratas del Iguazú"}, {text: "Islas Galápagos"}, {text: "Ciudad Prohibida"}, {text: "Kremlin"}, {text: "Castillo Neuschwanstein"}, {text: "Table Mountain"}, {text: "Gran Barrera Coral"},
    {text: "Yellowstone"}, {text: "Yosemite"}, {text: "Glaciar Perito Moreno"}, {text: "Lago Ness"}, {text: "Mont Saint-Michel"}, {text: "Fushimi Inari"}, {text: "Plaza San Pedro"}, {text: "Mezquita Azul"}, {text: "Notre Dame"}, {text: "Burj Al Arab"},
    {text: "Isla de Pascua"}, {text: "Capadocia"}, {text: "Mar Muerto"}, {text: "Torres del Paine"}, {text: "Parque Kruger"}, {text: "Cañón Antílope"}, {text: "Meteora"}, {text: "Pamukkale"}, {text: "Cinque Terre"}, {text: "Ha Long Bay"},
    {text: "Monte Kilimanjaro"}, {text: "Canal de Panamá"}, {text: "Golden Gate"}, {text: "Cataratas Victoria"}, {text: "Palacio de Versalles"}, {text: "Museo del Louvre"}, {text: "Amazonas"}, {text: "Sahara"}, {text: "Antártida"}, {text: "Alpes"},
    {text: "Desierto de Atacama"}, {text: "Patagonia"}, {text: "Tierra del Fuego"}, {text: "Siberia"}, {text: "Bahía de Ha-Long"}, {text: "Santorini"}, {text: "Dubrovnik"}, {text: "Venecia"}, {text: "Florencia"}, {text: "Praga"},
    {text: "Barcelona"}, {text: "Río de Janeiro"}, {text: "Hollywood"}, {text: "Cuzco"}, {text: "El Cairo"}, {text: "Marrakech"}, {text: "Estambul"}, {text: "Kioto"}, {text: "Seúl"}, {text: "Ámsterdam"},
    {text: "Berlín"}, {text: "Londres"}, {text: "París"}, {text: "Roma"}, {text: "Madrid"}, {text: "Lisboa"}, {text: "Viena"}, {text: "Moscú"}, {text: "Nueva York"}, {text: "Los Ángeles"},
    {text: "Las Vegas"}, {text: "Chicago"}, {text: "Miami"}, {text: "Toronto"}, {text: "Ciudad de México"}, {text: "Bogotá"}, {text: "Lima"}, {text: "Santiago"}, {text: "Buenos Aires"}, {text: "Sao Paulo"},
    {text: "Hong Kong"}, {text: "Singapur"}, {text: "Bangkok"}, {text: "Dubái"}, {text: "Atenas"}, {text: "Triángulo de las Bermudas"}, {text: "Jerusalén"}, {text: "Río Nilo"}, {text: "Río Amazonas"}, {text: "Río Mississippi"},
    {text: "Río Danubio"}, {text: "Río Ganges"}, {text: "Mar Mediterráneo"}, {text: "Océano Pacífico"}, {text: "Océano Atlántico"}, {text: "Océano Índico"}, {text: "Lago Titicaca"}, {text: "Lago Victoria"}, {text: "Monte Sinaí"}, {text: "Montes Urales"},
    {text: "Himalaya"}, {text: "Cordillera de los Andes"}, {text: "Selva Negra"}, {text: "Círculo Polar Ártico"}, {text: "Trópico de Cáncer"}, {text: "Línea del Ecuador"}, {text: "Polo Sur"}, {text: "Polo Norte"}, {text: "Cataratas del Ángel"}, {text: "Dead Valley"}
  ],
  [Category.MUSIC]: [
    {text: "Bohemian Rhapsody", subtext: "Queen"}, {text: "Imagine", subtext: "John Lennon"}, {text: "Thriller", subtext: "Michael Jackson"}, {text: "Wannabe", subtext: "Spice Girls"}, {text: "Hey Jude", subtext: "The Beatles"},
    {text: "Billie Jean", subtext: "Michael Jackson"}, {text: "Satisfaction", subtext: "Rolling Stones"}, {text: "Purple Rain", subtext: "Prince"}, {text: "One", subtext: "U2"}, {text: "Respect", subtext: "Aretha Franklin"},
    {text: "Stairway to Heaven", subtext: "Led Zeppelin"}, {text: "Hotel California", subtext: "Eagles"}, {text: "Born to Run", subtext: "Bruce Springsteen"}, {text: "Good Vibrations", subtext: "Beach Boys"}, {text: "Macarena", subtext: "Los del Río"},
    {text: "Losing My Religion", subtext: "R.E.M."}, {text: "Hallelujah", subtext: "Jeff Buckley"}, {text: "Let It Be", subtext: "The Beatles"}, {text: "Yesterday", subtext: "The Beatles"}, {text: "Piano Man", subtext: "Billy Joel"},
    {text: "Sweet Child O' Mine", subtext: "Guns N' Roses"}, {text: "Dream On", subtext: "Aerosmith"}, {text: "Heroes", subtext: "David Bowie"}, {text: "Rolling in the Deep", subtext: "Adele"}, {text: "Blinding Lights", subtext: "The Weeknd"},
    {text: "Despacito", subtext: "Luis Fonsi"}, {text: "Shape of You", subtext: "Ed Sheeran"}, {text: "Smooth", subtext: "Santana"}, {text: "My Heart Will Go On", subtext: "Celine Dion"}, {text: "Livin' on a Prayer", subtext: "Bon Jovi"},
    {text: "Stayin' Alive", subtext: "Bee Gees"}, {text: "Creep", subtext: "Radiohead"}, {text: "Seven Nation Army", subtext: "The White Stripes"}, {text: "Toxic", subtext: "Britney Spears"}, {text: "Rehab", subtext: "Amy Winehouse"},
    {text: "Poker Face", subtext: "Lady Gaga"}, {text: "Single Ladies", subtext: "Beyoncé"}, {text: "Umbrella", subtext: "Rihanna"}, {text: "Gangnam Style", subtext: "PSY"}, {text: "Get Lucky", subtext: "Daft Punk"},
    {text: "Uptown Funk", subtext: "Bruno Mars"}, {text: "Happy", subtext: "Pharrell Williams"}, {text: "Take On Me", subtext: "A-ha"}, {text: "Eye of the Tiger", subtext: "Survivor"}, {text: "Africa", subtext: "Toto"},
    {text: "Don't Stop Believin'", subtext: "Journey"}, {text: "Another One Bites the Dust", subtext: "Queen"}, {text: "Sweet Dreams", subtext: "Eurythmics"}, {text: "Like a Virgin", subtext: "Madonna"}, {text: "Vogue", subtext: "Madonna"},
    {text: "Shape of My Heart", subtext: "Sting"}, {text: "Englishman in New York", subtext: "Sting"}, {text: "The Scientist", subtext: "Coldplay"}, {text: "Fix You", subtext: "Coldplay"}, {text: "Starlight", subtext: "Muse"},
    {text: "Lose Yourself", subtext: "Eminem"}, {text: "Without Me", subtext: "Eminem"}, {text: "Stronger", subtext: "Kanye West"}, {text: "Empire State of Mind", subtext: "Jay-Z"}, {text: "Bad Romance", subtext: "Lady Gaga"},
    {text: "In the End", subtext: "Linkin Park"}, {text: "Numb", subtext: "Linkin Park"}, {text: "Closer", subtext: "The Chainsmokers"}, {text: "Perfect", subtext: "Ed Sheeran"}, {text: "Radioactive", subtext: "Imagine Dragons"},
    {text: "Wake Me Up", subtext: "Avicii"}, {text: "Sugar", subtext: "Maroon 5"}, {text: "Bad Guy", subtext: "Billie Eilish"}, {text: "Someone Like You", subtext: "Adele"}, {text: "Halo", subtext: "Beyoncé"},
    {text: "Y.M.C.A", subtext: "Village People"}, {text: "Viva la Vida", subtext: "Coldplay"}, {text: "Under the Bridge", subtext: "RHCP"}, {text: "Californication", subtext: "RHCP"}, {text: "Superstition", subtext: "Stevie Wonder"},
    {text: "Smooth Operator", subtext: "Sade"}, {text: "Every Breath You Take", subtext: "The Police"}, {text: "Roxanne", subtext: "The Police"}, {text: "Message in a Bottle", subtext: "The Police"}, {text: "Dreamer", subtext: "Ozzy Osbourne"},
    {text: "Dancing Queen", subtext: "ABBA"}, {text: "Mamma Mia", subtext: "ABBA"}, {text: "Beat It", subtext: "Michael Jackson"}, {text: "Like a Rolling Stone", subtext: "Bob Dylan"}, {text: "Rocket Man", subtext: "Elton John"},
    {text: "Tiny Dancer", subtext: "Elton John"}, {text: "Space Oddity", subtext: "David Bowie"}, {text: "Under Pressure", subtext: "Queen & Bowie"}, {text: "Paradise City", subtext: "Guns N' Roses"}, {text: "Welcome to the Jungle", subtext: "Guns N' Roses"},
    {text: "Thunderstruck", subtext: "AC/DC"}, {text: "Back in Black", subtext: "AC/DC"}, {text: "Highway to Hell", subtext: "AC/DC"}, {text: "Smells Like Teen Spirit", subtext: "Nirvana"}, {text: "Lithium", subtext: "Nirvana"},
    {text: "Black Hole Sun", subtext: "Soundgarden"}, {text: "Jeremy", subtext: "Pearl Jam"}, {text: "Even Flow", subtext: "Pearl Jam"}, {text: "Heart-Shaped Box", subtext: "Nirvana"}, {text: "Come as You Are", subtext: "Nirvana"},
    {text: "Wonderwall", subtext: "Oasis"}, {text: "Don't Look Back in Anger", subtext: "Oasis"}, {text: "Bitter Sweet Symphony", subtext: "The Verve"}, {text: "Song 2", subtext: "Blur"}, {text: "Girls & Boys", subtext: "Blur"},
    {text: "Karma Police", subtext: "Radiohead"}, {text: "Paranoid Android", subtext: "Radiohead"}, {text: "No Surprises", subtext: "Radiohead"}, {text: "Clocks", subtext: "Coldplay"}, {text: "Yellow", subtext: "Coldplay"},
    {text: "La Camisa Negra", subtext: "Juanes"}, {text: "Mr. Brightside", subtext: "The Killers"}, {text: "Somebody Told Me", subtext: "The Killers"}, {text: "Human", subtext: "The Killers"}, {text: "Last Nite", subtext: "The Strokes"},
    {text: "Libre Soy", subtext: "Frozen"}, {text: "Take Me Out", subtext: "Franz Ferdinand"}, {text: "Do I Wanna Know?", subtext: "Arctic Monkeys"}, {text: "Fluorescent Adolescent", subtext: "Arctic Monkeys"}, {text: "R U Mine?", subtext: "Arctic Monkeys"},
    {text: "Hips Don't Lie", subtext: "Shakira"}, {text: "Waka Waka", subtext: "Shakira"}, {text: "La Tortura", subtext: "Shakira"}, {text: "Livin' la Vida Loca", subtext: "Ricky Martin"}, {text: "Gasolina", subtext: "Daddy Yankee"}
  ],
  [Category.ART]: [
    {text: "La Gioconda", subtext: "Leonardo da Vinci"}, {text: "El Grito", subtext: "Edvard Munch"}, {text: "La noche estrellada", subtext: "Van Gogh"}, {text: "Guernica", subtext: "Picasso"}, {text: "Las Meninas", subtext: "Velázquez"},
    {text: "El jardín de las delicias", subtext: "El Bosco"}, {text: "La última cena", subtext: "Da Vinci"}, {text: "La creación de Adán", subtext: "Miguel Ángel"}, {text: "La joven de la perla", subtext: "Vermeer"}, {text: "El nacimiento de Venus", subtext: "Botticelli"},
    {text: "La persistencia de la memoria", subtext: "Dalí"}, {text: "Los fusilamientos", subtext: "Goya"}, {text: "La libertad guiando al pueblo", subtext: "Delacroix"}, {text: "El beso", subtext: "Gustav Klimt"}, {text: "La balsa de la Medusa", subtext: "Géricault"},
    {text: "Saturno devorando a su hijo", subtext: "Goya"}, {text: "El caminante", subtext: "Friedrich"}, {text: "Terraza de café", subtext: "Van Gogh"}, {text: "Autorretrato", subtext: "Frida Kahlo"}, {text: "Las dos Fridas", subtext: "Frida Kahlo"},
    {text: "El hijo del hombre", subtext: "Magritte"}, {text: "La traición de las imágenes", subtext: "Magritte"}, {text: "El David", subtext: "Miguel Ángel"}, {text: "La Piedad", subtext: "Miguel Ángel"}, {text: "La Venus de Milo", subtext: "Anónimo"},
    {text: "Victoria de Samotracia", subtext: "Anónimo"}, {text: "El Pensador", subtext: "Rodin"}, {text: "El rapto de Proserpina", subtext: "Bernini"}, {text: "Éxtasis de Santa Teresa", subtext: "Bernini"}, {text: "La escuela de Atenas", subtext: "Rafael"},
    {text: "La ronda de noche", subtext: "Rembrandt"}, {text: "American Gothic", subtext: "Grant Wood"}, {text: "Nighthawks", subtext: "Edward Hopper"}, {text: "La gran ola", subtext: "Hokusai"}, {text: "Mujer ante el espejo", subtext: "Picasso"},
    {text: "Olimpia", subtext: "Manet"}, {text: "Impresión sol naciente", subtext: "Monet"}, {text: "Lirios", subtext: "Van Gogh"}, {text: "Campo de trigo", subtext: "Van Gogh"}, {text: "Girasoles", subtext: "Van Gogh"},
    {text: "El coloso", subtext: "Goya"}, {text: "Maja desnuda", subtext: "Goya"}, {text: "Maja vestida", subtext: "Goya"}, {text: "La anunciación", subtext: "Fra Angelico"}, {text: "Dormitorio en Arles", subtext: "Van Gogh"},
    {text: "El bautismo de Cristo", subtext: "Verrocchio"}, {text: "Hombre de Vitruvio", subtext: "Da Vinci"}, {text: "Dama con armiño", subtext: "Da Vinci"}, {text: "El juicio final", subtext: "Miguel Ángel"}, {text: "Moisés", subtext: "Miguel Ángel"},
    {text: "Crucifixión", subtext: "Dalí"}, {text: "Sueño causado por abeja", subtext: "Dalí"}, {text: "Cisnes que reflejan elefantes", subtext: "Dalí"}, {text: "La bacanal", subtext: "Tiziano"}, {text: "Amor sacro y profano", subtext: "Tiziano"},
    {text: "Venus de Urbino", subtext: "Tiziano"}, {text: "Judith decapitandol", subtext: "Artemisia"}, {text: "Baco", subtext: "Caravaggio"}, {text: "Medusa", subtext: "Caravaggio"}, {text: "Narciso", subtext: "Caravaggio"},
    {text: "Cabeza de Medusa", subtext: "Bernini"}, {text: "Apolo y Dafne", subtext: "Bernini"}, {text: "El entierro del Conde de Orgaz", subtext: "El Greco"}, {text: "La vista de Toledo", subtext: "El Greco"}, {text: "El caballero de la mano en el pecho", subtext: "El Greco"},
    {text: "La mujer de azul", subtext: "Picasso"}, {text: "El viejo guitarrista", subtext: "Picasso"}, {text: "Muchacha en la ventana", subtext: "Dalí"}, {text: "El almuerzo de los remeros", subtext: "Renoir"}, {text: "Baile en el Moulin de la Galette", subtext: "Renoir"},
    {text: "La clase de danza", subtext: "Degas"}, {text: "El ajenjo", subtext: "Degas"}, {text: "Un domingo de verano", subtext: "Seurat"}, {text: "La muerte de Marat", subtext: "David"}, {text: "La coronación de Napoleón", subtext: "David"},
    {text: "El columpio", subtext: "Fragonard"}, {text: "La lechera", subtext: "Vermeer"}, {text: "El taller del pintor", subtext: "Courbet"}, {text: "Entierro en Ornans", subtext: "Courbet"}, {text: "Latas de Sopa Campbell", subtext: "Andy Warhol"}
  ],
  [Category.CHARACTERS]: [
    {text: "Batman"}, {text: "Superman"}, {text: "Spider-Man"}, {text: "Harry Potter"}, {text: "Willy Wonka"}, {text: "James Bond"}, {text: "Darth Vader"}, {text: "Luke Skywalker"}, {text: "Frodo Bolsón"}, {text: "Gandalf"},
    {text: "Mickey Mouse"}, {text: "Bugs Bunny"}, {text: "Homer Simpson"}, {text: "Mario Bros"}, {text: "Link"}, {text: "Pikachu"}, {text: "Iron Man"}, {text: "Wonder Woman"}, {text: "Capitán América"}, {text: "The Joker"},
    {text: "Deadpool"}, {text: "Wolverine"}, {text: "Geralt de Rivia"}, {text: "Lara Croft"}, {text: "Nathan Drake"}, {text: "Solid Snake"}, {text: "Master Chief"}, {text: "Kratos"}, {text: "Ellie"}, {text: "Katniss Everdeen"},
    {text: "Elsa"}, {text: "Woody"}, {text: "Buzz Lightyear"}, {text: "Shrek"}, {text: "Donkey"}, {text: "Simba"}, {text: "Winnie Pooh"}, {text: "Peter Pan"}, {text: "Alicia en el País"}, {text: "Indiana Jones"},
    {text: "Han Solo"}, {text: "Jack Sparrow"}, {text: "Tony Montana"}, {text: "Vito Corleone"}, {text: "Hannibal Lecter"}, {text: "Walter White"}, {text: "Rick Grimes"}, {text: "Jon Snow"}, {text: "Daenerys Targaryen"}, {text: "Tyrion Lannister"},
    {text: "Goku"}, {text: "Naruto"}, {text: "Monkey D. Luffy"}, {text: "Ichigo Kurosaki"}, {text: "Sailor Moon"}, {text: "Ash Ketchum"}, {text: "Optimus Prime"}, {text: "Megatron"}, {text: "Bumblebee"}, {text: "Seiya de Pegaso"},
    {text: "Ryu"}, {text: "Ken Masters"}, {text: "Chun-Li"}, {text: "Cloud Strife"}, {text: "Sephiroth"}, {text: "Sonic the Hedgehog"}, {text: "Mega Man"}, {text: "Pac-Man"}, {text: "Donkey Kong"}, {text: "Bowser"},
    {text: "Princess Peach"}, {text: "Yoshi"}, {text: "Snoopy"}, {text: "Garfield"}, {text: "Popeye"}, {text: "Hello Kitty"}, {text: "Barbie"}, {text: "Ken"}, {text: "He-Man"}, {text: "Skeletor"},
    {text: "Sherlock Holmes"}, {text: "Tarzán"}, {text: "Drácula"}, {text: "Frankenstein"}, {text: "El Zorro"}, {text: "Robin Hood"}, {text: "Pinocho"}, {text: "Cenicienta"}, {text: "Blancanieves"}, {text: "Mulán"},
    {text: "Hulk"}, {text: "Thor"}, {text: "Black Widow"}, {text: "Black Panther"}, {text: "Doctor Strange"}, {text: "Thanos"}, {text: "Star-Lord"}, {text: "Groot"}, {text: "Rocket Raccoon"}, {text: "Aquaman"},
    {text: "Flash"}, {text: "Green Lantern"}, {text: "Harley Quinn"}, {text: "Catwoman"}, {text: "Lex Luthor"}, {text: "Bane"}, {text: "E.T."}, {text: "Terminator"}, {text: "Neo"}, {text: "Morfeo"},
    {text: "Yoda"}, {text: "Obi-Wan Kenobi"}, {text: "Chewbacca"}, {text: "R2-D2"}, {text: "C-3PO"}, {text: "Hagrid"}, {text: "Dumbledore"}, {text: "Voldemort"}, {text: "Legolas"}, {text: "Gimli"}
  ],
  [Category.FAMOUS_PEOPLE]: [
    {text: "Albert Einstein"}, {text: "Isaac Newton"}, {text: "Leonardo da Vinci"}, {text: "Marie Curie"}, {text: "Charles Darwin"}, {text: "Nikola Tesla"}, {text: "Stephen Hawking"}, {text: "Mahatma Gandhi"}, {text: "Nelson Mandela"}, {text: "Martin Luther King"},
    {text: "Abraham Lincoln"}, {text: "George Washington"}, {text: "Winston Churchill"}, {text: "Napoleón Bonaparte"}, {text: "Julio César"}, {text: "Alejandro Magno"}, {text: "Cleopatra"}, {text: "Isabel II"}, {text: "Juana de Arco"}, {text: "Cristóbal Colón"},
    {text: "Marco Polo"}, {text: "Fernando de Magallanes"}, {text: "Neil Armstrong"}, {text: "Steve Jobs"}, {text: "Bill Gates"}, {text: "Mark Zuckerberg"}, {text: "Elon Musk"}, {text: "Walt Disney"}, {text: "Steven Spielberg"}, {text: "Iósif Stalin"},
    {text: "Charlie Chaplin"}, {text: "Marilyn Monroe"}, {text: "Elvis Presley"}, {text: "Michael Jackson"}, {text: "John Lennon"}, {text: "Madonna"}, {text: "Bob Dylan"}, {text: "Muhammad Ali"}, {text: "Pelé"}, {text: "Diego Maradona"},
    {text: "Michael Jordan"}, {text: "Roger Federer"}, {text: "Usain Bolt"}, {text: "Pablo Picasso"}, {text: "Vincent Van Gogh"}, {text: "Salvador Dalí"}, {text: "William Shakespeare"}, {text: "Miguel de Cervantes"}, {text: "Dante Alighieri"}, {text: "Sócrates"},
    {text: "Platón"}, {text: "Aristóteles"}, {text: "Confucio"}, {text: "Buda"}, {text: "Jesucristo"}, {text: "Mahoma"}, {text: "Moisés"}, {text: "Friedrich Nietzsche"}, {text: "Sigmund Freud"}, {text: "Karl Marx"},
    {text: "Galileo Galilei"}, {text: "Nicolás Copérnico"}, {text: "Johannes Kepler"}, {text: "Thomas Edison"}, {text: "Alexander Graham Bell"}, {text: "Hermanos Wright"}, {text: "Henry Ford"}, {text: "Coco Chanel"}, {text: "Diana de Gales"}, {text: "Madre Teresa"},
    {text: "Dalai Lama"}, {text: "Che Guevara"}, {text: "Fidel Castro"}, {text: "Mao Zedong"}, {text: "Adolf Hitler"}, {text: "Benito Mussolini"}, {text: "Franklin D. Roosevelt"}, {text: "John F. Kennedy"}, {text: "Barack Obama"}, {text: "Donald Trump"},
    {text: "Mijaíl Gorbachov"}, {text: "Vladimir Putin"}, {text: "Angela Merkel"}, {text: "Emmanuel Macron"}, {text: "Papa Francisco"}, {text: "Lionel Messi"}, {text: "Gaudí"}, {text: "Beethoven"}, {text: "Mozart"}, {text: "Bach"},
    {text: "Freddy Mercury"}, {text: "Kurt Cobain"}, {text: "David Bowie"}, {text: "Prince"}, {text: "Whitney Houston"}, {text: "Adele"}, {text: "Taylor Swift"}, {text: "Beyoncé"}, {text: "Rihanna"}, {text: "Lady Gaga"}
  ],
  [Category.BOOKS]: [
    {text: "Don Quijote"}, {text: "Cien años de soledad"}, {text: "El Principito"}, {text: "1984"}, {text: "Un mundo feliz"}, {text: "Fahrenheit 451"}, {text: "Orgullo y Prejuicio"}, {text: "Rayuela"}, {text: "La Odisea"}, {text: "La Ilíada"},
    {text: "La Divina Comedia"}, {text: "Hamlet"}, {text: "Romeo y Julieta"}, {text: "El Gran Gatsby"}, {text: "Matar a un ruiseñor"}, {text: "Las uvas de la ira"}, {text: "Ulises"}, {text: "La metamorfosis"}, {text: "El proceso"}, {text: "Crimen y castigo"},
    {text: "Los hermanos Karamazov"}, {text: "Guerra y paz"}, {text: "Ana Karenina"}, {text: "Madame Bovary"}, {text: "Los miserables"}, {text: "Moby Dick"}, {text: "El viejo y el mar"}, {text: "Pedro Páramo"}, {text: "El Aleph"}, {text: "Ensayo sobre la ceguera"},
    {text: "Drácula"}, {text: "Frankenstein"}, {text: "Retrato de Dorian Gray"}, {text: "Jane Eyre"}, {text: "Cumbres borrascosas"}, {text: "Alicia en el país"}, {text: "Las mil y una noches"}, {text: "El nombre de la rosa"}, {text: "La montaña mágica"}, {text: "Siddhartha"},
    {text: "Crónicas marcianas"}, {text: "El Diario de Anna Frank"}, {text: "Huasipungo"}, {text: "Trilce"}, {text: "Tradiciones Peruanas"}, {text: "Los ríos profundos"}, {text: "Conversación en la Catedral"}, {text: "La tía Julia"}, {text: "Pantaleón y las visitadoras"}, {text: "El túnel"},
    {text: "Las Flores del Mal"}, {text: "Fausto"}, {text: "Decamerón"}, {text: "La República"}, {text: "Edipo Rey"}, {text: "Antígona"}, {text: "El Señor de los Anillos"}, {text: "El Hobbit"}, {text: "Harry Potter"}, {text: "Las Crónicas de Narnia"},
    {text: "Crónica de una muerte anunciada"}, {text: "El amor en los tiempos del cólera"}, {text: "La ciudad y los perros"}, {text: "La fiesta del chivo"}, {text: "La casa de los espíritus"}, {text: "Paula"}, {text: "20 poemas de amor"}, {text: "Residencia en la tierra"}, {text: "Canto General"}, {text: "Altazor"},
    {text: "Poeta en Nueva York"}, {text: "Bodas de sangre"}, {text: "La casa de Bernarda Alba"}, {text: "Yerma"}, {text: "El cantar de mio Cid"}, {text: "Libro de buen amor"}, {text: "La Celestina"}, {text: "Lazarillo de Tormes"}, {text: "Guzmán de Alfarache"}, {text: "El Criticón"},
    {text: "El código Da Vinci"}, {text: "Ángeles y demonios"}, {text: "El alquimista"}, {text: "Veronika decide morir"}, {text: "Los hombres que no amaban a las mujeres"}, {text: "El niño con el pijama de rayas"}, {text: "Sapiens"}, {text: "Homo Deus"}, {text: "La sombra del viento"}, {text: "El juego del ángel"},
    {text: "Marina"}, {text: "El extranjero"}, {text: "Del amor y otros demonios"}, {text: "Noticia de un secuestro"}, {text: "Relato de un náufrago"}, {text: "Vivir para contarla"}, {text: "El otoño del patriarca"}, {text: "Doce cuentos peregrinos"}, {text: "Ojos de perro azul"}, {text: "La hojarasca"},
    {text: "El coronel no tiene quien le escriba"}, {text: "La mala hora"}, {text: "Los funerales de la Mamá Grande"}, {text: "La increíble y triste historia"}, {text: "Cándida Eréndira"}, {text: "Entre cachos y medianoche"}, {text: "Tala"}, {text: "Desolación"}, {text: "Lagar"}, {text: "Ternura"},
    {text: "Ficciones"}, {text: "El informe de Brodie"}, {text: "El libro de arena"}, {text: "Siete noches"}, {text: "Atlas"}, {text: "Historia de la eternidad"}, {text: "Otras inquisiciones"}, {text: "El hacedor"}, {text: "Elogio de la sombra"}, {text: "La cifra"}
  ],
  [Category.POKEMON]: [
    {text: "Pikachu"}, {text: "Charizard"}, {text: "Bulbasaur"}, {text: "Squirtle"}, {text: "Mewtwo"}, {text: "Lucario"}, {text: "Gengar"}, {text: "Greninja"}, {text: "Eevee"}, {text: "Rayquaza"},
    {text: "Arceus"}, {text: "Dragonite"}, {text: "Gyarados"}, {text: "Arcanine"}, {text: "Lugia"}, {text: "Blastoise"}, {text: "Venusaur"}, {text: "Snorlax"}, {text: "Garchomp"}, {text: "Umbreon"},
    {text: "Sylveon"}, {text: "Gardevoir"}, {text: "Blaziken"}, {text: "Mudkip"}, {text: "Scizor"}, {text: "Tyranitar"}, {text: "Metagross"}, {text: "Salamence"}, {text: "Kyogre"}, {text: "Groudon"},
    {text: "Dialga"}, {text: "Palkia"}, {text: "Giratina"}, {text: "Darkrai"}, {text: "Shaymin"}, {text: "Victini"}, {text: "Zekrom"}, {text: "Reshiram"}, {text: "Kyurem"}, {text: "Xerneas"},
    {text: "Yveltal"}, {text: "Zygarde"}, {text: "Hoopa"}, {text: "Volcanion"}, {text: "Solgaleo"}, {text: "Lunala"}, {text: "Necrozma"}, {text: "Zacian"}, {text: "Zamazenta"}, {text: "Eternatus"},
    {text: "Mew"}, {text: "Celebi"}, {text: "Jirachi"}, {text: "Deoxys"}, {text: "Manaphy"}, {text: "Entei"}, {text: "Suicune"}, {text: "Raikou"}, {text: "Zapdos"}, {text: "Articuno"},
    {text: "Sceptile"}, {text: "Swampert"}, {text: "Infernape"}, {text: "Empoleon"}, {text: "Torterra"}, {text: "Samurott"}, {text: "Emboar"}, {text: "Serperior"}, {text: "Delphox"}, {text: "Chesnaught"},
    {text: "Incineroar"}, {text: "Primarina"}, {text: "Decidueye"}, {text: "Cinderace"}, {text: "Inteleon"}, {text: "Rillaboom"}, {text: "Meowscarada"}, {text: "Quaquaval"}, {text: "Skeledirge"}, {text: "Miraidon"},
    {text: "Pidgeot"}, {text: "Butterfree"}, {text: "Beedrill"}, {text: "Raichu"}, {text: "Ninetales"}, {text: "Jigglypuff"}, {text: "Vileplume"}, {text: "Parasect"}, {text: "Venomoth"}, {text: "Dugtrio"},
    {text: "Meowth"}, {text: "Golduck"}, {text: "Primeape"}, {text: "Poliwrath"}, {text: "Alakazam"}, {text: "Machamp"}, {text: "Victreebel"}, {text: "Tentacruel"}, {text: "Golem"}, {text: "Rapidash"}
  ],
  [Category.ANATOMY]: [
    {text: "Cerebro"}, {text: "Corazón"}, {text: "Pulmones"}, {text: "Hígado"}, {text: "Riñones"}, {text: "Estómago"}, {text: "Intestinos"}, {text: "Páncreas"}, {text: "Vejiga"}, {text: "Bazo"},
    {text: "Cráneo"}, {text: "Fémur"}, {text: "Húmero"}, {text: "Radio"}, {text: "Cúbito"}, {text: "Pelvis"}, {text: "Vértebras"}, {text: "Costillas"}, {text: "Clavícula"}, {text: "Omóplato"},
    {text: "Bíceps"}, {text: "Tríceps"}, {text: "Cuádriceps"}, {text: "Abdominales"}, {text: "Glúteos"}, {text: "Deltoides"}, {text: "Pectorales"}, {text: "Dorso"}, {text: "Gemelos"}, {text: "Trapecio"},
    {text: "Piel"}, {text: "Ojos"}, {text: "Oídos"}, {text: "Nariz"}, {text: "Lengua"}, {text: "Dientes"}, {text: "Uñas"}, {text: "Pelo"}, {text: "Glándulas"}, {text: "Nervios"},
    {text: "Arterias"}, {text: "Venas"}, {text: "Capilares"}, {text: "Sangre"}, {text: "Huesos"}, {text: "Músculos"}, {text: "Articulaciones"}, {text: "Tendones"}, {text: "Ligamentos"}, {text: "Cartílago"},
    {text: "Diafragma"}, {text: "Tráquea"}, {text: "Esófago"}, {text: "Laringe"}, {text: "Faringe"}, {text: "Amígdalas"}, {text: "Tiroides"}, {text: "Médula Espinal"}, {text: "Cerebelo"}, {text: "Hipocampo"},
    {text: "Bulbo Raquídeo"}, {text: "Tálamo"}, {text: "Hipotálamo"}, {text: "Hipófisis"}, {text: "Glándula Pineal"}, {text: "Timo"}, {text: "Glándulas Suprarrenales"}, {text: "Ovarios"}, {text: "Testículos"}, {text: "Uretra"},
    {text: "Uréteres"}, {text: "Vesícula Biliar"}, {text: "Duodeno"}, {text: "Yeyuno"}, {text: "Íleon"}, {text: "Ciego"}, {text: "Colon"}, {text: "Recto"}, {text: "Ano"}, {text: "Apéndice"}
  ],
  [Category.SPORTS]: [
    {text: "Fútbol"}, {text: "Baloncesto"}, {text: "Tenis"}, {text: "Voleibol"}, {text: "Béisbol"}, {text: "Rugby"}, {text: "Golf"}, {text: "Natación"}, {text: "Atletismo"}, {text: "Ciclismo"},
    {text: "Boxeo"}, {text: "Karate"}, {text: "Judo"}, {text: "Taekwondo"}, {text: "Esgrima"}, {text: "Gimnasia"}, {text: "Patinaje"}, {text: "Surf"}, {text: "Esquí"}, {text: "Snowboard"},
    {text: "Hockey"}, {text: "Balonmano"}, {text: "Waterpolo"}, {text: "Remo"}, {text: "Vela"}, {text: "Fórmula 1"}, {text: "Motociclismo"}, {text: "Rally"}, {text: "Tenis de Mesa"}, {text: "Bádminton"},
    {text: "Squash"}, {text: "Pádel"}, {text: "Críquet"}, {text: "Lacrosse"}, {text: "Polo"}, {text: "Equitación"}, {text: "Tiro con Arco"}, {text: "Tiro"}, {text: "Halterofilia"}, {text: "Lucha"},
    {text: "Triatlón"}, {text: "Pentatlón"}, {text: "Maratón"}, {text: "Senderismo"}, {text: "Escalada"}, {text: "Paracaidismo"}, {text: "Buceo"}, {text: "Yoga"}, {text: "Pilates"}, {text: "Crossfit"},
    {text: "Ajedrez"}, {text: "Billar"}, {text: "Dardos"}, {text: "Bowling"}, {text: "Curling"}, {text: "Sumo"}, {text: "Muay Thai"}, {text: "Jiujitsu"}, {text: "Kickboxing"}, {text: "Sóftbol"},
    {text: "Salto de Trampolín"}, {text: "Nado Sincronizado"}, {text: "Pentatlón Moderno"}, {text: "Heptatlón"}, {text: "Decatlón"}, {text: "Carrera de Relevos"}, {text: "Marcha Atlética"}, {text: "Parkour"}, {text: "Skateboarding"}, {text: "Surf"},
    {text: "Ciclismo de Pista"}, {text: "Ciclismo de Montaña"}, {text: "Ciclismo en Ruta"}, {text: "BMX"}, {text: "Vóley Playa"}, {text: "Fútbol Sala"}, {text: "Fútbol Playa"}, {text: "Remo Olímpico"}, {text: "Piragüismo"}, {text: "Eslalon"},
    {text: "Gimnasia Rítmica"}, {text: "Gimnasia Artística"}, {text: "Trampolín"}, {text: "Salto de Altura"}, {text: "Salto de Longitud"}, {text: "Salto con Pértiga"}, {text: "Triple Salto"}, {text: "Lanzamiento de Peso"}, {text: "Lanzamiento de Disco"}, {text: "Lanzamiento de Martillo"},
    {text: "Lanzamiento de Jabalina"}, {text: "100 metros lisos"}, {text: "200 metros lisos"}, {text: "400 metros lisos"}, {text: "800 metros lisos"}, {text: "1500 metros lisos"}, {text: "5000 metros lisos"}, {text: "10000 metros lisos"}, {text: "Maratón"}, {text: "110 metros vallas"}
  ],
  [Category.FOOD]: [
    {text: "Pizza"}, {text: "Hamburguesa"}, {text: "Sushi"}, {text: "Pasta"}, {text: "Tacos"}, {text: "Ceviche"}, {text: "Paella"}, {text: "Asado"}, {text: "Ramen"}, {text: "Dim Sum"},
    {text: "Croissant"}, {text: "Baguette"}, {text: "Queso"}, {text: "Jamón"}, {text: "Ensalada"}, {text: "Sopa"}, {text: "Arroz"}, {text: "Lentejas"}, {text: "Pollo a la Brasa"}, {text: "Pescado"},
    {text: "Helado"}, {text: "Chocolate"}, {text: "Pastel"}, {text: "Galletas"}, {text: "Fruta"}, {text: "Verduras"}, {text: "Carne"}, {text: "Huevo"}, {text: "Leche"}, {text: "Mantequilla"},
    {text: "Manzana"}, {text: "Plátano"}, {text: "Fresa"}, {text: "Uva"}, {text: "Naranja"}, {text: "Tomate"}, {text: "Papa"}, {text: "Cebolla"}, {text: "Ajo"}, {text: "Pimienta"},
    {text: "Canela"}, {text: "Vainilla"}, {text: "Café"}, {text: "Té"}, {text: "Cerveza"}, {text: "Vino"}, {text: "Pisco"}, {text: "Whisky"}, {text: "Vodka"}, {text: "Ron"},
    {text: "Panetón"}, {text: "Turrón"}, {text: "Mazamorra Morada"}, {text: "Arroz con Leche"}, {text: "Suspiro Limeño"}, {text: "Picarones"}, {text: "Anticuchos"}, {text: "Lomo Saltado"}, {text: "Ají de Gallina"}, {text: "Papa a la Huancaína"},
    {text: "Causa Limeña"}, {text: "Tacu Tacu"}, {text: "Arroz con Pollo"}, {text: "Seco de Cabrito"}, {text: "Carapulcra"}, {text: "Sopa Seca"}, {text: "Rocoto Relleno"}, {text: "Adobo Arequipeño"}, {text: "Pachamanca"}, {text: "Juane"},
    {text: "Tacacho con Cecina"}, {text: "Chaufa de Mariscos"}, {text: "Jugo de Papaya"}, {text: "Chicha Morada"}, {text: "Inca Kola"}, {text: "Champús"}, {text: "Ranfañote"}, {text: "Tejas de Ica"}, {text: "King Kong (Dulce)"}, {text: "Alfajores"},
    {text: "Empanada"}, {text: "Tamal"}, {text: "Humitas"}, {text: "Chicharrón de Pescado"}, {text: "Choritos a la Chalaca"}, {text: "Leche de Tigre"}, {text: "Cau Cau"}, {text: "Chanfainita"}, {text: "Patita con Maní"}, {text: "Estofado de Pollo"},
    {text: "Pollo al Horno"}, {text: "Milanesa de Carne"}, {text: "Tallarines Verdes"}, {text: "Tallarines Rojos"}, {text: "Escabeche de Pescado"}, {text: "Aguadito de Pollo"}, {text: "Chupe de Camarones"}, {text: "Solterito de Queso"}, {text: "Ocopa Arequipeña"}, {text: "Malaya Frita"},
    {text: "Cuy Chactado"}, {text: "Pepián de Choclo"}, {text: "Shambar"}, {text: "Cebiche de Conchas Negras"}, {text: "Pulpo al Olivo"}, {text: "Tiradito"}, {text: "Chaufa de Carne"}, {text: "Kam Lu Wantán"}, {text: "Pollo Tipakay"}, {text: "Pollo Chi Jau Kay"},
    {text: "Aeropuerto (Comida)"}, {text: "Sopa Wantán"}, {text: "Tallarín Saltado"}, {text: "Caldo de Mote"}, {text: "Caldo de Gallina"}, {text: "Menestrón"}, {text: "Chilcano de Pescado"}, {text: "Sopa de Sustancia"}, {text: "Sopa a la Minuta"}, {text: "Chicharrón de Cerdo"},
    {text: "Pan con Chicharrón"}, {text: "Pan con Pavo"}, {text: "Butifarra"}, {text: "Salchipapa"}, {text: "Papas Fritas"}, {text: "Yuca Frita"}, {text: "Camote Frito"}, {text: "Chifles"}, {text: "Cancha Serrana"}, {text: "Mote"},
    {text: "Queso Helado"}, {text: "Crema Volteada"}, {text: "Leche Asada"}, {text: "Arroz Zambito"}, {text: "Mazamorra de Calabaza"}, {text: "Manjar Blanco"}, {text: "Frejol Colado"}, {text: "Tejas"}, {text: "Chocotejas"}, {text: "Turrón de Doña Pepa"}
  ],
  [Category.PROFESSIONS]: [
    {text: "Médico"}, {text: "Ingeniero"}, {text: "Profesor"}, {text: "Abogado"}, {text: "Arquitecto"}, {text: "Periodista"}, {text: "Científico"}, {text: "Artista"}, {text: "Músico"}, {text: "Actor"},
    {text: "Policía"}, {text: "Bombero"}, {text: "Militar"}, {text: "Cocinero"}, {text: "Mesero"}, {text: "Panadero"}, {text: "Carpintero"}, {text: "Electricista"}, {text: "Plomero"}, {text: "Pintor"},
    {text: "Conductor"}, {text: "Piloto"}, {text: "Azafata"}, {text: "Marinero"}, {text: "Agricultor"}, {text: "Veterinario"}, {text: "Dentista"}, {text: "Enfermero"}, {text: "Farmacéutico"}, {text: "Psicólogo"},
    {text: "Contador"}, {text: "Administrador"}, {text: "Vendedor"}, {text: "Cajero"}, {text: "Cartero"}, {text: "Barrendero"}, {text: "Jardinero"}, {text: "Albañil"}, {text: "Escultor"}, {text: "Diseñador"},
    {text: "Programador"}, {text: "Fotógrafo"}, {text: "Bailarín"}, {text: "Atleta"}, {text: "Entrenador"}, {text: "Árbitro"}, {text: "Sacerdote"}, {text: "Juez"}, {text: "Político"}, {text: "Empresario"},
    {text: "Astronauta"}, {text: "Arqueólogo"}, {text: "Biólogo"}, {text: "Químico"}, {text: "Físico"}, {text: "Matemático"}, {text: "Historiador"}, {text: "Filósofo"}, {text: "Escritor"}, {text: "Poeta"},
    {text: "Traductor"}, {text: "Bibliotecario"}, {text: "Sociólogo"}, {text: "Antropólogo"}, {text: "Geólogo"}, {text: "Meteorólogo"}, {text: "Ecologista"}, {text: "Joyero"}, {text: "Relojero"}, {text: "Sastre"},
    {text: "Zapatero"}, {text: "Mecánico"}, {text: "Herrero"}, {text: "Cerrajero"}, {text: "Tapicero"}, {text: "Vigilante"}, {text: "Socorrista"}, {text: "Guía Turístico"}, {text: "Recepcionista"}, {text: "Secretaria"},
    {text: "Psiquiatra"}, {text: "Nutricionista"}, {text: "Fisioterapeuta"}, {text: "Óptico"}, {text: "Radiólogo"}, {text: "Geógrafo"}, {text: "Economista"}, {text: "Estadístico"}, {text: "Lingüista"}, {text: "Artesano"},
    {text: "Peluquero"}, {text: "Esteticista"}, {text: "Modelo"}, {text: "Influencer"}, {text: "YouTuber"}, {text: "Streamer"}, {text: "Gamer Profesional"}, {text: "DJ"}, {text: "Ilusionista"}, {text: "Acróbata"}
  ],
  [Category.PERU_PRESIDENTS]: [
    {text: "José de la Riva-Agüero", subtext: "1823-1823"}, {text: "José de San Martín", subtext: "1821-1822 (Protector)"}, {text: "Simón Bolívar", subtext: "1824-1827 (Dictador)"}, {text: "José de la Mar", subtext: "1827-1829"}, {text: "Agustín Gamarra", subtext: "1829-1833 / 1839-1841"},
    {text: "Luis José de Orbegoso", subtext: "1833-1836"}, {text: "Felipe Santiago Salaverry", subtext: "1835-1836"}, {text: "Andrés de Santa Cruz", subtext: "1836-1839 (Confederación)"}, {text: "Ramón Castilla", subtext: "1845-1851 / 1855-1862"}, {text: "José Rufino Echenique", subtext: "1851-1855"},
    {text: "Miguel de San Román", subtext: "1862-1863"}, {text: "Mariano Ignacio Prado", subtext: "1865-1868 / 1876-1879"}, {text: "José Balta", subtext: "1868-1872"}, {text: "Manuel Pardo y Lavalle", subtext: "1872-1876"}, {text: "Nicolás de Piérola", subtext: "1879-1881 / 1895-1899"},
    {text: "Francisco García Calderón", subtext: "1881-1881"}, {text: "Miguel Iglesias", subtext: "1883-1885"}, {text: "Andrés Avelino Cáceres", subtext: "1886-1890 / 1894-1895"}, {text: "Remigio Morales Bermúdez", subtext: "1890-1894"}, {text: "Eduardo López de Romaña", subtext: "1899-1903"},
    {text: "Manuel Candamo", subtext: "1903-1904"}, {text: "José Pardo y Barreda", subtext: "1904-1908 / 1915-1919"}, {text: "Augusto B. Leguía", subtext: "1908-1912 / 1919-1930"}, {text: "Guillermo Billinghurst", subtext: "1912-1914"}, {text: "Oscar R. Benavides", subtext: "1914-1915 / 1933-1939"},
    {text: "Luis Miguel Sánchez Cerro", subtext: "1930-1933"}, {text: "Manuel Prado Ugarteche", subtext: "1939-1945 / 1956-1962"}, {text: "José Luis Bustamante y Rivero", subtext: "1945-1948"}, {text: "Manuel A. Odría", subtext: "1948-1956"}, {text: "Ricardo Pérez Godoy", subtext: "1962-1963"},
    {text: "Nicolás Lindley", subtext: "1963-1963"}, {text: "Fernando Belaúnde Terry", subtext: "1963-1968 / 1980-1985"}, {text: "Juan Velasco Alvarado", subtext: "1968-1975"}, {text: "Francisco Morales Bermúdez", subtext: "1975-1980"}, {text: "Alan García Pérez", subtext: "1985-1990 / 2006-2011"},
    {text: "Alberto Fujimori", subtext: "1990-2000"}, {text: "Valentín Paniagua", subtext: "2000-2001"}, {text: "Alejandro Toledo", subtext: "2001-2006"}, {text: "Ollanta Humala", subtext: "2011-2016"}, {text: "Pedro Pablo Kuczynski", subtext: "2016-2018"},
    {text: "Martín Vizcarra", subtext: "2018-2020"}, {text: "Manuel Merino", subtext: "2020-2020"}, {text: "Francisco Sagasti", subtext: "2020-2021"}, {text: "Pedro Castillo", subtext: "2021-2022"}, {text: "Dina Boluarte", subtext: "2022-Presente"},
    {text: "Juan Antonio Pezet", subtext: "1863-1865"}, {text: "Antonio Arenas", subtext: "1885-1886"}, {text: "Justiniano Borgoño", subtext: "1894-1894"}, {text: "Serapio Calderón", subtext: "1904-1904"}, {text: "David Samanez Ocampo", subtext: "1931-1931"},
    {text: "Zenón Noriega", subtext: "1950-1950"}, {text: "Federico Carel", subtext: "1881"}, {text: "Francisco Diez-Canseco", subtext: "1872 / 1868"}, {text: "Lizardo Montero", subtext: "1881-1883"}, {text: "Justo Figuerola", subtext: "1843 / 1844"},
    {text: "Manuel Menéndez", subtext: "1841-1842 / 1844-1845"}, {text: "Crisóstomo Torrico", subtext: "1842"}, {text: "Domingo Elías", subtext: "1844"}, {text: "Manuel Ignacio de Vivanco", subtext: "1843-1844"}, {text: "Pedro Diez Canseco", subtext: "1863 / 1865 / 1868"},
    {text: "Rufino Torrico", subtext: "1881"}, {text: "Antonio de la Haza", subtext: "1872"}, {text: "José Canseco", subtext: "1863"}, {text: "Manuel Costas", subtext: "1874"}
  ]
};

/**
 * Barajado Fisher-Yates para asegurar máxima aleatoriedad y que todos los elementos
 * tengan la misma probabilidad de aparecer sin repeticiones seguidas.
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Obtiene la lista de palabras barajada de la base de datos local.
 * Soporta misiones masivas de elementos.
 */
export async function fetchWordList(category: Category, count: number = 140): Promise<WordItem[]> {
  // Simulamos un retraso estético (offline)
  await new Promise(resolve => setTimeout(resolve, 300));

  const list = WORD_DATABASE[category] || [{text: "Error en categoría"}];
  const shuffled = shuffleArray(list);
  
  // Retornamos el mazo barajado limitado al número solicitado (hasta 140 o el tamaño de la lista)
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
