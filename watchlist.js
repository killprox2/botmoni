const fs = require('fs');

module.exports = {
    name: 'watchlist',
    description: 'Affiche la liste des produits surveillés',
    execute(message, args) {
        let items = JSON.parse(fs.readFileSync('./data/watchlist.json', 'utf8'));

        if (items.length === 0) {
            return message.channel.send('Aucun produit n\'est surveillé.');
        }

        const productList = items.map(item => `${item.url} - max ${item.maxPrice}€`).join('\n');
        message.channel.send(`Produits surveillés:\n${productList}`);
    }
};
