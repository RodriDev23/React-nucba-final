import { Carousel } from '@material-tailwind/react'

export function CarouselTransition (): JSX.Element {
  return (
    <Carousel transition={{ duration: 2 }} className='rounded-xl mt-5 text-black' placeholder={undefined}>
      <img
        src='https://i.pinimg.com/originals/f1/3a/bc/f13abc51c187c8252df7580d149eb586.jpg'
        alt='image 1'
        className='h-full w-full object-cover'
      />
      <img
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0881%2F4568%2Fproducts%2Fsaladdays-1copy.jpg%3Fv%3D1625086631&f=1&nofb=1&ipt=795a455df762f3e19602e77ce1647b8938745622a752423245c37e02700305d1&ipo=images'
        alt='image 2'
        className='h-full w-full object-cover'
      />
      <img
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmerchbar.imgix.net%2Fproduct%2F4%2F1616%2F35486374%2FYOTQ5S-1540264069-3601x3601-1540264060-005_Tyler%2520the%2520Creator_Flower%2520Boy_10.jpg%3Fw%3D1280%26h%3D1280%26quality%3D60%26auto%3Dcompress%25252Cformat&f=1&nofb=1&ipt=fa6aa0774ad24855da228c3d73c7b5b979e81f247966a4d495f1524dcf6395a5&ipo=images'
        alt='image 3'
        className='h-full w-full object-cover'
      />
    </Carousel>
  )
}
