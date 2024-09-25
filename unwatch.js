const fs = require('fs');

module.exports = {
    name: 'unwatch',
    description: 'Supprime un produit de la surveillance',
    execute(message, args) {
        const productUrl = args[0];

        // Charger les produits surveillés
        let items = JSON.parse(fs.readFileSync('./data/watchlist.json', 'utf8'));
        const index = items.findIndex(item => item.url === productUrl);
        if (index > -1) {
            items.splice(index, 1);
            fs.writeFileSync('./data/watchlist.json', JSON.stringify(items));
            message.channel.send(`Produit supprimé de la surveillance: ${productUrl}.`);
        } else {
            message.channel.send('Produit non trouvé dans la liste de surveillance.');
        }
    }
};
