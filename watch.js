const fs = require('fs');

module.exports = {
    name: 'watch',
    description: 'Ajoute un produit à la surveillance',
    execute(message, args) {
        const productUrl = args[0];
        const maxPrice = parseFloat(args[1]);
        if (!productUrl || isNaN(maxPrice)) {
            return message.channel.send('Usage: `*watch <url> <prix_max>`');
        }

        // Charger les produits surveillés
        let items = JSON.parse(fs.readFileSync('./data/watchlist.json', 'utf8'));
        items.push({ url: productUrl, maxPrice: maxPrice });

        // Sauvegarder la liste
        fs.writeFileSync('./data/watchlist.json', JSON.stringify(items));
        message.channel.send(`Produit ajouté à la surveillance: ${productUrl} avec un prix maximum de ${maxPrice}€.`);
    }
};
