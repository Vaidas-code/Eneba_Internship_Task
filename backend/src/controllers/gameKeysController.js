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
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.incrementLikeCount = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await incrementLikeCountById(id);
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
