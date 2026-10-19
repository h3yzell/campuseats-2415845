const vendors = [
    {
        id: 'amiette',
        name: 'Amiette',
        location: 'TTDI, Kuala Lumpur',
        openHours: '8:00 am - 10:00 pm',
        isOpen: true,
        menu: [
        { id: 'my-1', name: 'Pistachio Croissant', description: 'Pistachio cream, roasted pistachio crumble.', price: 18, category: 
        'Pastries', available: true },
        { id: 'my-2', name: 'Pain Au Chocolat', description: 'Flaky pastry with rich dark chocolate batons.', price: 14, category:
        'Pastries', available: true },
        { id: 'my-3', name: 'Café Latte', description: 'Brazil Cerrado + Ethiopia Sidama', price: 9, category:
        'Drinks', available: false },
        ],
    },

    {
        id: 'kafe-aminah',
        name: 'Kafe Mahallah Aminah',
        location: 'Mahallah Aminah, Ground Floor',
        openHours: '8:00 am - 9:00 pm',
        isOpen: true,
        menu: [
        { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 9, category: 'Rice', available: true },
        { id: 'ami-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
        ],
    },
]
export default vendors
