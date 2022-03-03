import { CONFIG } from './config'

export const WORDS = [
 /* 'mouse',
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
  'gizmo',
  'pride',
  'groot',
  'hydra',
  'grubs',
  'hyena',
  'sofia',
  'rogue',
  'ronin',
  'proud',
  'storm',
  'thing',
  'venom',
  'rides',
  'alien',
  'astro',
  'creek',
  'movie',
  'epcot',
  'paris',
  'music',
  'china',
  'royal',
  'blaze',
  'tracy', 
  'oscar',
  'hocus',
  'pocus',
  'ducks',
  'night', 
  'wreak',
  'ralph', 
  'black', 
  'train',
  'woody', 
  'heart',
  'dewey',
  'louie', 
  'march',
  'kronk',
  'pacha',
  'fairy',
  'smith', 
  'percy', 
  'flora',
  'fauna',
  'flynn',
  'rider', 
  'marie',
  'pongo',
  'kanga',
  'lumpy', 
  'shang', 
  'tramp',
  'seven',
  'tower',
  'under',
  'river', 
  'party', 
  'crush', 
  'laugh', 
  'floor', 
  'theme', 
  'trail', 
  'tough',
  'scary',
  'stage',
  'shows', 
  'drops', 
  'water',
  'house',
  'lucas',
  'rides', */
  'aurora'
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
