import { CONFIG } from './config'

export const WORDS = [
  'mouse',
  'ariel',
  'beast',
  'belle',
  'dumbo',
  'haunt',
  'sally',
  'walle',
  'elena',
  'bruno',
  'dream',
  'bruno',
  'pixar',
  'roger',
  'pixie',
  'peter',
  'tours',
  'rides',
  'color',
  'alice',
  'jones',
  'heffa',
  'brush',
  'track',
  'party',
  'space',
  'glove',
  'world',
  'small',
  'tiana',
  'goofy',
  'daisy',
  'moana',
  'bambi',
  'fauna',
  'flash',
  'genie',
  'hades',
  'darth',
  'vader',
  'magic',
  'white',
  'pluto',
  'robin',
  'honey',
  'casey',
  'epcot',
  'timon',
  'pumba',
  'wendy',
  'seven',
  'dwarf',
  'happy',
  'dopey',
  'baloo',
  'mushu',
  'tramp',
  'jafar',
  'simba',
  'pongo',
  'brave',
  'sally',
  'story',
  'padme',
  'queen',
  'windu',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
