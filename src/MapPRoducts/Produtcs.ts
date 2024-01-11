interface ProductsType {
  name: string
  img: string
  price: number
  description: string
}

const Products: ProductsType[] = [
  {
    name: 'Salad Days by Mac DeMarco',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthefirenote.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fmac-demarco-salad-days-1024x1024.jpg&f=1&nofb=1&ipt=58ac0c8980cab0dde3360f1f9756f037f8d72aba5216ab4772ecaaa1eadb8cac&ipo=images',
    price: 25.99,
    description: 'Mac DeMarco\'s iconic album "Salad Days" on vinyl.'
  },
  {
    name: 'The OOZ by King Krule',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2FA1AKttEhKfL._SL1500_.jpg&f=1&nofb=1&ipt=00d6d7ea7b828efeb5a08046d49c51bb1e104a54b7f4019d84cf1543d4f2b13b&ipo=images',
    price: 19.99,
    description: 'King Krule\'s masterpiece "The OOZ" available on vinyl.'
  },
  {
    name: 'To Pimp a Butterfly by Kendrick Lamar',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cleveland.com%2Fresizer%2FqmRaRdl1y18yXRpe_X9iWlYM6JI%3D%2F1280x0%2Fsmart%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.cleveland.com%2Fhome%2Fcleve-media%2Fwidth2048%2Fimg%2Fent_impact_home%2Fphoto%2F17273566-small.png&f=1&nofb=1&ipt=81eb8c84ecedc9ef9e456cb565270da20324bf5b1becfd85ff27c66fe8759d75&ipo=images',
    price: 29.99,
    description:
      'Kendrick Lamar\'s critically acclaimed "To Pimp a Butterfly" on vinyl.'
  },
  {
    name: 'Currents by Tame Impala',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FYTowwwHGojp-7OYH9xvBGk1PR8Q%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-7240348-1437277144-6299.jpeg.jpg&f=1&nofb=1&ipt=9a34699331f0aee9c17aee94c50d797c7185de2ddd73afe7a6ced2bba89e1e4c&ipo=images',
    price: 22.5,
    description:
      'Experience Tame Impala\'s psychedelic journey with "Currents" on vinyl.'
  },
  {
    name: 'Random Access Memories by Daft Punk',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.musiciansfriend.com%2Fis%2Fimage%2FMMGS7%2FDaft-Punk--Random-Access-Memories-Vinyl-LP%2FJ22112000000000-00-1600x1600.jpg&f=1&nofb=1&ipt=931ae2759d9f9fef2b33aa167b78ed303ef8ac823574e3f745b0f6db9ee7eb7e&ipo=images',
    price: 34.99,
    description:
      'Daft Punk\'s Grammy-winning "Random Access Memories" on limited edition vinyl.'
  },
  {
    name: 'Rumours by Fleetwood Mac',
    img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia1.fdncms.com%2Forlando%2Fimager%2Fclassic-albums-live-fleetwood-macs-ru%2Fu%2Foriginal%2F2392051%2Frumours.jpg&f=1&nofb=1&ipt=6543c6e697347182733885d20e934c49b2bf35ed83716a2a6a0b1744ec3145a1&ipo=images',
    price: 27.5,
    description: 'Classic vinyl of Fleetwood Mac\'s legendary album "Rumours."'
  }
]

export default Products
