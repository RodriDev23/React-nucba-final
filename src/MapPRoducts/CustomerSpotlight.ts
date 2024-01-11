interface CustomerSpotlight {
  id: number
  imgOfUser: string
  comment: string
  rating: number
  name: string
}

const customerSpotlightsData: CustomerSpotlight[] = [
  {
    id: 1,
    imgOfUser:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fman%2F28-man-png-image.png&f=1&nofb=1&ipt=891002bccf23b21c8c869b34555bbfb9e09a24f12f353e7239009ef6531a3636&ipo=images',
    comment:
      'Absolutely love the vinyls from this store! Great selection and quality.',
    rating: 5,
    name: 'John Doe'
  },
  {
    id: 2,
    imgOfUser:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F3%2FSmiling-Man-PNG-Download-Image.png&f=1&nofb=1&ipt=4e5632a6e7017d341ad61a73a997dfaa906ef41b9ecc5b7802903d70573cbf6b&ipo=images',
    comment:
      'The customer service is excellent, and the vinyls arrived in perfect condition.',
    rating: 4,
    name: 'John Smith'
  },
  {
    id: 3,
    imgOfUser:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgenericbrandhuman.com%2Fwp-content%2Fuploads%2F2016%2F06%2FGBH_3640_1.jpg&f=1&nofb=1&ipt=7a453c4685e272e0f05a3f93594ae39554974e3d608abc42c6bf5d752accaf23&ipo=images',
    comment:
      'Fantastic experience shopping for vinyls. The packaging was top-notch!',
    rating: 5,
    name: 'Samuel Johnson'
  },
  {
    id: 4,
    imgOfUser:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgenericbrandhuman.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fheadshot.jpg&f=1&nofb=1&ipt=33a6da86fead30f6a320ace2bb58681c0801e76208512ffcbc5d714cded57a1c&ipo=images',
    comment: 'Impressed by the quick delivery and the unique vinyls available.',
    rating: 4,
    name: 'Damian White'
  },
  {
    id: 5,
    imgOfUser:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-business-manbusinessmanbusinesssalesrevenuegenerating-14215268381234srmh.png&f=1&nofb=1&ipt=0744e0d8af642cc559ca61250ee497d235715aca274d84ad1ce5bed01782e49d&ipo=images',
    comment: 'Great collection! Will definitely be ordering more vinyls soon.',
    rating: 5,
    name: 'Alex Turner'
  },
  {
    id: 6,
    imgOfUser:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgenericbrandhuman.com%2Fwp-content%2Fuploads%2F2016%2F06%2FIMG_8312_white.jpg&f=1&nofb=1&ipt=9be6809a78a8be4b5bb5a798060acdbebb471bc79f745d33f7b65d9c3e08e457&ipo=images',
    comment:
      'Awesome customer support and a diverse range of vinyls to choose from.',
    rating: 4,
    name: 'Miguel Davis'
  }
]

export default customerSpotlightsData
