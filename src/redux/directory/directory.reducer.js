const INITIAL_STATE = {
  sections: [
    {
      title: 'casquettes/chapeaux',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/casquettes-chapeaux'
    },
    {
      title: 'vestes',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/vestes'
    },
    {
      title: 'chaussures',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/chaussures'
    },
    {
      title: 'femme',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/femme'
    },
    {
      title: 'homme',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/homme'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;