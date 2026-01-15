const { getAllGameKeys, searchGameKeys, incrementLikeCountById } = require('../models/gameKeysModel');


exports.listGameKeys = async (req, res) => {
  try {
    const search = req.query.search;
    let data;
    if (search) {
      data = await searchGameKeys(search);
    } else {
      data = await getAllGameKeys();
    }

    const processedData = data.map(item => {
      const cashbackPrice = item.cashbackPercent ? (item.price * (1 - item.cashbackPercent / 100)) : null;
      const cashbackAmmount = cashbackPrice ? cashbackPrice * 0.11 : 0;
      
      return {
        ...item,
        cashbackPrice,
        cashbackAmmount
      };
    });
    
    res.json({ data: processedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
