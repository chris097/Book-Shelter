import Img1 from '../svgs/image1-svg.svg';
import Img2  from '../svgs/image2-svg.svg';
import Img3  from '../svgs/image3-svg.svg';
import Img4  from '../svgs/image4-svg.svg';
import Img5  from '../svgs/image5-svg.svg';

const books = [
  {
    id: 1,
    book_name: 'Romace',
    book_category: [
      {book_id: 1, book_subname: 'Romace1', year: 1992, book_author: 'Christian Chiemela', url: Img1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 2, book_subname: 'Romace2', year: 1993, book_author: 'Christian Chiemela', url: Img2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 3, book_subname: 'Romace3', year: 2020, book_author: 'Christian Chiemela', url: Img3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 4, book_subname: 'Romace4', year: 1995, book_author: 'Hofin Mafia', url: Img4,  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 5, book_subname: 'Romace5', year: 1995, book_author: 'Hofin Mafia', url: Img5,  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
    ],
  },
  {
    id: 2,
    book_name: 'Fantasy',
    book_category: [
      {book_id: 5, book_subname: 'Fantasy1', year: 2020, book_author: 'Christian Chiemela', url: Img2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 7, book_subname: 'Fantasy2', year: 1995, book_author: 'Hofin Mafia', url: Img4,  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
    ],
  },
  {
    id: 3,
    book_name: 'Contemporary',
    book_category: [
      {book_id: 8, book_subname: 'Contemporary1', year: 2020, book_author: 'Christian Chiemela', url: Img4,  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 9, book_subname: 'Contemporary2', year: 2020, book_author: 'Christian Chiemela', url: Img1,  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 10, book_subname: 'Contemporary3', year: 2020, book_author: 'Christian Chiemela', url: Img3,  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
      {book_id: 11, book_subname: 'Contemporary4', year: 1995, book_author: 'Hofin Mafia', url: Img2,  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus reiciendis soluta eos? Exercitationem aliquam enim velit beatae consequatur dolor sapiente dignissimos culpa nostrum cumque. Animi, nulla adipisci magni fugit, maxime perspiciatis dignissimos ad quasi nesciunt, officia mollitia autem debitis!'},
    ],
  },
]

export default books;