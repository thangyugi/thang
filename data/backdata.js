import { Express, Node, PHP, Laravel } from './tech_icons/backend'
import { AWS, Nextcloud, Sakura } from './tech_icons/clouddb'
import { MySQL, Mongodb } from './tech_icons/database'

// tech stack
/**
 * Backend
 */

const backStack = [
  {
    title: 'Express',
    Image: Express,
    color: '#92B86B',
  },
  {
    title: 'Node',
    Image: Node,
    color: '#339933',
  },
  {
    title: 'PHP',
    Image: PHP,
    color: '#777BB4',
  },
  {
    title: 'Laravel',
    Image: Laravel,
    color: '#FF2D20',
  },
]

/**
 * Cloud
 */
const clouddb = [
  {
    title: 'AWS',
    Image: AWS,
    color: '#FF9900',
  },
  {
    title: 'Next cloud',
    Image: Nextcloud,
    color: '#0082C9',
  },
  {
    title: 'XServer',
    Image: Sakura,
    color: '#1B64A7',
  },
  {
    title: 'Sakura',
    Image: Sakura,
    color: '#FF5577',
  },
]
/**
 * DB
 */

const database = [
  {
    title: 'MySQL',
    Image: MySQL,
    color: '#4479A1',
  },
  {
    title: 'M-DB',
    Image: Mongodb,
    color: '#47A248',
  },
]

export { backStack, clouddb, database }
