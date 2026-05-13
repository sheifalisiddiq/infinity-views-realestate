export interface Property {
  id: string
  slug: string
  name: string
  location: string
  area: PropertyArea
  type: PropertyType
  status: 'sale' | 'rent'
  price: number
  priceLabel: string
  beds: number
  baths: number
  sqft: number
  description: string
  longDescription: string
  amenities: string[]
  images: string[]
  featured?: boolean
  offMarket?: boolean
  reference: string
  floor?: number
  totalFloors?: number
  developer?: string
  completionYear?: number
}

export type PropertyArea =
  | 'Palm Jumeirah'
  | 'Downtown Dubai'
  | 'Emirates Hills'
  | 'Dubai Hills Estate'
  | 'Jumeirah Bay Island'
  | 'Bluewaters Island'
  | 'Business Bay'

export type PropertyType = 'Villa' | 'Penthouse' | 'Apartment' | 'Townhouse' | 'Plot'

export const properties: Property[] = [
  {
    id: '1',
    slug: 'palm-jumeirah-frond-m-villa',
    name: 'Frond M Signature Villa',
    location: 'Frond M, Palm Jumeirah',
    area: 'Palm Jumeirah',
    type: 'Villa',
    status: 'sale',
    price: 68000000,
    priceLabel: 'AED 68,000,000',
    beds: 7,
    baths: 9,
    sqft: 14200,
    reference: 'IV-2401',
    description: 'A private waterfront residence on Frond M, with uninterrupted views of the Burj Al Arab and the Dubai Marina skyline across open water.',
    longDescription: `Set on one of Palm Jumeirah's most coveted outer fronds, this seven-bedroom beachfront villa represents the definitive Palm address. Positioned to capture western sunsets over the Arabian Gulf and the glittering arc of the Dubai Marina skyline, the residence is designed for those who have chosen Dubai's most recognisable address — and want nothing withheld from it.

The architecture speaks quietly. Bleached limestone, floor-to-ceiling glass, and a palette drawn from the sea: pale sand, driftwood, deep ocean blue. Every principal room opens directly to the private beach through retractable glass walls, erasing the boundary between interior and water.

The ground floor is conceived for entertaining: an open-plan reception that flows to a 25-metre infinity pool, a cinema, and a fully appointed outdoor kitchen and bar. The upper floors are private. A master suite that occupies the entire first level — sitting room, dual dressing rooms, spa bathroom with freestanding tub facing the sea, and a private terrace. Four further bedroom suites, each with en-suite and balcony. Two additional rooms serve as a private gym and staff quarters.

A private jetty provides direct water access. Basement parking for six vehicles. Full smart home integration throughout.`,
    amenities: ['Private Beach', 'Infinity Pool', 'Private Jetty', 'Cinema', 'Gym', 'Smart Home', 'Basement Parking (6)', 'Staff Quarters', 'Outdoor Kitchen'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90&fit=crop',
    ],
    featured: true,
    offMarket: false,
  },
  {
    id: '2',
    slug: 'burj-khalifa-penthouse',
    name: 'The Burj Residences — Sky Penthouse',
    location: 'Burj Khalifa District, Downtown Dubai',
    area: 'Downtown Dubai',
    type: 'Penthouse',
    status: 'sale',
    price: 42500000,
    priceLabel: 'AED 42,500,000',
    beds: 5,
    baths: 6,
    sqft: 9800,
    reference: 'IV-2402',
    description: 'A sky-level penthouse in Burj Khalifa District, with panoramic views of the Dubai Fountain, Burj Khalifa, and the Downtown skyline from every principal room.',
    longDescription: `Positioned at elevation in the Burj Residences — the address most synonymous with Dubai's vertical ambition — this five-bedroom penthouse occupies a double-height corner position with views across the Dubai Fountain, the Burj Khalifa, and an unbroken panorama of Downtown Dubai stretching to the desert horizon.

The design was executed by an award-winning interior studio: a restrained palette of warm Italian marble, smoked oak millwork, and aged brass hardware that allows the view to lead. The living space reads as a single, sweeping volume from the entry gallery through the dining room to a wraparound terrace.

The kitchen is a chef's kitchen: Wolf and Sub-Zero appliances, Bulthaup cabinetry, an island seating eight. An adjoining family kitchen for daily use keeps the main space pristine. Five bedroom suites occupy the upper level, the master anchored by a bathroom clad entirely in Bianco Statuario marble, with a bath positioned directly facing the Burj.

Access via a dedicated private elevator. The building offers residents a full-floor amenity level: indoor pool, spa, residents' lounge, concierge.`,
    amenities: ['Private Elevator', 'Wraparound Terrace', 'Double Height Ceilings', 'Chef\'s Kitchen', 'Indoor Pool Access', 'Spa', 'Concierge', 'Residents Lounge'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=90&fit=crop',
    ],
    featured: true,
    offMarket: false,
  },
  {
    id: '3',
    slug: 'emirates-hills-mansion',
    name: 'Emirates Hills — Montgomerie Fairway Estate',
    location: 'Sector E, Emirates Hills',
    area: 'Emirates Hills',
    type: 'Villa',
    status: 'sale',
    price: 95000000,
    priceLabel: 'AED 95,000,000',
    beds: 9,
    baths: 11,
    sqft: 22500,
    reference: 'IV-2403',
    description: 'An estate of singular scale on a double plot in Emirates Hills, facing the Montgomerie Golf Course with a 40-metre pool terrace and private guest house.',
    longDescription: `Emirates Hills occupies Dubai's most discreet tier. There are no hotel lobbies here, no crowds, no spectacle — just 4,000 private residences behind a single guarded perimeter, arranged along fairways and lake frontage that most of Dubai doesn't know exists. Sector E is its finest address.

This nine-bedroom estate sits on a rare double-plot, commanding 40 metres of direct Montgomerie Golf Course frontage. The scale is difficult to grasp from photographs: a 22,500 square foot main house, a 3,200 square foot guest house with its own kitchen and entrance, and 9,000 square feet of landscaped exterior including a 40-metre pool terrace, outdoor cinema, tennis court, and formal garden.

The interiors were executed under the direction of a Dubai-based principal with references in Mayfair and Monaco. Marble throughout — three varieties, each selected in person from Italian quarries. Ceilings of 5.2 metres in the reception hall. A staircase in aged bronze and glass that serves no structural purpose except visual authority.

Six of the nine bedroom suites are in the main house, three in the guest house — entirely self-contained. Basement level: eight-car garage, wine cellar, staff accommodation for six, utility rooms, and a private gym with steam room and pool access.

Offered off-market by introduction.`,
    amenities: ['Golf Course Frontage', '40m Pool Terrace', 'Guest House', 'Tennis Court', 'Outdoor Cinema', 'Wine Cellar', 'Garage (8 cars)', 'Staff Quarters (6)', 'Private Gym'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=90&fit=crop',
    ],
    featured: true,
    offMarket: true,
  },
  {
    id: '4',
    slug: 'jumeirah-bay-island-villa',
    name: 'Jumeirah Bay Island — Beachfront Villa',
    location: 'Jumeirah Bay Island',
    area: 'Jumeirah Bay Island',
    type: 'Villa',
    status: 'sale',
    price: 54000000,
    priceLabel: 'AED 54,000,000',
    beds: 6,
    baths: 7,
    sqft: 11800,
    reference: 'IV-2404',
    description: 'A beachfront villa on Jumeirah Bay Island — Dubai\'s most private island address — with direct beach access and unobstructed views of the Bulgari Resort.',
    longDescription: `Jumeirah Bay Island is not Palm Jumeirah. It is smaller, more contained, deliberately exclusive — connected to the mainland by a single road accessible only to residents and their guests. The Bulgari Resort anchors the island's tip. The private villas beyond it are among Dubai's least-known and most desirable properties.

This six-bedroom villa occupies one of the island's prime beachfront plots, separated from the Bulgari by three residences. The architecture references a Mediterranean modernism: flat rooflines, whitewashed render, shaded loggias, and a courtyard that connects the interior to the beach through a planted walkway and private pool.

The interiors move between restraint and warmth: Venetian plaster walls, terrazzo floors, linen draping, and furniture by a Milanese studio. The principal reception opens to a covered terrace and then directly to sand. The beach is private, unspoiled, and rarely occupied by more than a handful of families at once.

Five bedroom suites in the main villa occupy two floors. A separate beach house provides guest accommodation or a private studio. The kitchen is fully integrated and faces the courtyard pool. A rooftop terrace gives views over the Arabian Gulf and the Dubai skyline.`,
    amenities: ['Direct Beach Access', 'Courtyard Pool', 'Beach House', 'Rooftop Terrace', 'Loggia', 'Smart Home', 'Private Garden'],
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1549294413-26f195200c16?w=1600&q=90&fit=crop',
    ],
    featured: true,
    offMarket: false,
  },
  {
    id: '5',
    slug: 'dubai-hills-golf-villa',
    name: 'Dubai Hills Estate — Golf Elevation Villa',
    location: 'Golf Place, Dubai Hills Estate',
    area: 'Dubai Hills Estate',
    type: 'Villa',
    status: 'sale',
    price: 28500000,
    priceLabel: 'AED 28,500,000',
    beds: 6,
    baths: 7,
    sqft: 9400,
    reference: 'IV-2405',
    description: 'A six-bedroom villa in Dubai Hills Estate\'s most elevated enclave, with direct golf course views and a double-height living room that frames the Burj Khalifa on the horizon.',
    longDescription: `Golf Place is Dubai Hills Estate's signature address: a collection of elevated plots overlooking the 18-hole championship course, with Burj Khalifa visible on the clear horizon twenty kilometres north.

This six-bedroom villa from Emaar's premium Golf Place series represents one of the development's most thoughtfully positioned units — a corner plot that commands views across the 10th and 11th fairways with morning sun falling on the main living terrace and the Burj silhouette at dusk.

The architecture follows the Dubai Hills language of clean modernity with regional inflections: a strong horizontal form, deep shade overhangs, and a material palette of concrete, glass, and pale stone. The double-height entry and reception is unusual for the series — a result of the elevated positioning and a small interior design customisation by the current owner.

The kitchen anchors the rear of the ground floor, opening to a service terrace and utility wing. The pool is positioned along the western edge for afternoon sun. Four bedrooms on the first floor, two on the ground. A basement level houses a home cinema, gym, and three-car garage.

In a master community that has appreciated 34% year-on-year since 2021, Golf Place plots have consistently outperformed the overall development.`,
    amenities: ['Golf Course Views', 'Burj Khalifa Views', 'Infinity Pool', 'Home Cinema', 'Gym', 'Garage (3 cars)', 'Smart Home', 'Maid\'s Room'],
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=90&fit=crop',
    ],
    featured: false,
    offMarket: false,
  },
  {
    id: '6',
    slug: 'bluewaters-penthouse',
    name: 'Bluewaters Residences — Harbour Penthouse',
    location: 'Bluewaters Island, Dubai',
    area: 'Bluewaters Island',
    type: 'Penthouse',
    status: 'sale',
    price: 19800000,
    priceLabel: 'AED 19,800,000',
    beds: 4,
    baths: 5,
    sqft: 5600,
    reference: 'IV-2406',
    description: 'A double-level penthouse on Bluewaters Island, facing Ain Dubai and the Marina skyline, with a private rooftop pool and terrace across 1,800 sqft of outdoor space.',
    longDescription: `Bluewaters Island sits off JBR — close enough to the city to feel connected, removed enough by water to feel apart from it. Ain Dubai, the world's largest observation wheel, is a permanent landmark on the skyline from every window and terrace.

This four-bedroom penthouse occupies the top two floors of Bluewaters Residences Building 8. The upper level is given entirely to a private rooftop pool, sundeck, and a fully equipped outdoor kitchen and bar — 1,800 square feet of private outdoor space with 360-degree views from Dubai Marina to the open Gulf.

The interiors were refurbished by the current owner to a specification considerably above the developer standard: Arabescato marble throughout, custom joinery in European oak, and a kitchen outfitted by SieMatic. The double-height main reception is hung with an installation by a Beirut-based artist (negotiable separately).

The master suite — a full floor to itself — includes a walk-in dressing room of a scale rarely seen outside of bespoke residential projects, two bathrooms, a study, and a private sitting room facing the Marina.

The building has 24-hour security and a dedicated residents' concierge.`,
    amenities: ['Private Rooftop Pool', '1,800 sqft Terrace', 'Outdoor Kitchen', 'Double-height Living', 'Marina Views', 'Ain Dubai Views', 'Concierge'],
    images: [
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7531e489ece?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=1600&q=90&fit=crop',
    ],
    featured: true,
    offMarket: false,
  },
  {
    id: '7',
    slug: 'palm-trunk-penthouse',
    name: 'One at Palm Jumeirah — Dorchester Penthouse',
    location: 'The Trunk, Palm Jumeirah',
    area: 'Palm Jumeirah',
    type: 'Penthouse',
    status: 'sale',
    price: 78000000,
    priceLabel: 'AED 78,000,000',
    beds: 4,
    baths: 5,
    sqft: 8200,
    reference: 'IV-2407',
    description: 'A full-floor Dorchester Collection-managed penthouse at One Palm, with private pool, staff wing, and panoramic views of the full Palm archipelago and Dubai skyline.',
    longDescription: `One at Palm Jumeirah — developed by Omniyat and managed by Dorchester Collection — is Dubai's most prominent branded residential statement. The building itself is a singular object on the Palm trunk: a tapered glass form rising from the water's edge, its architecture conceived by Foster + Partners.

Full-floor penthouses at One Palm are among the rarest assets in the Dubai market. There are four in total. This one — positioned on an upper floor facing west, south, and east — takes in a panorama that stretches from the Palm's crescent, across the full arc of the archipelago, and across to the city beyond Downtown.

The specification is Dorchester's best: Obegi Home interiors, a kitchen designed around La Cornue and Gaggenau, a master bathroom built around a free-standing bath carved from a single block of White Onyx. The private pool is 12 metres, heated, with an automated privacy screen. A fully outfitted staff wing — kitchen, two rooms, separate entrance — ensures complete separation from the private areas of the residence.

Dorchester Collection services include in-residence dining from the restaurant kitchen, a dedicated residential concierge, housekeeping, and access to the full resort amenity floor.`,
    amenities: ['Dorchester Services', 'Private Pool (12m)', 'Full Floor', 'Staff Wing', 'Foster + Partners Architecture', 'In-Residence Dining', 'Spa Access', 'Beach Club'],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?w=1600&q=90&fit=crop',
    ],
    featured: true,
    offMarket: false,
  },
  {
    id: '8',
    slug: 'downtown-residences-apartment',
    name: 'The Address Residences — Fountain View',
    location: 'Mohammed Bin Rashid Boulevard, Downtown Dubai',
    area: 'Downtown Dubai',
    type: 'Apartment',
    status: 'sale',
    price: 8900000,
    priceLabel: 'AED 8,900,000',
    beds: 3,
    baths: 4,
    sqft: 2800,
    reference: 'IV-2408',
    description: 'A three-bedroom residence in The Address Residences BLVD, facing the Dubai Fountain with full hotel services and a direct walkway to The Dubai Mall.',
    longDescription: `The Address BLVD is the hotel-branded component of the Mohammed Bin Rashid Boulevard development — a building that sits with exceptional precision on one of Downtown's finest axes, facing the Dubai Fountain directly and connected by covered walkway to The Dubai Mall.

This three-bedroom apartment occupies a mid-tower position on the fountain-facing side. The floor-to-ceiling glazing means the Fountain's performances — six times daily, visible from the sitting room and the master bedroom — are a private spectacle that most of Dubai pays to see from a restaurant. Here, they are a quiet routine.

The Address service layer is the entire point: 24-hour room service from the hotel kitchen, daily housekeeping, dry cleaning valet, and access to the hotel's pool, gym, and spa. Owners can also opt into the hotel's rental programme, which generates returns on par with Dubai's most consistent short-term assets.

The apartment itself is specified to hotel standard: fully fitted kitchen, integrated Siemens appliances, stone flooring throughout. The three bedrooms are generous. The master — on the fountain side — has a walk-in wardrobe and a marble bathroom.`,
    amenities: ['Dubai Fountain Views', 'Hotel Services', 'Room Service', 'Pool Access', 'Spa', 'Rental Programme', 'Dubai Mall Connection', 'Concierge'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=90&fit=crop',
    ],
    featured: false,
    offMarket: false,
  },
  {
    id: '9',
    slug: 'emirates-hills-villa-sector-v',
    name: 'Emirates Hills — Sector V Lakefront',
    location: 'Sector V, Emirates Hills',
    area: 'Emirates Hills',
    type: 'Villa',
    status: 'sale',
    price: 38000000,
    priceLabel: 'AED 38,000,000',
    beds: 7,
    baths: 8,
    sqft: 14600,
    reference: 'IV-2409',
    description: 'A seven-bedroom lakefront villa in Sector V, Emirates Hills — a quiet, secluded enclave with views across a private lake and lush greenery.',
    longDescription: `Sector V is Emirates Hills at its most serene: no golf course noise, no through traffic, just a contained cluster of villas arranged around a private freshwater lake in landscaped surroundings. The views from the waterside terraces here feel more like the English countryside than the Arabian Peninsula.

This seven-bedroom villa has held a single owner since its completion and shows it — fastidiously maintained, with upgrades made at a standard that goes well beyond the original specification. The landscaping alone — a six-year project involving a specialist team from the UK — has transformed the plot into something that photographs as a country estate.

The ground floor reads as a sequence of connected reception spaces: entrance hall, formal sitting room, family room, dining room, and kitchen — all oriented toward the lake through full-height glazing and a central terrace. The kitchen is commercial-grade with a separate caterer's kitchen adjacent. A cinema and games room complete the lower level.

The upper floor houses the master suite and four bedrooms. A separate annex accommodates a further two bedrooms, a living room, and a kitchen — a self-contained guest wing with its own entrance.

This property is offered privately, without public listing.`,
    amenities: ['Lakefront', 'Guest Annex', 'Caterer\'s Kitchen', 'Cinema', 'Private Garden (18,000 sqft)', 'Pool', 'Garage (4 cars)'],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=90&fit=crop',
    ],
    featured: false,
    offMarket: true,
  },
  {
    id: '10',
    slug: 'palm-frond-k-villa',
    name: 'Frond K Garden Villa',
    location: 'Frond K, Palm Jumeirah',
    area: 'Palm Jumeirah',
    type: 'Villa',
    status: 'sale',
    price: 32000000,
    priceLabel: 'AED 32,000,000',
    beds: 5,
    baths: 6,
    sqft: 8900,
    reference: 'IV-2410',
    description: 'A contemporary five-bedroom villa on Frond K, recently completed to a London interior designer\'s specification, with private beach, pool, and landscaped garden.',
    longDescription: `Frond K sits on the western side of the Palm, where the fronds are slightly narrower and the lots more intimate — a character that suits those who prefer the privacy of a smaller, more residential scale over the grand estates of the outer fronds.

This villa was completed in 2022 to a specification commissioned by a London-based owner with a clear brief: a Dubai home that felt like the best house in a good neighbourhood, rather than a trophy. The interior designer — a Notting Hill-based studio with a list of private residential clients in London, Nice, and New York — worked to exactly that intention.

The result is restrained and precise: poured concrete floors that transition to wide-plank European oak in the bedrooms, limewash walls, custom joinery in every room, and a lighting scheme developed by a specialist consultant. The kitchen is unfussy and well-considered: Miele and Gaggenau, Calacatta Oro worktops, a breakfast bar designed for daily family use.

The garden is mature and well-planted — a rarity on the Palm. The private beach at the foot of the garden is south-facing. The pool is 14 metres, heated, with a swim-up bar. The master terrace on the first floor faces directly across the water toward the open Gulf and, on clear days, the mountains of Oman.`,
    amenities: ['Private Beach', '14m Pool', 'Swim-up Bar', 'Mature Garden', 'Direct Gulf Views', 'Smart Home', 'Staff Room', 'Parking (3 cars)'],
    images: [
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1594484208280-efa00f96fc21?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=1600&q=90&fit=crop',
    ],
    featured: false,
    offMarket: false,
  },
  {
    id: '11',
    slug: 'downtown-loft-apartment',
    name: 'Vida Residences — Downtown Loft',
    location: 'Downtown Dubai',
    area: 'Downtown Dubai',
    type: 'Apartment',
    status: 'rent',
    price: 480000,
    priceLabel: 'AED 480,000 / year',
    beds: 2,
    baths: 3,
    sqft: 1900,
    reference: 'IV-2411',
    description: 'A furnished two-bedroom loft apartment in Vida Residences Downtown, available for annual lease with Emaar Hospitality management and full hotel services.',
    longDescription: `Vida Residences Downtown is Emaar Hospitality's lifestyle residential brand — a step above the standard serviced apartment, a step below the full hotel environment of The Address. The balance works well for those who want a managed, furnished apartment in Downtown with hotel infrastructure on call.

This two-bedroom loft apartment occupies an upper floor corner position with dual aspect views: east toward DIFC and Business Bay, south toward the old town. The loft configuration gives the living room a double-height ceiling of 5.5 metres, which is unusual for Downtown apartments of this size.

The interior is furnished to Emaar's lifestyle standard: warm neutrals, good quality upholstery, a kitchen that is genuinely functional rather than decorative. The bedrooms are calm — no city-facing windows, which means the sleeping experience is quiet despite the Downtown location.

Vida services include a 24-hour front desk, a good restaurant and bar, a rooftop pool and gym, and daily housekeeping. The weekly rate structure of the lease allows short-notice occupation and departure — useful for the annual tenant who travels frequently.

Available furnished on a 12-month lease. Shown by appointment.`,
    amenities: ['Furnished', 'Hotel Services', 'Rooftop Pool', 'Gym', 'Restaurant', 'Daily Housekeeping', 'Concierge', 'Parking (1)'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1600&q=90&fit=crop',
    ],
    featured: false,
    offMarket: false,
  },
  {
    id: '12',
    slug: 'palm-jumeirah-garden-home',
    name: 'Palm Jumeirah — Signature Garden Home',
    location: 'The Crescent, Palm Jumeirah',
    area: 'Palm Jumeirah',
    type: 'Apartment',
    status: 'sale',
    price: 14500000,
    priceLabel: 'AED 14,500,000',
    beds: 4,
    baths: 5,
    sqft: 5200,
    reference: 'IV-2412',
    description: 'A four-bedroom garden home in Tiara Residences on the Palm Crescent, with a private garden pool and direct beach access at one of the Palm\'s most peaceful addresses.',
    longDescription: `Tiara Residences on the Palm Crescent is one of the Palm's most considered residential developments — a lower-density building that sits at the crescent's edge where the density thins and the sound of the sea is audible from the private gardens below.

This four-bedroom garden home sits at podium level, which means it has what most Palm apartments do not: a private garden with direct access to the development's beachfront, and a private plunge pool within it. The garden is 1,800 square feet, planted and private, with a covered terrace, outdoor dining area, and the pool at the beach end.

The apartment itself is configured over two levels: reception, dining, kitchen, and one bedroom on the entry level; three further bedrooms — including the master suite — on the level above. The kitchen has been upgraded by the current owner to a Boffi and Gaggenau specification.

Tiara's amenities include a beachfront pool, gymnasium, tennis courts, and a private beach club. The development has a quiet, residential character — consistently occupied by owner-users rather than renters, which contributes to a standard of maintenance above the Palm norm.`,
    amenities: ['Private Garden', 'Private Plunge Pool', 'Direct Beach Access', 'Crescent Views', 'Beach Club', 'Tennis Courts', 'Pool', 'Gym'],
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&q=90&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=90&fit=crop',
    ],
    featured: false,
    offMarket: false,
  },
]

export const getFeaturedProperties = () => properties.filter((p) => p.featured)
export const getPropertyBySlug = (slug: string) => properties.find((p) => p.slug === slug)
export const getPropertiesByArea = (area: PropertyArea) => properties.filter((p) => p.area === area)
