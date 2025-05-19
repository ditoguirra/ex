// Données des produits (100 produits)
const products = [
    // Technologie (30 produits)
    {
        id: 1,
        title: "Smartphone Premium X10",
        description: "Écran 6.7\" AMOLED, 128GB, triple caméra 48MP",
        category: "tech",
        price: 799.99,
        oldPrice: 899.99,
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Nouveau"
    },
    {
        id: 2,
        title: "Casque Audio Pro",
        description: "Réduction de bruit active, 30h autonomie",
        category: "tech",
        price: 249.99,
        oldPrice: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Promo"
    },
    {
        id: 3,
        title: "Montre Connectée Elite",
        description: "Suivi santé, GPS, étanche 50m, écran tactile",
        category: "tech",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "PC Portable Ultrabook",
        description: "i7 11e gen, 16GB RAM, SSD 512GB, écran 4K",
        category: "tech",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Tablette Graphique Pro",
        description: "10 pouces, stylet précis, compatible tous logiciels",
        category: "tech",
        price: 349.99,
        oldPrice: 399.99,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Promo"
    },
    {
        id: 6,
        title: "Enceinte Bluetooth",
        description: "Son 360°, 20h autonomie, résistante à l'eau",
        category: "tech",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Drone Pro 4K",
        description: "Caméra stabilisée, 30min vol, contrôle smartphone",
        category: "tech",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        title: "Clavier Mécanique Gaming",
        description: "RGB personnalisable, switches bleus, anti-ghosting",
        category: "tech",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        title: "Souris Ergonomique",
        description: "Précision 16000DPI, 6 boutons programmables",
        category: "tech",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        title: "Disque Dur Externe 2TB",
        description: "USB-C, résistant aux chocs, transfert ultra-rapide",
        category: "tech",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    // Ajoutez 20 autres produits tech ici...
// Ajout des 30 produits restants (technologie)
    {
        id: 11,
        title: "Écran Gaming 27\" 144Hz",
        description: "QHD, 1ms, HDR, compatibilité FreeSync",
        category: "tech",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        title: "Webcam 4K Professionnelle",
        description: "Micro intégré, autofocus, lumière intégrée",
        category: "tech",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        title: "SSD NVMe 1TB",
        description: "Vitesse 3500MB/s, compatible PCIe 3.0",
        category: "tech",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 14,
        title: "Batterie Externe 20000mAh",
        description: "Charge rapide 18W, double port USB",
        category: "tech",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1605244476988-9332b1847f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 15,
        title: "Adaptateur USB-C Multiport",
        description: "HDMI, USB 3.0, SD/MicroSD, charge",
        category: "tech",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1592890288564-76643a8dc57e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 16,
        title: "Stylus pour Tablettes",
        description: "Précision sub-pixel, 2048 niveaux de pression",
        category: "tech",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1604608676197-5a21b8f8ea98?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 17,
        title: "Routeur Wi-Fi 6",
        description: "Débit 3000Mbps, 4 antennes, gestion app",
        category: "tech",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae07ef44?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 18,
        title: "Haut-parleur Intelligent",
        description: "Assistant vocal, son 360°, compatible multiroom",
        category: "tech",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 19,
        title: "Projecteur Mini 1080p",
        description: "Lumière 5000 lumens, Android intégré",
        category: "tech",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 20,
        title: "Station d'accueil USB-C",
        description: "Double écran 4K, Ethernet, 6 ports USB",
        category: "tech",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1556740734-9f9ca6b8a532?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    // Maison (30 produits)
    // Technologie (produits 21 à 30)
    {
        id: 21,
        title: "Clavier Sans Fil Slim",
        description: "Connexion Bluetooth, touches silencieuses, autonomie 6 mois",
        category: "tech",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 22,
        title: "Souris Ergonomique Verticale",
        description: "Réduction fatigue, 4000DPI, connexion sans fil 2.4GHz",
        category: "tech",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 23,
        title: "Disque Dur NAS 4TB",
        description: "7200RPM, cache 256MB, conçu pour 24/7",
        category: "tech",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 24,
        title: "Station d'Accueil Double Écran",
        description: "4K@60Hz, 6 ports USB, Ethernet Gigabit",
        category: "tech",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1556740734-9f9ca6b8a532?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 25,
        title: "Micro Casque Gaming",
        description: "7.1 surround, micro détachable, RGB personnalisable",
        category: "tech",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 26,
        title: "Caméra 360°",
        description: "5.7K, stabilisation, étanche IPX8",
        category: "tech",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 27,
        title: "Chargeur Sans Fil 3-en-1",
        description: "Smartphone, montre et écouteurs simultanés",
        category: "tech",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1605244476988-9332b1847f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 28,
        title: "Écran Tactile Portable",
        description: "15.6" Full HD, USB-C, stylet inclus",
        category: "tech",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 29,
        title: "Enceinte Bluetooth Étanche",
        description: "30W, RGB, flottaison, 20h autonomie",
        category: "tech",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 30,
        title: "NAS 2 Baies Professionnel",
        description: "RAID, processeur dual-core, 8GB RAM",
        category: "tech",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 31,
        title: "Machine à Café Automatique",
        description: "Broyeur intégré, mousseur lait, 15 spécialités",
        category: "home",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1556910639-a600a8b65954?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 32,
        title: "Robot Cuiseur Multifonction",
        description: "12 programmes, cuisson sous pression, 6L",
        category: "home",
        price: 199.99,
        oldPrice: 249.99,
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Promo"
    },
    {
        id: 33,
        title: "Aspirateur Robot",
        description: "Cartographie laser, 200min autonomie, contrôle app",
        category: "home",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 34,
        title: "Oreiller Mémoire de Forme",
        description: "Anti-acariens, ergonomique, lavable",
        category: "home",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 35,
        title: "Couette Naturelle 4 Saisons",
        description: "Duvet d'oie, 240x220cm, hypoallergénique",
        category: "home",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 36,
        title: "Set de Couteaux Professionnels",
        description: "6 pièces, acier inoxydable, bloc bois",
        category: "home",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1583947581924-a6d2a016a6d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 37,
        title: "Bougies Parfumées Lot de 3",
        description: "Parfums vanille, lavande et bois de santal",
        category: "home",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 38,
        title: "Tapis d'Accueil",
        description: "100x60cm, antidérapant, motifs géométriques",
        category: "home",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 39,
        title: "Vase Design en Céramique",
        description: "Hauteur 30cm, finition mate, plusieurs coloris",
        category: "home",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 40,
        title: "Horloge Murale Moderne",
        description: "Diamètre 40cm, mécanisme silencieux, design épuré",
        category: "home",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1516410529446-4c7770cdef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    // Ajoutez 20 autres produits home ici...
{
        id: 41,
        title: "Mixeur Professionnel 1000W",
        description: "7 vitesses, bol en verre, lames inox",
        category: "home",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1570691078579-3b348e357ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 42,
        title: "Service à Thé Porcelaine",
        description: "12 pièces, design oriental, résiste au lave-vaisselle",
        category: "home",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1590112327280-8a1735b4517e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 43,
        title: "Plaque de Cuisson Induction",
        description: "4 foyers, sécurité enfant, timer intégré",
        category: "home",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1585730069406-b8803449f0a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 44,
        title: "Hotte Aspirante Design",
        description: "Débit 650m³/h, éclairage LED, silencieux",
        category: "home",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1585730220270-ccd3fdfa3824?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 45,
        title: "Set de Poêles Antiadhésives",
        description: "5 pièces, revêtement céramique, poignées amovibles",
        category: "home",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1583778176475-e8f92fa1eda3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 46,
        title: "Purificateur d'Air Intelligent",
        description: "Filtre HEPA, capteur qualité air, mode nuit",
        category: "home",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 47,
        title: "Tapis de Bain Mémoire Forme",
        description: "Dessins antidérapants, séchage rapide",
        category: "home",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1579656592043-0a1d51a1c5e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 48,
        title: "Luminaire LED Design",
        description: "Intensité réglable, température de couleur variable",
        category: "home",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 49,
        title: "Coussin Décoratif Velours",
        description: "45x45cm, plusieurs coloris, lavable",
        category: "home",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1579656592043-0a1d51a1c5e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 50,
        title: "Plateau de Service en Bois",
        description: "Bois d'acacia, finition naturelle, poignée intégrée",
        category: "home",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    // Mode (40 produits)
    // Maison (produits 51 à 60)
    {
        id: 51,
        title: "Machine à Pain Automatique",
        description: "12 programmes, cuve antiadhésive, départ différé",
        category: "home",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 52,
        title: "Grille-Pain 4 Fentes",
        description: "Décongélation, réchauffage, bagel mode",
        category: "home",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1583947581924-a6d2a016a6d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 53,
        title: "Cafetière Italienne Acier",
        description: "6 tasses, poignée froide, made in Italy",
        category: "home",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1556910639-a600a8b65954?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 54,
        title: "Presse-Agrumes Électrique",
        description: "200W, bac à pulpe, arrêt automatique",
        category: "home",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1570691078579-3b348e357ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 55,
        title: "Set de Verres à Vin",
        description: "6 pièces, cristal soufflé, pied renforcé",
        category: "home",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1590112327280-8a1735b4517e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 56,
        title: "Mousseur à Lait Électrique",
        description: "4 modes, nettoyage facile, USB rechargeable",
        category: "home",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1585730069406-b8803449f0a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 57,
        title: "Balance de Cuisine Digitale",
        description: "Précision 1g, 5kg max, écran LCD",
        category: "home",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1585730220270-ccd3fdfa3824?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 58,
        title: "Ustensiles de Cuisine en Bambou",
        description: "Set de 5 pièces, écologique, anti-rayures",
        category: "home",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1583778176475-e8f92fa1eda3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 59,
        title: "Boîtes de Conservation Hermétiques",
        description: "Lot de 10, empilables, micro-ondable",
        category: "home",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 60,
        title: "Tapis de Salle de Bain Anti-Dérapant",
        description: "100% coton, absorption rapide, lavable machine",
        category: "home",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1579656592043-0a1d51a1c5e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 61,
        title: "Manteau d'Hiver Premium",
        description: "Doudoune longue, isolation haute performance",
        category: "fashion",
        price: 199.99,
        oldPrice: 249.99,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Soldes"
    },
    {
        id: 62,
        title: "Chaussures de Running",
        description: "Amorti maximal, respirables, semelle anti-dérapante",
        category: "fashion",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 63,
        title: "Sac à Dos Urbain",
        description: "30L, compartiment ordinateur 15\", étanche",
        category: "fashion",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 64,
        title: "Montre Classique Cuir",
        description: "Cadran minimaliste, bracelet cuir véritable",
        category: "fashion",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 65,
        title: "Écharpe en Cachemire",
        description: "100% cachemire, longueur 180cm, plusieurs coloris",
        category: "fashion",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 66,
        title: "Jean Slim Premium",
        description: "Coton stretch, coupe ajustée, résistant",
        category: "fashion",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 67,
        title: "Chemise Oxford",
        description: "100% coton, col boutonné, plusieurs coloris",
        category: "fashion",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 68,
        title: "Ceinture en Cuir Véritable",
        description: "Largeur 3.5cm, boucle métallique, plusieurs coloris",
        category: "fashion",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 69,
        title: "Chaussettes Techniques",
        description: "Lot de 3 paires, respirantes, maintien optimal",
        category: "fashion",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1589487000140-40b358572523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 70,
        title: "Lunettes de Soleil Polarise",
        description: "Protection UV400, monture légère, plusieurs modèles",
        category: "fashion",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
    // Ajoutez 30 autres produits fashion ici...
     {
        id: 71,
        title: "Veste en Cuir Véritable",
        description: "Coupe motard, doublure chaude, plusieurs tailles",
        category: "fashion",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 72,
        title: "Pull en Cachemire",
        description: "Col rond, plusieurs coloris, lavage machine",
        category: "fashion",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 73,
        title: "Chaussures de Ville en Cuir",
        description: "Semelle confort, style intemporel, plusieurs coloris",
        category: "fashion",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 74,
        title: "Cravate en Soie",
        description: "100% soie, motifs élégants, plusieurs coloris",
        category: "fashion",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 75,
        title: "Gants en Cuir",
        description: "Doublure polaire, toucher smartphone",
        category: "fashion",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 76,
        title: "Bonnet en Laine Mérinos",
        description: "Thermorégulateur, plusieurs coloris",
        category: "fashion",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521369909029-1af5a23483df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 77,
        title: "Ceinture Tressée",
        description: "Style casual, boucle réglable, plusieurs coloris",
        category: "fashion",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 78,
        title: "Portefeuille Minimaliste",
        description: "Cuir véritable, 6 cartes, compartiment billets",
        category: "fashion",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 79,
        title: "Bracelet en Acier",
        description: "Ajustable, résistant à l'eau, style moderne",
        category: "fashion",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 80,
        title: "Étui à Lunettes",
        description: "Protection choc, microfibre intégrée, plusieurs coloris",
        category: "fashion",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1595751866979-de6e9d606220?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
// Mode (produits 81 à 100)
    {
        id: 81,
        title: "Parka Doudoune Hiver",
        description: "Isolation thermique, capuche amovible, étanche",
        category: "fashion",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 82,
        title: "Bottes en Cuir Imperméables",
        description: "Doublure polaire, semelle vibram, taille 36-44",
        category: "fashion",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 83,
        title: "Costume 3 Pièces Sur Mesure",
        description: "Laine premium, doublure soie, 20 coloris",
        category: "fashion",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 84,
        title: "Robe de Soirée Longue",
        description: "Soie naturelle, coupe princesse, plusieurs coloris",
        category: "fashion",
        price: 229.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 85,
        title: "Chaussettes Techniques Running",
        description: "Support voûte plantaire, ventilation 3D",
        category: "fashion",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1589487000140-40b358572523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 86,
        title: "Soutien-Gorge Sportif Haute Performance",
        description: "Support maximum, tissu respirant, bande large",
        category: "fashion",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 87,
        title: "Legging Yoga Compression",
        description: "Taille haute, tissu 4D stretch, poches cachées",
        category: "fashion",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1584956861968-8f5115156fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 88,
        title: "Maillot de Bain 1 Pièce",
        description: "Reshape, protection UV50+, séchage rapide",
        category: "fashion",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 89,
        title: "Pantalon de Travail Résistant",
        description: "Multi-poches, renforts genoux, tissu stretch",
        category: "fashion",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 90,
        title: "Blazer Femme Tailleur",
        description: "Coupe ajustée, matières premium, doublure soie",
        category: "fashion",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 91,
        title: "Chemisier en Soie Naturelle",
        description: "Col claudine, boutons nacrés, lavage main",
        category: "fashion",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 92,
        title: "Short en Lin Élégant",
        description: "Tissu respirant, coupe droite, passepoil contrasté",
        category: "fashion",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 93,
        title: "Gilet Sans Manches en Laine",
        description: "Mérinos extra-fin, tricotage dense, uni ou rayé",
        category: "fashion",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 94,
        title: "Bermuda Technique Randonnée",
        description: "Poches zippées, séchage rapide, protection UV",
        category: "fashion",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 95,
        title: "Sandales Orthopédiques",
        description: "Support plantaire, semelle antidérapante, réglable",
        category: "fashion",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 96,
        title: "Chapeau Panama Authentique",
        description: "Toquilla équatorien, bord 6cm, ruban de soie",
        category: "fashion",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1521369909029-1af5a23483df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 97,
        title: "Écharpe en Cachemire Longue",
        description: "200x70cm, tissage jacquard, 12 coloris",
        category: "fashion",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 98,
        title: "Gants en Cuir Conductifs",
        description: "Touchscreen compatible, doublure polaire",
        category: "fashion",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 99,
        title: "Ceinture de Sécurité en Soie",
        description: "3cm large, boucle métal brossé, plusieurs motifs",
        category: "fashion",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
        {
        id: 100,
        title: "Noeud Papillon en Soie",
        description: "Pré-noué, réglable, plusieurs coloris classiques",
        category: "fashion",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
];

// Fonction pour générer les produits
function generateProducts(filter = 'all') {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    let filteredProducts = products;
    
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        let badge = '';
        if (product.badge) {
            badge = `<span class="product-badge">${product.badge}</span>`;
        }
        
        let oldPrice = '';
        if (product.oldPrice) {
            oldPrice = `<span class="old-price">${product.oldPrice.toFixed(2)}€</span>`;
        }
        
        productCard.innerHTML = `
            ${badge}
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category === 'tech' ? 'Technologie' : product.category === 'home' ? 'Maison' : 'Mode'}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <div>
                        ${oldPrice}
                        <span class="price">${product.price.toFixed(2)}€</span>
                    </div>
                    <button class="view-btn" data-id="${product.id}">Voir <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Ajouter les événements aux boutons
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            viewProduct(productId);
        });
    });
}

// Fonction pour afficher un produit
function viewProduct(id) {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
        alert(`Vous avez sélectionné: ${product.title}\nPrix: ${product.price.toFixed(2)}€`);
        // Ici vous pourriez rediriger vers une page produit détaillée
    }
}

// Filtrer les produits
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        generateProducts(this.getAttribute('data-filter'));
    });
});

// Pagination
document.querySelectorAll('.page-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        // Ici vous pourriez charger d'autres produits pour la page sélectionnée
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    generateProducts();
    
    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
});

// Compteur de panier (simulé)
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Simuler l'ajout au panier
document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        cartCountElement.classList.add('animate');
        setTimeout(() => {
            cartCountElement.classList.remove('animate');
        }, 300);
    });
});