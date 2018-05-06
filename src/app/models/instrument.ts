export class Instrument {
    id: number;
    name: string;
    hireCost: number;
    isLate: boolean;
    imageUrl: string;
}

export const instruments: Instrument[] = [
    {id: 1, name: 'Marshall Electric Guitar', hireCost: 10, isLate: true,
    imageUrl: 'https://media.takealot.com/covers_tsins/43383128/5030463349267-1-zoom.jpg' },
    {id: 2, name: 'Grand Piano', hireCost: 20, isLate: false,
    imageUrl: 'http://cdn2.bigcommerce.com/server2100/yz4v5/products/276/images/528/Mod._218_Concert_I_10black__86762.1398059248.500.659.jpg?c=2' },
    {id: 3, name: 'Stunning Violin', hireCost: 10, isLate: false,
    imageUrl: 'http://tomleemusic.ca/rentals/media/catalog/product/cache/2/image/1500x/040ec09b1e35df139433887a97daa66f/a/v/av544sku_1_3.jpg'},
];
