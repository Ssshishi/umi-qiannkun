import { ReactElement } from "react";
import {
  SmileTwoTone,
  CheckCircleTwoTone,
  HeartTwoTone,
} from '@ant-design/icons';


export interface baseDataIprops {
  name: string
  second: {
    name: string
    icon: ReactElement
    third: {name:string, path: string}[]
  }[]
}

export const baseData: baseDataIprops[] = [
  {
    name: 'app1',
    second: [
      {
        name: 'star',
        icon: <HeartTwoTone twoToneColor="#eb2f96" /> ,
        third:
          [
            { name: 'earth', path: '/app1/star/earth' },
            { name: 'sun', path: '/app1/star/sun' },
          ]
      },
      {
        name: 'water',
        icon: <SmileTwoTone twoToneColor='#2feb38'/>,
        third:
          [
            { name: 'ocean', path: '/app1/water/ocean' },
            { name: 'sea', path: '/app1/water/sea' },
          ]
      },
    ]
  },
  {
    name: 'app2',
    second: [
      {
        name: 'animal',
        icon: <HeartTwoTone twoToneColor="#eb2f96" /> ,
        third:
          [
            { name: 'cat', path: '/app2/animal/cat' },
            { name: 'dog', path:'/app2/animal/dog' },
          ]
      },
      {
        name: 'fruit',
        icon: <SmileTwoTone twoToneColor='#2feb38'/>,
        third:
          [
            { name: 'banana', path: '/app2/fruit/banana' },
            { name: 'mongo', path: '/app2/fruit/mongo'},
          ]
      }
    ]
  },
]
