import { ReactComponent as GridIcon } from '../../../svgs/grid-icon.svg';
import { ReactComponent as ListIcon } from '../../../svgs/list-icon.svg';
import { ReactComponent as Arrow } from '../../../svgs/arrow-down.svg';


export const templateBtn = [
  {
    id: 1,
    title: 'Grid',
    img: <GridIcon />
  },
  {
    id: 2,
    title: 'List',
    img: <ListIcon />
  }
];

export const templateFormat = [
  {
    id: 1,
    title: 'Alphabetical Order',
    icon: <Arrow />
  },
  {
    id: 2,
    title: 'Release Year',
    icon: <Arrow />
  },
  {
    id: 3,
    title: 'Country',
    icon: <Arrow />
  },
]